import Web3 from "web3";
import { setGlobalState, getGlobalState, setAlert } from './store'
import abi from './abis/PearlNFT.json'




const { ethereum } = window
window.web3 = new Web3(ethereum)
window.web3 = new Web3(window.web3.currentProvider)


const getEthereumContract = async () => {
    const connectedAccount = getGlobalState('connectedAccount')
    if(connectedAccount) {
        const web3 = window.web3
        const networkId = await web3.eth.net.getId()
        const networkData = abi.networks[networkId]
        if(networkData) {
            const contract = new web3.eth.Contract(abi.abi, networkData.address)
            return contract
        }else {
            return null
        }
    } else {
        return getGlobalState('contract')
    }
}
const connectWallet = async () => {
    try {
        if(!ethereum) return alert('Please Install MetaMask')
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
            setGlobalState ('connectedAccount', accounts[0].toLowerCase())

    } catch(error) {
        reportError(error)
    }
}


const isWalletConnected = async () => {
    try {
        if (!ethereum) return alert ('Please Install Metamask')
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
   
            window.ethereum.on('chainChanged', async (chainId)=>{
                window.location.reload()
            })
            window.ethereum.on('accountsChanged', async () =>{
                setGlobalState( 'connectedAccount', accounts[0].toLowerCase() )
                await isWalletConnected()
            })
            if(accounts.length) {
                setGlobalState( 'connectedAccount', accounts[0].toLowerCase() )
            } else {
                alert('Please Connect Wallet')
                console.log('No account found')
            }
        } catch (error) {}
}

const getAllNFTs = async() =>{
        try {
            if(!ethereum) return alert('Please Install MetaMask')
           
            const contract = await getEthereumContract()
            const nfts = await contract.methods.getAllNFTs().call()
            const transaction = await contract.methods.getAllTransactions().call()
            setGlobalState('nfts', structuredNfts(nfts))
            setGlobalState('transaction', structuredNfts(transaction))
            console.log(structuredNfts(nfts))
        } catch (error) {
            reportError(error)
        }
}

const structuredNfts = (nfts) => {
    return nfts
      .map((nft) => ({
        id: Number(nft.id),
        owner: nft.owner.toLowerCase(),
        cost: window.web3.utils.fromWei(nft.cost),
        title: nft.title,
        description: nft.description,
        metadataURI: nft.metadataURI,
        timestamp: nft.timestamp,
      }))
      .reverse()
   }


const reportError = (error) => {
    setAlert(JSON.stringify(error), 'red')
    throw new Error('No Ethereum Object')
}

export {connectWallet, isWalletConnected, getAllNFTs}