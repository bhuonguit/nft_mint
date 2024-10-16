import { useState } from 'react';
import { setAlert, setGlobalState, setLoadingMsg, useGlobalState, getGlobalState } from '../store';
import { create } from 'ipfs-http-client';
import { FaTimes } from 'react-icons/fa';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { mintNFT } from '../Blockchain.services';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";



const  imgpearl=
'https://rose-useful-dormouse-180.mypinata.cloud/ipfs/QmNySiPMdgtuRZbbQZk7VH8jBhaF6GzokFEt8w6q95ZUdz'


const firebaseConfig = {
  apiKey: "AIzaSyBF4H9T3pYMPPqhLYrhsIKp5FlDNwRnvs0",
  authDomain: "pearlsell.firebaseapp.com",
  projectId: "pearlsell",
  storageBucket: "pearlsell.appspot.com",
  messagingSenderId: "1039890275273",
  appId: "1:1039890275273:web:101f18dfc82b2c71972618",
 measurementId: "G-9VWS74DHXJ"
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const storage = getStorage(firebaseApp);
const firestore = getFirestore(firebaseApp)

const CreateNFT = () => {
  const [modal] = useGlobalState('modal');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [imgBase64, setImgBase64] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !price || !fileUrl) {
      alert('All fields are required'); 
      return;
    }

    try {
      const fileRef = await uploadFileToStorage(fileUrl);
      const downloadUrl = await getDownloadURL(fileRef);
      const nft = {
        title,
        description,
        price,
        metadataURI: downloadUrl
      };
      const docRef = await addDoc(collection(firestore, 'nftnew'), nft);

      console.log('NFT created successfully:', docRef.id);
      resetForm();

    } catch (error) {
      console.error('Error creating NFT:', error);
      setLoadingMsg(''); 
      alert('Failed to create NFT. Please try again.');
    }
  };

  async function uploadFileToStorage(file) {
    try {
      const storageRef = ref(storage, 'images/' + file.name);
      await uploadBytes(storageRef, file);
      return storageRef;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }

  
  const changeImage = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgBase64(reader.result);
      };
      reader.readAsDataURL(file);
      setFileUrl(file);
    }
  };


  const closeModal = () => {
    setGlobalState('modal', 'scale-0');
    resetForm();
  };

  const resetForm = () => {
    setFileUrl('');
    setImgBase64(null);
    setTitle('');
    setDescription('');
    setPrice('');
  };
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen
      flex items-center justify-center bg-black bg-opacity-50
      transform transition-transform duration-300 ${modal}`}
    >
      <div className="bg-[#151c25] shadow-xl shadow-[#e32970]
        rounded-xl w-11/12 md:w-2/5 h-7/12 p-6"
      >
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex justify-between items-center text-gray-400">
            <p className="font-semibold">Add NFT</p>
            <button
              type="button"
              onClick={closeModal}
              className="border-0 bg-transparent
                focus:outline-none"
            >
              <FaTimes/>
            </button>
          </div>

          <div className="flex justify-center rounded-xl mt-5">
            <div className="shrink-0 w-20 rounded-xl overflow-hidden">
              <img
                className="h-full w-full object-cover cursor-pointer"
                src={imgBase64 || imgpearl}
                alt="NFT"
              />
            </div>
          </div>

          <div>
            <label className='block'>
              <span className=''></span>
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg, image/jpg"
                className="block w-full text-sm text-white
                  file:mr-4 file:py-2 file:px-4 file:rounded-full
                  file:border-0 file-text-sm file:font-semibold
                  hver:file:bg-[#1d2631] focus:outline-none
                  cursor-pointer focus-ring-0  bg-gray-800"
                onChange={changeImage}
                required
              />
            </label>
          </div>

          <div className="flex justify-between items-center bg-gray-800
            rounded-xl mt-5"
          >
            <input
              type="text"
              className="block w-full text-sm text-slate-500
                focus:outline-none cursor-pointer focus:ring-0
                bg-transparent border-0"
              placeholder='Title'
              name='title'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </div>

          <div className='flex justify-between items-center bg-gray-800
            rounded-xl mt-5'
          >
            <input
              type="text"
              className="block w-full text-sm text-slate-500
                focus:outline-none cursor-pointer focus:ring-0
                bg-transparent border-0"
              placeholder='Price (ETH)'
              min={0.01}
              step={0.01}
              name='price'
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </div>

          <div className='flex justify-between items-center bg-gray-800
            rounded-xl mt-5'
          >
            <textarea
              type="text"
              className="block w-full text-sm text-slate-500
                focus:outline-none cursor-pointer focus:ring-0
                bg-transparent border-0 h-20 resize-none"
              placeholder='Description'
              name='description'
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            />
          </div>

          <button className='flex justify-center items-center
            shadow-lg shadow-black text-white
            bg-[#e32970] hover:bg-[#bd255f] rounded-full p-2 mt-5'
          >
            Mint Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNFT;