import Identicon from 'react-identicons'
import { setGlobalState, useGlobalState } from '../store'
const  imgpearl= 
'https://rose-useful-dormouse-180.mypinata.cloud/ipfs/QmNySiPMdgtuRZbbQZk7VH8jBhaF6GzokFEt8w6q95ZUdz'
const Hero = () => {
  return (
    <div 
    className="flex slex-col md:flex-row  w-4/5 justify-between
    items-center mx-auto py-10"
    >
        <div  className="md:w-3/6 w-full">
            <div> 
                <h1 className="text-white text-5xl font-bold">
                    BỘ SƯU TẬP <br /> TRANG SỨC, <br />
                    <span className="text-gradient">JEWELRY</span> COLLECTTIONS NFTS
                </h1>
                <p className="text-gray-500 font-semibold text-md mt-3">
                Mint and collect the hottest Jewelry NFTs you like!!
                </p>
            </div>
            <div className="flex mt-5">
                <button
                className="shadow-xl  shadow-black text-white
                bg-[#e32970] hover:bg-[#bd255f]
                
                rounded-full p-2"
                onClick={() => setGlobalState('modal', 'scale-100')}

                >
                    Create NFT 
                </button>
            </div>

            <div className="w-3/4  flex justify-between items-center mt-5">

                <div className="text-white ">
                    <p className="font-blod">
                        230k
                    </p>
                    <small className="text-gray-300">users</small>
                </div>
                <div className="text-white ">
                    <p className="font-blod">
                        100k
                    </p>
                    <small className="text-gray-300">Artwork</small>
                </div>
                <div className="text-white ">
                    <p className="font-blod">
                        50k
                    </p>
                    <small className="text-gray-300">Artists</small>
                </div>
            </div>
        </div>

        <div className="shadow-xl shadow-black md:w-2/5 w-full
        mt-10 md:mt-0 rounded-md overfow-hidden  bg-gray-800">
            <img 
            className="h-60 w-full object-cover" 
            src={imgpearl} 
            alt="Hero" 
            />

            <div className='flex justify-start items-center p-3'>
                <Identicon
                    className="h-10 w-10 object-contain rounded-full mr-3"
                    string ={'0x21...353a'}
                    size={50}
                />
                <div>
                    <p className='text-white font-semibold'>0x21...353a</p>
                    <small className='text-pink-800 font-bold'>@you</small>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Hero