import Artwork from "./components/Artwork"
import CreateNFT from "./components/CreateNFT"
import ShowNFT from "./components/ShowNFT"
import UpdateNFT from "./components/UpdateNFT"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Alert from "./components/Alert"
import Transaction from "./components/Transaction"
import Loading from "./components/Loading"
import { useEffect } from "react"
import { isWalletConnected } from "./Blockchain.services"

const App = () => {
  useEffect(async () => {
      await isWalletConnected()
  }, [])

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <Artwork/>

      <ShowNFT/>
      <Transaction/>
      <Footer/>
      <CreateNFT/>
      <UpdateNFT/>
      <Loading/>
      <Alert/>
      
    </div>
  )
}

export default App
