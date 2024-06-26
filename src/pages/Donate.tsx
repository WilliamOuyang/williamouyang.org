import { Separator } from "@/components/ui/separator"
import Footer from "@/pagecomponents/shared/Footer"
import Navbar from "@/pagecomponents/shared/Navbar"
import CASH from "@/assets/Square_Cash_app_logo.svg"
import Strike from "@/assets/strike.svg"
import ETH from "@/assets/Ethereum.svg"
import BTC from "@/assets/bitcoin-btc-logo.svg"
import Z from "@/assets/ZBL.svg"
// import Lightning from "@/assets/lightning.svg"
import WIRE from "@/assets/bank-transfer.svg"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
    <ul style={{display:'flex', flexDirection: 'column', gap: '20px'}}>
      <li className="cursor-pointer hover:underline" style={{display:'flex', alignItems:'center'}}><img src={CASH} style={{display:'flex', height:'30px', marginRight:'10px'}}/>Cash App ($WILLKOUYANG)</li>
      <li className="cursor-pointer hover:underline" style={{display:'flex', alignItems:'center'}}><img src={Z} style={{display:'flex', height:'30px', width:'30px', marginRight:'10px', background:'#6c1cd3', borderRadius:'25%', padding:'4px'}}/>Zelle (+1 925-367-1375) </li>
      {/* <li style={{display:'flex', alignItems:'center'}} className="hover:underline cursor-pointer"><img src={Lightning} style={{display:'flex', height:'30px', width:'30px', marginRight:'10px', background:'black', borderRadius:'25%', padding:'3px'}}/>Bitcoin Lightning Network (williamouyang@strike.me)</li> */}
      <a href="https://strike.me/williamouyang"><li style={{display:'flex', alignItems:'center'}} className="hover:underline"><img src={Strike} style={{display:'flex', height:'30px', width:'30px', marginRight:'10px', background:'black', borderRadius:'25%'}}/> <h1 className="hover:text-underline">Strike Tip (strike.me/williamouyang)</h1></li></a>
      <a href="bitcoin:bc1q7j00jhl0lsnedzz49ph5uraehqhskftke3h69d?message=Never%20Expire%20Bitcoin%20Transfer"><li style={{display:'flex', alignItems:'center'}} className="hover:underline"><img src={BTC} style={{display:'flex', height:'30px', width:'30px', marginRight:'10px', background:'black', borderRadius:'25%', padding:'4px'}}/>Bitcoin Mainnet (bc1q7j00jhl0lsnedzz49ph5uraehqhskftke3h69d)</li></a>
      <a href="https://etherscan.io/address/0x52d774971eC9746A724C11a087fAD161Ab30778A"><li style={{display:'flex', alignItems:'center'}} className="hover:underline cursor-pointer"><img src={ETH} style={{display:'flex', height:'30px', width:'30px', marginRight:'10px', background:'black', borderRadius:'25%', padding:'2px'}}/>Ethereum Network   (0x52d774971eC9746A724C11a087fAD161Ab30778A)</li></a>
    </ul>
    <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger><div style={{display:'flex', alignItems:'center'}}><img src={WIRE} style={{height:'30px', width:'30px', marginRight:'10px'}}/>Wire or ACH Transfer</div></AccordionTrigger>
    <AccordionContent>
    <u><strong><h1>Wire / External Transfer Information</h1></strong></u>
    <h1>
    <ul>
    <li>Country: United States</li>
    <li>Currency: USD — US Dollar</li>
    <li>Account Type: Personal Account</li>
    <li>Bank: Bank of America</li>
    <li>Address: 6335 Paseo Santa Cruz, Pleasanton, CA, 94566</li>
    <li>Account Number: 9902</li>
    <li>Recipient's first name: William</li>
  	<li>Recipient's last name: Ouyang</li>
    <li>Account Number: 9902</li>
    <br/>
    <li><u>Routing numbers:</u></li>
    <li>&nbsp;&nbsp;&nbsp;&nbsp;Electronic (for Direct Deposit and Automatic Payments):	121000358</li>
    <li>&nbsp;&nbsp;&nbsp;&nbsp;Wire (for Wire Transfer):	026009593</li>
    </ul>
      </h1>
    </AccordionContent>
  </AccordionItem>
</Accordion>
  </h1>
</div>
<br/>
<div style={{display:'flex', justifyContent:'center', alignContent:'center'}}><h1 style={{marginBottom:'150px'}}>If you wish to use another financial platform that is not listed, please reach out to me via e-mail at:&nbsp;
</h1>
<u className="text-blue-700">
                  <h1>
                    <a href="mailto:williamouyang@gmx.com">
                      williamouyang@gmx.com
                    </a>
                  </h1>
                </u>


</div>

    <Footer/>
    </>
  )
}

export default Donate