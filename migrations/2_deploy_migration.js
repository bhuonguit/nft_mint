const PearlNFT = artifacts.require('PearlNFT')

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts()

  await deployer.deploy(PearlNFT, 'Pearl NFTs', 'TNT', 10, accounts[1])
}