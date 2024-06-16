import { Button } from "@/components/ui/button"

import { useEffect, useState } from "react";
import Trezor from "@/assets/trezor.svg";
import VisualStudio from "@/assets/vscode.svg"
import Node from "@/assets/nodejs.svg"
import Git from "@/assets/git-bash.svg"
import BOA from "@/assets/BofA-logo.svg"
import Strike from "@/assets/strike.svg"
import OO from "@/assets/OpenOffice.svg"
import W from "@/assets/OOoWriter.svg"
import G from "@/assets/Gmail_icon_(2020).svg"
import Sheets from "@/assets/Google_Sheets_2020_Logo.svg"
import Drive from "@/assets/Google_Drive_icon_(2020).svg"
import GPT from "@/assets/ChatGPT-Logo.svg"
import YT from "@/assets/youtube.svg"
import FID from "@/assets/Fidelity_logo_web_white_20200110T15261004.svg"
import FUND from "@/assets/logo-hz-color.svg"
import Github from "@/assets/Github_logo_svg.svg"
import ETRADE from "@/assets/etrade.svg"
import CASHAPP from "@/assets/cashapp.svg"
import TRW from "@/assets/TRW.svg"
import TV from "@/assets/TradingView.svg"
import GMX from "@/assets/GMX.svg"
import Navbar2 from "@/pagecomponents/shared/Navbar2"

