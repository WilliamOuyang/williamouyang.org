import { Separator } from "@/components/ui/separator"
import Footer from "@/pagecomponents/shared/Footer"
import Navbar from "@/pagecomponents/shared/Navbar"
import CASH from "@/assets/Square_Cash_app_logo.svg"
import Strike from "@/assets/strike.svg"
import ETH from "@/assets/Ethereum.svg"
import BTC from "@/assets/bitcoin-btc-logo.svg"

const Donate = () => {
  return (
    <>
    <Navbar/>
    
    <div style={{display:'flex', justifyContent:'center', marginTop:'50px', marginBottom:'20px'}}>
     <div> 
      <h1 style={{
    fontFamily:'GT',
    fontSize:'40px',
  }}>Payment Methods</h1>
      <Separator/>
    </div>
</div>
<div style={{display:'flex', justifyContent:'center'}}>
  <h1 style={{
    fontFamily:'GT',
    fontSize:'30px',
  }}>
    <ul>
      <li style={{display:'flex', alignItems:'center'}}><img src={CASH} style={{display:'flex', height:'30px', marginRight:'10px'}}/>Cash App ($WILLKOUYANG)</li>
      <li style={{display:'flex', alignItems:'center'}}><img src={CASH} style={{display:'flex', height:'30px', marginRight:'10px'}}/>Zelle (+1 925-367-1375)</li>
      <li>ACH Transfer</li>
      <li>Bitcoin Lightning Network (williamouyang@strike.me)</li>
      <li style={{display:'flex', alignItems:'center'}}><img src={Strike} style={{display:'flex', height:'30px', width:'30px', marginRight:'10px', background:'black', borderRadius:'25%'}}/> Strike Tip (strike.me/williamouyang)</li>
      <li style={{display:'flex', alignItems:'center'}}><img src={BTC} style={{display:'flex', height:'30px', width:'30px', marginRight:'10px', background:'black', borderRadius:'25%', padding:'4px'}}/>Bitcoin Mainnet (E-mail for information)</li>
      <li style={{display:'flex', alignItems:'center'}}><img src={ETH} style={{display:'flex', height:'30px', width:'30px', marginRight:'10px', background:'black', borderRadius:'25%', padding:'2px'}}/>Ethereum Network(E-mail for information)</li>
    </ul>
  </h1>
</div>
<br/>
<div style={{display:'flex', justifyContent:'center'}}><h1 style={{marginBottom:'150px'}}>If you wish to use another financial platform, please reach out to me via email at williamouyang@gmx.com.</h1>
</div>

    <Footer/>
    </>
  )
}

export default Donate