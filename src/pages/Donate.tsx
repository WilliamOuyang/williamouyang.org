import Footer from "@/pagecomponents/shared/Footer"
import Navbar from "@/pagecomponents/shared/Navbar"

const Donate = () => {
  return (
    <>
    <Navbar/>
    {/* <div>Donate</div> */}
    <iframe src="https://strike.me/williamouyang/" style={{width:'100%', height:'100vh'}}></iframe>
    <Footer/>
    </>
  )
}

export default Donate