const Storage =()=> {
    const [isLocked, setIsLocked] = useState(true);
    const [isLocked2, setIsLocked2] = useState(true);
    const [isLocked3, setIsLocked3] = useState(true);
    const [isLocked4, setIsLocked4] = useState(true);
    const [isLocked5, setIsLocked5] = useState(true);
    const [isLocked6, setIsLocked6] = useState(true);
    const [isLocked7, setIsLocked7] = useState(true);
    const [isLocked8, setIsLocked8] = useState(true);
    const [isLocked9, setIsLocked9] = useState(true);
    const [isLocked10, setIsLocked10] = useState(true);
    const [isLocked11, setIsLocked11] = useState(true);
    const [isLocked12, setIsLocked12] = useState(true);
    const [isLocked13, setIsLocked13] = useState(true);
    const [isLocked14, setIsLocked14] = useState(true);
    const [isLocked15, setIsLocked15] = useState(true);
    const [isLocked16, setIsLocked16] = useState(true);
    const [isLocked17, setIsLocked17] = useState(true);
    const [isLocked18, setIsLocked18] = useState(true);
    const [isLocked19, setIsLocked19] = useState(true);
    const [isLocked20, setIsLocked20] = useState(true);
    const [isLocked21, setIsLocked21] = useState(true);

    useEffect(() => {
      document.title = "Storage | williamouyang.org"
    }, []);

    return(
    <>
<Navbar2/>
<div style={{padding:'20px', marginTop:'100px'}}>
<h2 className="text-3xl font-semibold tracking-tight">Email</h2>   


<Button variant="ouyang"className="w-[55px] mr-2 bg-neutral-900 hover:bg-neutral-900 mt-3" style={{backgroundColor:'#143170', outline: '2px solid gray'}}>
            <div style={{transition: 'transform 0.15s ease',  transform: isLocked21 ? 'translateY(-8px)' : 'translateY(0)'}} onMouseEnter={() => setIsLocked21(false)} onMouseLeave={() => setIsLocked21(true)}>
            <Button variant="ouyang"className="w-[55px] bg-#1C449B"style={{backgroundColor: '#1c449b'}} onClick={() => window.open('https://www.gmx.com/')}>
                <img className="select-none"
                draggable="false"
                    src={GMX} 
                    alt="GMX" 
                    style={{width:'100%', height:'100%'}}/>
              </Button>
            </div>   
          </Button>


<Button variant="ouyang"className="w-[55px] mr-2 bg-neutral-900 hover:bg-neutral-900 mt-3" style={{ outline: '2px solid gray'}}>
            <div style={{transition: 'transform 0.15s ease',  transform: isLocked9 ? 'translateY(-8px)' : 'translateY(0)'}} onMouseEnter={() => setIsLocked9(false)} onMouseLeave={() => setIsLocked9(true)}>
            <Button variant="ouyang"className="w-[55px]" onClick={() => window.open('https://mail.google.com/mail/u/0/#inbox')}>
                <img className="select-none"
                draggable="false"
                    src={G} 
                    alt="Gmail" 
                    style={{width:'100%', height:'100%'}}/>
              </Button>
            </div>   
          </Button>

          <h2 className="text-3xl font-semibold tracking-tight">Applications</h2>   


        <Button variant="ouyang"className="w-[55px] mr-2 bg-neutral-900 hover:bg-neutral-900 mt-3" style={{ outline: '2px solid gray'}}>
            <div style={{transition: 'transform 0.15s ease',  transform: isLocked12 ? 'translateY(-8px)' : 'translateY(0)'}} onMouseEnter={() => setIsLocked12(false)} onMouseLeave={() => setIsLocked12(true)}>
            <Button variant="ouyang"className="w-[55px]" onClick={() => window.open('https://chatgpt.com/')}>
                <img className="select-none"
                draggable="false"
                    src={GPT} 
                    alt="ChatGPT" 
                    style={{width:'100%', height:'100%'}}/>
              </Button>
            </div>   
          </Button>

          <Button variant="ouyang"className="w-[100px] mr-2 bg-neutral-900 hover:bg-neutral-900 mt-3" style={{ outline: '2px solid gray'}}>
            <div style={{transition: 'transform 0.15s ease',  transform: isLocked13 ? 'translateY(-8px)' : 'translateY(0)'}} onMouseEnter={() => setIsLocked13(false)} onMouseLeave={() => setIsLocked13(true)}>
            <Button variant="ouyang"className="w-[100px]" onClick={() => window.open('https://www.youtube.com/')}>
                <img className="select-none"
                draggable="false"
                    src={YT} 
                    alt="ChatGPT" 
                    style={{width:'100%', height:'100%'}}/>
              </Button>
            </div>   
          </Button>



         


         <h2 className="text-3xl font-semibold tracking-tight">OpenOffice 2.4.0</h2>   

         <Button variant="ouyang"className="w-[55px] mr-2 mt-3" style={{background:'darkgray', outline: '2px solid blue'}}>
            <div style={{transition: 'transform 0.15s ease',  transform: isLocked8 ? 'translateY(-8px)' : 'translateY(0)'}} onMouseEnter={() => setIsLocked8(false)} onMouseLeave={() => setIsLocked8(true)}>
            <Button variant="ouyang"className="w-[55px]" style={{background: 'lightgray'}} onClick={() => window.open(' https://wizsec.com/bitcoin_recreation_20240224.odt')}>
                <img className="select-none"
                draggable="false"
                    src={W} 
                    alt="OpenOffice.org Writer" 
                    style={{width:'100%', height:'100%'}}/>
              </Button>
            </div>   
          </Button>

         

        <Button variant="ouyang"className="w-[100px] mr-2 mt-3" style={{background:'lightgray', outline: '2px solid blue'}}>
            <div style={{transition: 'transform 0.15s ease',  transform: isLocked7 ? 'translateY(-8px)' : 'translateY(0)'}} onMouseEnter={() => setIsLocked7(false)} onMouseLeave={() => setIsLocked7(true)}>
            <Button variant="ouyang"className="w-[100px]" style={{background: 'white'}} onClick={() => window.open('      https://archive.apache.org/dist/incubator/ooo/stable/2.4.0/OOo_2.4.0_Win32Intel_install_en-US.exe')}>
                <img className="select-none"
                draggable="false"
                    src={OO} 
                    alt="OpenOffice.org" 
                    style={{width:'100%', height:'100%'}}/>
              </Button>
            </div>   
          </Button>

    

        <h2 className="text-3xl font-semibold tracking-tight">Coding Development</h2>
     

        <Button variant="ouyang"className="w-[55px] bg-neutral-900 hover:bg-neutral-900 mr-2 mt-3" style={{ outline: '2px solid gray'}}>
            <div style={{transition: 'transform 0.15s ease',  transform: isLocked2 ? 'translateY(-8px)' : 'translateY(0)'}} onMouseEnter={() => setIsLocked2(false)} onMouseLeave={() => setIsLocked2(true)}>
            <Button variant="ouyang"className="w-[55px]" onClick={() => window.open('https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user')}>
            <img className="select-none"
                draggable="false"
                    src={VisualStudio} 
                    alt="Visual Stuido Code" 
                    style={{width:'100%', height:'100%'}}/>
              </Button>
            </div>   
          </Button>

          <Button variant="ouyang"className="w-[100px] bg-neutral-900 hover:bg-neutral-900 mr-2 mt-3" style={{ outline: '2px solid gray'}}>
            <div style={{transition: 'transform 0.15s ease',  transform: isLocked3 ? 'translateY(-8px)' : 'translateY(0)'}} onMouseEnter={() => setIsLocked3(false)} onMouseLeave={() => setIsLocked3(true)}>
            <Button variant="ouyang"className="w-[100px]" onClick={() => window.open('https://nodejs.org/dist/v20.13.1/node-v20.13.1-x64.msi')}>
            <img className="select-none"
                draggable="false"
                    src={Node} 
                    alt="Node.js" 
                    style={{width:'100%', height:'100%'}}/>
              </Button>
            </div>   
          </Button>
          
    
        <Button variant="ouyang"className="w-[55px] bg-neutral-900 hover:bg-neutral-900 mr-2 mt-3" style={{ outline: '2px solid gray'}}>
            <div style={{transition: 'transform 0.15s ease',  transform: isLocked4 ? 'translateY(-8px)' : 'translateY(0)'}} onMouseEnter={() => setIsLocked4(false)} onMouseLeave={() => setIsLocked4(true)}>
            <Button variant="ouyang"className="w-[55px]" onClick={() => window.open('https://github.com/git-for-windows/git/releases/download/v2.45.1.windows.1/Git-2.45.1-64-bit.exe')}>
            <img className="select-none"
                draggable="false"
                    src={Git} 
                    alt="Git" 
                    style={{width:'100%', height:'100%'}}/>
              </Button>
            </div>   
          </Button>



          <Button variant="ouyang"className="w-[55px] bg-neutral-900 hover:bg-neutral-900 mr-2 mt-3" style={{ outline: '2px solid gray'}}>
            <div style={{transition: 'transform 0.15s ease',  transform: isLocked16 ? 'translateY(-8px)' : 'translateY(0)'}} onMouseEnter={() => setIsLocked16(false)} onMouseLeave={() => setIsLocked16(true)}>
            <Button variant="ouyang"className="w-[55px]" onClick={() => window.open('https://github.com/WilliamOuyang')}>
            <img className="select-none"
                draggable="false"
                    src={Github} 
                    alt="Github" 
                    style={{width:'100%', height:'100%'}}/>
              </Button>
            </div>   
          </Button>

          
         
       
          <h2 className="text-3xl font-semibold tracking-tight">Financial Platforms</h2>

        <Button variant="ouyang"className="w-[100px] mr-2 mt-3" style={{background:'#094231', outline: '2px solid gray'}}>
            <div style={{transition: 'transform 0.15s ease',  transform: isLocked ? 'translateY(-8px)' : 'translateY(0)'}} onMouseEnter={() => setIsLocked(false)} onMouseLeave={() => setIsLocked(true)}>
            <Button variant="ouyang"className="w-[100px]" style={{background: 'rgb(15, 97, 72)'}} onClick={() => window.open('https://github.com/trezor/trezor-suite/releases/download/v24.5.2/Trezor-Suite-24.5.2-win-x64.exe')}>
                <img className="select-none"
                draggable="false"
                    src={Trezor} 
                    alt="Trezor Suite" 
                    style={{width:'100%', height:'100%'}}/>
              </Button>
            </div>   
          </Button>

          <Button variant="ouyang"className="w-[200px] mr-2 mt-3" style={{background:'gray', outline: '2px solid black'}}>
            <div style={{transition: 'transform 0.15s ease',  transform: isLocked5 ? 'translateY(-8px)' : 'translateY(0)'}} onMouseEnter={() => setIsLocked5(false)} onMouseLeave={() => setIsLocked5(true)}>
            <Button variant="ouyang"className="w-[200px]" style={{background: 'lightgray'}} onClick={() => window.open('https://secure.bankofamerica.com/login/sign-in/signOnSuccessRedirect.go')}>
                <img className="select-none"
                draggable="false"
                    src={BOA} 
                    alt="Bank of America" 
                    style={{width:'100%', height:'100%'}}/>
              </Button>
            </div>   
          </Button>
          

          <Button variant="ouyang"className="w-[55px] mr-2 mt-3" style={{background:'black', outline: '2px solid gray'}}>
            <div style={{transition: 'transform 0.15s ease',  transform: isLocked6 ? 'translateY(-8px)' : 'translateY(0)'}} onMouseEnter={() => setIsLocked6(false)} onMouseLeave={() => setIsLocked6(true)}>
            <Button variant="ouyang"className="w-[55px]" style={{background: 'black', border:'2px solid pink'  }} onClick={() => window.open('https://strike.me/')}>
                <img className="select-none"
                draggable="false"
                    src={Strike} 
                    alt="Strike" 
                    style={{width:'100%', height:'100%'}}/>
              </Button>
            </div>   
          </Button>



      <Button variant="ouyang"className="w-[100px] mr-2 mt-3" style={{background:'darkgreen', outline: '2px solid gray'}}>
            <div style={{transition: 'transform 0.15s ease',  transform: isLocked14 ? 'translateY(-8px)' : 'translateY(0)'}} onMouseEnter={() => setIsLocked14(false)} onMouseLeave={() => setIsLocked14(true)}>
            <Button variant="ouyang"className="w-[100px]" style={{background: 'green'}} onClick={() => window.open(' https://digital.fidelity.com/prgw/digital/login/full-page?AuthRedUrl=digital.fidelity.com/ftgw/digital/portfolio/summary')}>
                <img className="select-none"
                draggable="false"
                    src={FID} 
                    alt="Fidelity" 
                    style={{width:'100%', height:'100%'}}/>
              </Button>
            </div>   
          </Button>


          <Button variant="ouyang"className="w-[100px] mr-2 mt-3" style={{background:'lightgray', outline: '2px solid gray'}}>
            <div style={{transition: 'transform 0.15s ease',  transform: isLocked15 ? 'translateY(-8px)' : 'translateY(0)'}} onMouseEnter={() => setIsLocked15(false)} onMouseLeave={() => setIsLocked15(true)}>
            <Button variant="ouyang"className="w-[100px]" style={{background: 'white'}} onClick={() => window.open('https://fundrise.com/account/overview')}>
                <img className="select-none"
                draggable="false"
                    src={FUND} 
                    alt="Fundrise" 
                    style={{width:'100%', height:'100%'}}/>
              </Button>
            </div>   
          </Button>

          <Button variant="ouyang"className="w-[100px] mr-2 mt-3" style={{background:'#12082b', outline: '2px solid gray'}}>
            <div style={{transition: 'transform 0.15s ease',  transform: isLocked17 ? 'translateY(-8px)' : 'translateY(0)'}} onMouseEnter={() => setIsLocked17(false)} onMouseLeave={() => setIsLocked17(true)}>
            <Button variant="ouyang"className="w-[100px]" style={{background: '#241056'}} onClick={() => window.open(' https://us.etrade.com/etx/hw/v2/accountshome?cnt=header_logon_startin_accounts')}>
                <img className="select-none"
                draggable="false"
                    src={ETRADE} 
                    alt="ETRADE" 
                    style={{width:'100%', height:'100%'}}/>
              </Button>
            </div>   
          </Button>

        
          <Button variant="ouyang"className="w-[100px] mr-2 mt-3" style={{ outline: '2px solid gray',background:'#00a326'}}>
            <div style={{transition: 'transform 0.15s ease',  transform: isLocked18 ? 'translateY(-8px)' : 'translateY(0)'}} onMouseEnter={() => setIsLocked18(false)} onMouseLeave={() => setIsLocked18(true)}>
            <Button variant="ouyang"className="w-[100px]" style={{background:'#00d632'}} onClick={() => window.open('https://cash.app/account/activity')}>
            <img className="select-none"
                draggable="false"
                    src={CASHAPP} 
                    alt="Cash App" 
                    style={{width:'100%', height:'100%'}}/>
              </Button>
            </div>   
          </Button>
          

          <Button variant="ouyang"className="w-[55px] mr-2 mt-3 bg-neutral-900 hover:bg-neutral-900" style={{ outline: '2px solid gray'}}>
            <div style={{transition: 'transform 0.15s ease',  transform: isLocked19 ? 'translateY(-8px)' : 'translateY(0)'}} onMouseEnter={() => setIsLocked19(false)} onMouseLeave={() => setIsLocked19(true)}>
            <Button variant="ouyang"className="w-[55px]" onClick={() => window.open('https://app.jointherealworld.com/chat/01GGDHJAQMA1D0VMK8WV22BJJN/01HYFVF7S7W3TP9HFFCWF1FB0J')}>
            <img className="select-none"
                draggable="false"
                    src={TRW} 
                    alt="TRW" 
                    style={{width:'100%', height:'100%'}}/>
              </Button>
            </div>   
          </Button>


          <Button variant="ouyang"className="w-[55px] mr-2 mt-3 bg-neutral-900 hover:bg-neutral-900" style={{ outline: '2px solid gray'}}>
            <div style={{transition: 'transform 0.15s ease',  transform: isLocked20 ? 'translateY(-8px)' : 'translateY(0)'}} onMouseEnter={() => setIsLocked20(false)} onMouseLeave={() => setIsLocked20(true)}>
           <Button variant="ouyang"className="w-[55px]" onClick={() => window.open('https://www.tradingview.com/')}>
            <img className="select-none"
                draggable="false"
                    src={TV} 
                    alt="TradingView" 
                    style={{width:'100%', height:'100%'}}/>
              </Button>
            </div>   
          </Button>
          <h2 className="text-3xl font-semibold tracking-tight">Database Management</h2>
     

        <Button variant="ouyang"className="w-[55px] bg-neutral-900 hover:bg-neutral-900 mr-2 mt-3" style={{ outline: '2px solid gray'}}>
            <div style={{transition: 'transform 0.15s ease',  transform: isLocked10 ? 'translateY(-8px)' : 'translateY(0)'}} onMouseEnter={() => setIsLocked10(false)} onMouseLeave={() => setIsLocked10(true)}>
            <Button variant="ouyang"className="w-[55px]" onClick={() => window.open('https://docs.google.com/spreadsheets/u/0/?ec=asw-sheets-hero-goto')}>
            <img className="select-none"
                draggable="false"
                    src={Sheets} 
                    alt="Google Sheets" 
                    style={{width:'100%', height:'100%'}}/>
              </Button>
            </div>   
          </Button>


          <Button variant="ouyang"className="w-[55px] bg-neutral-900 hover:bg-neutral-900 mr-2 mt-3" style={{ outline: '2px solid gray'}}>
            <div style={{transition: 'transform 0.15s ease',  transform: isLocked11 ? 'translateY(-8px)' : 'translateY(0)'}} onMouseEnter={() => setIsLocked11(false)} onMouseLeave={() => setIsLocked11(true)}>
            <Button variant="ouyang"className="w-[55px]" onClick={() => window.open('https://drive.google.com/drive/my-drive')}>
            <img className="select-none"
                draggable="false"
                    src={Drive} 
                    alt="Google Drive" 
                    style={{width:'100%', height:'100%'}}/>
              </Button>
            </div>   
          </Button>
         


      </div>
    </>

)}
export default Storage