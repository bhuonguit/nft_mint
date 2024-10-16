import { connectWallet } from '../Blockchain.services'
import pearlLogo from '../assets/logo1.png'
import { useGlobalState } from '../store'

const Header = () => {
  const [connectedAccount] = useGlobalState( 'connectedAccount' )
  return (
    <div className='w-4/5 flex justify-between md:justify-center items-center py-4 mx-auto'>
        <div className='md:flex-[0.5] flex-initial justify-center 
        items-center'>
            <img 
            className='w-32 cursor-pointer'
             src={pearlLogo} atl="Logo"/>
        </div>
        <ul className='md: flex-[0.5] text-white md:flex
        hidden list-none justify-between items-center flex-initial'>
            <li className='mx-4 cursor-pointer'>Sản phẩm</li>
            <li className='mx-4 cursor-pointer'>Bộ Sưu Tập</li>
            <li className='mx-4 cursor-pointer'>Đá Quý</li>
            <li className='mx-4 cursor-pointer'>Khuyến Mãi</li>
        </ul>

        {connectedAccount ? (
          <button className="shadow-xl shadow-black text-white first-letter first-letter 
          bg-[#0e414c] hover:bg-[#4d4348] md:text-xs p-2
              rounded-full"
              >
              {connectedAccount}
  
          </button>
        ) : (
          <button className="shadow-xl shadow-black text-white first-letter first-letter 
          bg-[#78dff7] hover:bg-[#e2b7cb] md:text-xs p-2
              rounded-full"
              onClick={connectWallet}
              >
              Connect Wallet
  
          </button>
        )}
    </div>
  )
}

export default Header