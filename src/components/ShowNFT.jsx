import Identicon from 'react-identicons'
import { useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import { setGlobalState, useGlobalState } from '../store'
const  imgHero= 
'https://firebasestorage.googleapis.com/v0/b/pearlsell.appspot.com/o/MDX006.png?alt=media&token=a9e4c464-9d75-4fb3-a462-ba7f4b99a50c'

const ShowNFT = () => {
  const [modal] = useGlobalState('showModal')
  
const onChangePrice = () => {
  setGlobalState('showModal', 'scale-0')
  setGlobalState('updatemodal', 'scale-100')
}

   const handleSubmit = () => {
      closeModal()
    }

    const closeModal = () => {
      setGlobalState('showModal', 'scale-0')
    }

  return (
    <div className={`fixed top-0 left-0  w-screen h-screen
    flex items-center justify-center bg-black bg-opacity-50
    transform transition-transform duration-300 ${modal}`}
    >
      <div className="bg-[#151c25] shadow-xl shadow-[#e32970]
      rounded-xl w-11/12 md:w2/5 h-7/12 p-6"
      >
        <div className="flex flex-col">
          <div className="flex justify-between items-center text-gray-400">
            <p className="font-semibold">Buy NFT</p>
            <button 
            type  ="button"
            onClick={closeModal}
            className="border-0 bg-transparent
            focus:outline-none"
            >
                <FaTimes/>
            </button>
          </div>

          <div className="flex justify-center rounded-xl mt-5">
            <div className="shrink-0 h-40 w-40 rounded-xl overflow-hidden">
              <img
              className="h-full w-full object-cover cursor-pointer"
              src={imgHero} 
              alt="NFT"/>
            </div>
          </div>

          <div className='flex flex-col justify-start rounded-xl mt-5'>
            <h4 className='text-white fone-semibold'>
              Title
            </h4>
            <p className='text-gray-400 text-xs my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Saepe vitae nesciunt officiis nam reiciendis necessitatibus, assumenda at facere 
              suscipit laudantium sit earum ipsa, 
              dolores possimus blanditiis! Impedit porro natus at! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Quis perferendis, tempora dolorum placeat laboriosam saepe 
              tempore repellendus excepturi suscipit sint rerum aperiam accusantium 
              numquam architecto itaque quasi dolor facere repudiandae!
              </p>

              <div className="flex justify-between items-center mt-3 text-white">
                <div className='flex justify-start items-center'>
                  <Identicon 
                  className ="h-10 w-10 object-contain rounded-dull mr-3" string={'bdjsdf'} size={50}/>
                
                <div className='flex flex-col justify-center items-start'>
                  <small className='text-white font-bold'>@Ower</small>
                  <small className='text-pink-800 font-semibold'>
                    0x31...2c23
                    </small>
                </div>
                </div>
                <div className='flex flex-col text-white'>
                  <small className='text-xs'>Current Price</small>
                  <p className='text-sm font-semibold'>0.34 ETH</p>
                </div>
              </div>
          </div>

          <div className='flex justify-between items-center space-x-2'>
            <button className='flex justify-center items-center 
          shadow-lg shadow-black text-white w-full
          bg-[#e32970] hover:bg-[#bd255f] rounded-full p-2 mt-5'>
              Purchase
          </button> 

          <button className='flex justify-center items-center 
          shadow-lg shadow-black text-white w-full
          bg-[#e32970] hover:bg-[#bd255f] rounded-full p-2 mt-5'
          onClick={onChangePrice}
          >
              Change Price
          </button> 

          </div>
        </div>
      </div>
      </div>
  )
}

export default ShowNFT