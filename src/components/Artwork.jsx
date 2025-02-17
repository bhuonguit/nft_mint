import { setGlobalState} from "../store"

const  imgHero= 
'https://rose-useful-dormouse-180.mypinata.cloud/ipfs/QmSNwbyK27F8oA66t3d1w9Qt8KsxJ2eXvJX4cNJUDcwPn1'
const Artwork = () => { 

    const imgIn = 'https://firebasestorage.googleapis.com/v0/b/pearlsell.appspot.com/o/MDX006.png?alt=media&token=a9e4c464-9d75-4fb3-a462-ba7f4b99a50c'
  return (
    <div className="bg-[#e470b2] gradient-bg-artworks">
        <div className="w-4/5 py-10 mx-auto">
            <h4 className="text-white text-size-3xl font-bold  uppercase first-letter:
            text gradient">
                Latest Jewelry
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4
            gap-6 md:gaps-4 lg:gaps-3  py-2.5">
                 {Array(4)
           .fill()
           .map((nft, i) => (
             <Card key={i + 1} nft={i + 1} />
           ))}
            </div>

            <div className="text-center my-5 ">
                 <button className="shadow-lg shadow-black text-white
            bg-[#943b7f] hover:bg-[#1c1014]  rounded-full p-2">
                Load More
                 </button>
            </div>
        </div>
    </div>
  )
}

const Card = ({nft}) => (
    <div 
    className="w-full shadowxl 
    shadow-black rounded-md 
    overflow-hidden bg-gray-800 my-2 p-3"
    >
        <img 
        className="h-60 w-full  object-cover 
        shadow-lg shadow-black rounded-lg mb-3" 
        src={imgHero}
        alt={'ArtWork'}
/>   
        <h4 className="text-white  font-semibold">NFT #{nft}</h4>
        <p className="text-gray-400 texxt-sm my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iste exercitationem eaque suscipit incidunt ipsa illum recusandae sunt explicabo labore esse, cumque, id facere provident quod. Repudiandae minus exercitationem fuga!
        </p>
        <div className="flex justify-between items-center mt-3 text-white">
            <div className="flex flex-col">
                <small className="text--xs">Current Price</small>
                <p className="text-sm font-semi-bold">0.22 ETH</p>
            </div>

            <button className="shadow-lg  shadow-black
            text-sm  bg-[#e32970] hover:bg-[#bd255f] rounded-full
            px-1.5 py-1"
            onClick={() => setGlobalState('showModal', 'scale-100')}
            >
                View Details
                </button>
        </div>
    </div>
)
export default Artwork