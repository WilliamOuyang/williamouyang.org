import { Separator } from "@/components/ui/separator"
import Footer from "@/pagecomponents/shared/Footer"
import Navbar from "@/pagecomponents/shared/Navbar"
import CASH from "@/assets/Square_Cash_app_logo.svg"
import Strike from "@/assets/strike.svg"
import ETH from "@/assets/Ethereum.svg"
import BTC from "@/assets/bitcoin-btc-logo.svg"
import Z from "@/assets/ZBL.svg"
import Lightning from "@/assets/lightning.svg"
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
    <ul style={{gap:'20px'}}>
      <li className="cursor-default" style={{display:'flex', alignItems:'center'}}><img src={CASH} style={{display:'flex', height:'30px', marginRight:'10px'}}/>Cash App ($WILLKOUYANG)</li>
      <li className="cursor-default" style={{display:'flex', alignItems:'center'}}><img src={Z} style={{display:'flex', height:'30px', width:'30px', marginRight:'10px', background:'#6c1cd3', borderRadius:'25%', padding:'4px'}}/>Zelle (+1 925-367-1375)</li>
      {/* <li>Wire or ACH Transfer</li> */}
      <li style={{display:'flex', alignItems:'center'}}><img src={Lightning} style={{display:'flex', height:'30px', width:'30px', marginRight:'10px', background:'black', borderRadius:'25%', padding:'3px'}}/>Bitcoin Lightning Network (williamouyang@strike.me)</li>
      <a href="strike.me/williamouyang"><li style={{display:'flex', alignItems:'center'}}><img src={Strike} style={{display:'flex', height:'30px', width:'30px', marginRight:'10px', background:'black', borderRadius:'25%'}}/> Strike Tip (strike.me/williamouyang)</li></a>
      <a href="bitcoin:bc1q2f0u95v2qlyud5968fvkemp9wd5elqcn4mlyqs"><li style={{display:'flex', alignItems:'center'}}><img src={BTC} style={{display:'flex', height:'30px', width:'30px', marginRight:'10px', background:'black', borderRadius:'25%', padding:'4px'}}/>Bitcoin Mainnet (bc1q2f0u95v2qlyud5968fvkemp9wd5elqcn4mlyqs)</li></a>
      <li style={{display:'flex', alignItems:'center'}}><img src={ETH} style={{display:'flex', height:'30px', width:'30px', marginRight:'10px', background:'black', borderRadius:'25%', padding:'2px'}}/>Ethereum Network   (E-mail for information)</li>
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