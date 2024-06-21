import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Trezor from "@/assets/trezor.svg";
import VisualStudio from "@/assets/vscode.svg";
import Node from "@/assets/nodejs.svg";
import Git from "@/assets/git-bash.svg";
import BOA from "@/assets/BofA-logo.svg";
import Strike from "@/assets/strike.svg";
import OO from "@/assets/OpenOffice.svg";
import W from "@/assets/OOoWriter.svg";
import GPT from "@/assets/ChatGPT-Logo.svg";
import FID from "@/assets/Fidelity_logo_web_white_20200110T15261004.svg";
import FUND from "@/assets/logo-hz-color.svg";
import Github from "@/assets/Github_logo_svg.svg";
import ETRADE from "@/assets/etrade.svg";
import CASHAPP from "@/assets/cashapp.svg";
import TRW from "@/assets/TRW.svg";
import TV from "@/assets/TradingView.svg";
import GMX from "@/assets/GMX.svg";
import Passwords from "@/assets/passwords.svg";
import Extend from "@/assets/extension.svg";
import Vercel from "@/assets/Vercel_logo_black.svg";
import Go from "@/assets/GoDaddy.svg";
import Mega from "@/assets/01_mega_logo.svg";
import Schwab from "@/assets/Charles_Schwab_Corporation_logo.svg"
import SUPABASE from "@/assets/supabase-light.svg";
import firefox from "@/assets/Firefox3.svg"
import Rumble from "@/assets/Rumble_logo.svg";
import Grammarly from "@/assets/Grammarly_logo.svg";
import Invid from "@/assets/Invidious-logo.svg";
import Positas from "@/assets/positas.jpg"
import PassGen from "@/assets/PassGen.png"
// import MAIL from "@/assets/mail.svg"
import Canvas from "@/assets/Canvas.ico"
import Navbar from "@/pagecomponents/shared/Navbar";  
import { Braces } from "lucide-react";

const Storage = () => {
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
  const [isLocked22, setIsLocked22] = useState(true);
  const [isLocked23, setIsLocked23] = useState(true);
  const [isLocked24, setIsLocked24] = useState(true);
  const [isLocked25, setIsLocked25] = useState(true);
  const [isLocked26, setIsLocked26] = useState(true);
  const [isLocked27, setIsLocked27] = useState(true);
  const [isLocked28, setIsLocked28] = useState(true);
  const [isLocked29, setIsLocked29] = useState(true);
  const [isLocked30, setIsLocked30] = useState(true);
  const [isLocked31, setIsLocked31] = useState(true);

  useEffect(() => {
    document.title = "Storage | williamouyang.org";
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px", marginTop: "100px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2 className="text-3xl font-semibold tracking-tight">E-mail</h2>
             
           

  </div>  
       
    

      


        <Button
          variant="ouyang"
          className="w-[55px] mr-2 bg-neutral-900 hover:bg-neutral-900 mt-3"
          style={{ backgroundColor: "#143170", outline: "2px solid gray" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked21 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked21(false)}
            onMouseLeave={() => setIsLocked21(true)}
          >
            <Button
              variant="ouyang"
              className="w-[55px] bg-#1C449B"
              style={{ backgroundColor: "#1c449b" }}
              onClick={() => window.open("https://www.gmx.com/")}
            >
              <img
                className="select-none"
                draggable="false"
                src={GMX}
                alt="GMX"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>
    
        <h2 className="text-3xl font-semibold tracking-tight">
          Browser Download & Extensions
        </h2>

        <Button
          variant="ouyang"
          className="w-[180px] mr-2 mt-3"
          style={{ background: "lightgray", outline: "2px solid gray" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked13 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked13(false)}
            onMouseLeave={() => setIsLocked13(true)}
          >
            <Button
              variant="ouyang"
              className="w-[180px]"
              style={{ background: "white" }}
              onClick={() =>
                window.open("https://www.mozilla.org/en-US/firefox/new/")
              }
            >
              <img
                className="select-none"
                draggable="false"
                src={firefox}
                alt="Firefox"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>

        <Button variant="ouyang"className="w-[55px] bg-neutral-900 hover:bg-neutral-900 mr-2 mt-3" style={{ outline: '2px solid gray'}}>
            <div style={{transition: 'transform 0.15s ease',  transform: isLocked23 ? 'translateY(-8px)' : 'translateY(0)'}} onMouseEnter={() => setIsLocked23(false)} onMouseLeave={() => setIsLocked23(true)}>
            <Button variant="ouyang"className="w-[55px]" onClick={() => window.open('https://c.gmx.com/@1383933226673766769/rnNyrTaoS-mZn6J0PoM_4g')}>
            <img className="select-none"
                draggable="false"
                    src={Extend} 
                    alt="Extensions" 
                    style={{width:'100%', height:'100%'}}/>
              </Button>
            </div>   
          </Button>

        <h2 className="text-3xl font-semibold tracking-tight">Applications</h2>
        <Button
          variant="ouyang"
          className="w-[55px] mr-2 bg-neutral-900 hover:bg-neutral-900 mt-3"
          style={{ outline: "2px solid gray" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked12 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked12(false)}
            onMouseLeave={() => setIsLocked12(true)}
          >
            <Button
              variant="ouyang"
              className="w-[55px]"
              onClick={() => window.open("https://chatgpt.com/")}
            >
              <img
                className="select-none"
                draggable="false"
                src={GPT}
                alt="ChatGPT"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>

        <Button
          variant="ouyang"
          className="w-[55px] mr-2 bg-neutral-900 hover:bg-neutral-900 mt-3"
          style={{ outline: "2px solid gray" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked27 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked27(false)}
            onMouseLeave={() => setIsLocked27(true)}
          >
            <Button
              variant="ouyang"
              className="w-[55px]"
              onClick={() => window.open("https://inv.tux.pizza/")}
            >
              <img
                className="select-none"
                draggable="false"
                src={Invid}
                alt="ChatGPT"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>

        <Button
          variant="ouyang"
          className="w-[100px] mr-2 mt-3"
          style={{ background: "lightgray", outline: "2px solid gray" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked10 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked10(false)}
            onMouseLeave={() => setIsLocked10(true)}
          >
            <Button
              variant="ouyang"
              className="w-[100px]"
              style={{ background: "white" }}
              onClick={() => window.open("https://rumble.com/")}
            >
              <img
                className="select-none"
                draggable="false"
                src={Rumble}
                alt="Rumble"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>
        <Button
          variant="ouyang"
          className="w-[100px] mr-2 mt-3"
          style={{ background: "lightgray", outline: "2px solid gray" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked9 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked9(false)}
            onMouseLeave={() => setIsLocked9(true)}
          >
            <Button
              variant="ouyang"
              className="w-[100px]"
              style={{ background: "white" }}
              onClick={() => window.open("https://app.grammarly.com/")}
            >
              <img
                className="select-none"
                draggable="false"
                src={Grammarly}
                alt="Grammarly"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>

        <Button
          variant="ouyang"
          className="w-[55px] mr-2 mt-3"
          style={{ background: "lightgray", outline: "2px solid gray" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked28 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked28(false)}
            onMouseLeave={() => setIsLocked28(true)}
          >
            <Button
              variant="ouyang"
              className="w-[55px]"
              style={{ background: "white" }}
              onClick={() => window.open("https://clpccd.instructure.com/login/canvas")}
            >
              <img
                className="select-none"
                draggable="false"
                src={Canvas}
                alt="Canvas"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>

        <Button
          variant="ouyang"
          className="w-[55px] mr-2 mt-3"
          style={{ background: "lightgray", outline: "2px solid gray" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked31 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked31(false)}
            onMouseLeave={() => setIsLocked31(true)}
          >
            <Button
              variant="ouyang"
              className="w-[55px]"
              style={{ background: "white" }}
              onClick={() => window.open("https://banssprod.clpccd.cc.ca.us/ssbprod/twbkwbis.P_WWWLogin")}
            >
              <img
                className="select-none"
                draggable="false"
                src={Positas}
                alt="Class-Web"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>


        <Button
          variant="ouyang"
          className="w-[55px] mr-2 mt-3"
          style={{ background: "lightgray", outline: "2px solid gray" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked30 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked30(false)}
            onMouseLeave={() => setIsLocked30(true)}
          >
            <Button
              variant="ouyang"
              className="w-[55px]"
              style={{ background: "white" }}
              onClick={() => window.open("https://passwordsgenerator.net/")}
            >
              <img
                className="select-none"
                draggable="false"
                src={PassGen}
                alt="Class-Web"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>


  
        <h2 className="text-3xl font-semibold tracking-tight">
          OpenOffice 2.4.0
        </h2>
        <Button
          variant="ouyang"
          className="w-[55px] mr-2 mt-3"
          style={{ background: "darkgray", outline: "2px solid blue" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked8 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked8(false)}
            onMouseLeave={() => setIsLocked8(true)}
          >
            <Button
              variant="ouyang"
              className="w-[55px]"
              style={{ background: "lightgray" }}
              onClick={() =>
                window.open(
                  " https://wizsec.com/bitcoin_recreation_20240224.odt"
                )
              }
            >
              <img
                className="select-none"
                draggable="false"
                src={W}
                alt="OpenOffice.org Writer"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>
        <Button
          variant="ouyang"
          className="w-[100px] mr-2 mt-3"
          style={{ background: "lightgray", outline: "2px solid blue" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked7 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked7(false)}
            onMouseLeave={() => setIsLocked7(true)}
          >
            <Button
              variant="ouyang"
              className="w-[100px]"
              style={{ background: "white" }}
              onClick={() =>
                window.open(
                  "      https://archive.apache.org/dist/incubator/ooo/stable/2.4.0/OOo_2.4.0_Win32Intel_install_en-US.exe"
                )
              }
            >
              <img
                className="select-none"
                draggable="false"
                src={OO}
                alt="OpenOffice.org"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2 className="text-3xl font-semibold tracking-tight">
            Coding Development
          </h2>
          <Braces className="ml-2" />
        </div>

        <Button
          variant="ouyang"
          className="w-[100px] bg-neutral-900 hover:bg-neutral-900 mr-2 mt-3"
          style={{ outline: "2px solid gray" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked11 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked11(false)}
            onMouseLeave={() => setIsLocked11(true)}
          >
            <Button
              variant="ouyang"
              className="w-[100px]"
              onClick={() =>
                window.open("https://supabase.com/dashboard/projects")
              }
            >
              <img
                className="select-none"
                draggable="false"
                src={SUPABASE}
                alt="Supabase"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>
        


        <Button
          variant="ouyang"
          className="w-[100px] bg-neutral-900 hover:bg-neutral-900 mr-2 mt-3"
          style={{ outline: "2px solid gray" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked24 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked24(false)}
            onMouseLeave={() => setIsLocked24(true)}
          >
            <Button
              variant="ouyang"
              className="w-[100px]"
              onClick={() =>
                window.open("https://vercel.com/williamouyangs-projects")
              }
            >
              <img
                className="select-none"
                draggable="false"
                src={Vercel}
                alt="Vercel"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>

        <Button
          variant="ouyang"
          className="w-[55px] bg-neutral-900 hover:bg-neutral-900 mr-2 mt-3"
          style={{ outline: "2px solid gray" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked16 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked16(false)}
            onMouseLeave={() => setIsLocked16(true)}
          >
            <Button
              variant="ouyang"
              className="w-[55px]"
              onClick={() => window.open("https://github.com/WilliamOuyang")}
            >
              <img
                className="select-none"
                draggable="false"
                src={Github}
                alt="Github"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>
       
        <Button
          variant="ouyang"
          className="w-[100px] bg-neutral-900 hover:bg-neutral-900 mr-2 mt-3"
          style={{ outline: "2px solid gray" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked25 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked25(false)}
            onMouseLeave={() => setIsLocked25(true)}
          >
            <Button
              variant="ouyang"
              className="w-[100px]"
              onClick={() => window.open("https://www.godaddy.com/")}
            >
              <img
                className="select-none"
                draggable="false"
                src={Go}
                alt="GoDaddy"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>

        
        <Button
          variant="ouyang"
          className="w-[55px] bg-neutral-900 hover:bg-neutral-900 mr-2 mt-3"
          style={{ outline: "2px solid gray" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked2 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked2(false)}
            onMouseLeave={() => setIsLocked2(true)}
          >
            <Button
              variant="ouyang"
              className="w-[55px]"
              onClick={() =>
                window.open(
                  "https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user"
                )
              }
            >
              <img
                className="select-none"
                draggable="false"
                src={VisualStudio}
                alt="Visual Stuido Code"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>
        <Button
          variant="ouyang"
          className="w-[100px] bg-neutral-900 hover:bg-neutral-900 mr-2 mt-3"
          style={{ outline: "2px solid gray" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked3 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked3(false)}
            onMouseLeave={() => setIsLocked3(true)}
          >
            <Button
              variant="ouyang"
              className="w-[100px]"
              onClick={() =>
                window.open(
                  "https://nodejs.org/dist/v20.13.1/node-v20.13.1-x64.msi"
                )
              }
            >
              <img
                className="select-none"
                draggable="false"
                src={Node}
                alt="Node.js"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>
        <Button
          variant="ouyang"
          className="w-[55px] bg-neutral-900 hover:bg-neutral-900 mr-2 mt-3"
          style={{ outline: "2px solid gray" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked4 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked4(false)}
            onMouseLeave={() => setIsLocked4(true)}
          >
            <Button
              variant="ouyang"
              className="w-[55px]"
              onClick={() =>
                window.open(
                  "https://github.com/git-for-windows/git/releases/download/v2.45.1.windows.1/Git-2.45.1-64-bit.exe"
                )
              }
            >
              <img
                className="select-none"
                draggable="false"
                src={Git}
                alt="Git"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>

        <h2 className="text-3xl font-semibold tracking-tight">
          Financial Platforms
        </h2>
        <Button
          variant="ouyang"
          className="w-[100px] mr-2 mt-3"
          style={{ background: "#094231", outline: "2px solid gray" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked(false)}
            onMouseLeave={() => setIsLocked(true)}
          >
            <Button
              variant="ouyang"
              className="w-[100px]"
              style={{ background: "rgb(15, 97, 72)" }}
              onClick={() =>
                window.open(
                  "https://github.com/trezor/trezor-suite/releases/download/v24.5.2/Trezor-Suite-24.5.2-win-x64.exe"
                )
              }
            >
              <img
                className="select-none"
                draggable="false"
                src={Trezor}
                alt="Trezor Suite"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>
        <Button
          variant="ouyang"
          className="w-[200px] mr-2 mt-3"
          style={{ background: "gray", outline: "2px solid black" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked5 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked5(false)}
            onMouseLeave={() => setIsLocked5(true)}
          >
            <Button
              variant="ouyang"
              className="w-[200px]"
              style={{ background: "lightgray" }}
              onClick={() =>
                window.open(
                  "https://secure.bankofamerica.com/login/sign-in/signOnSuccessRedirect.go"
                )
              }
            >
              <img
                className="select-none"
                draggable="false"
                src={BOA}
                alt="Bank of America"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>
        <Button
          variant="ouyang"
          className="w-[55px] mr-2 mt-3"
          style={{ background: "black", outline: "2px solid gray" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked6 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked6(false)}
            onMouseLeave={() => setIsLocked6(true)}
          >
            <Button
              variant="ouyang"
              className="w-[55px]"
              style={{ background: "black", border: "2px solid pink" }}
              onClick={() => window.open("https://strike.me/")}
            >
              <img
                className="select-none"
                draggable="false"
                src={Strike}
                alt="Strike"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>
        <Button
          variant="ouyang"
          className="w-[100px] mr-2 mt-3"
          style={{ background: "darkgreen", outline: "2px solid gray" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked14 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked14(false)}
            onMouseLeave={() => setIsLocked14(true)}
          >
            <Button
              variant="ouyang"
              className="w-[100px]"
              style={{ background: "green" }}
              onClick={() =>
                window.open(
                  " https://digital.fidelity.com/prgw/digital/login/full-page?AuthRedUrl=digital.fidelity.com/ftgw/digital/portfolio/summary"
                )
              }
            >
              <img
                className="select-none"
                draggable="false"
                src={FID}
                alt="Fidelity"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>
        <Button
          variant="ouyang"
          className="w-[100px] mr-2 mt-3"
          style={{ background: "lightgray", outline: "2px solid gray" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked15 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked15(false)}
            onMouseLeave={() => setIsLocked15(true)}
          >
            <Button
              variant="ouyang"
              className="w-[100px]"
              style={{ background: "white" }}
              onClick={() =>
                window.open("https://fundrise.com/account/overview")
              }
            >
              <img
                className="select-none"
                draggable="false"
                src={FUND}
                alt="Fundrise"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>
        <Button
          variant="ouyang"
          className="w-[100px] mr-2 mt-3"
          style={{ background: "#12082b", outline: "2px solid gray" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked17 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked17(false)}
            onMouseLeave={() => setIsLocked17(true)}
          >
            <Button
              variant="ouyang"
              className="w-[100px]"
              style={{ background: "#241056" }}
              onClick={() =>
                window.open(
                  " https://us.etrade.com/etx/hw/v2/accountshome?cnt=header_logon_startin_accounts"
                )
              }
            >
              <img
                className="select-none"
                draggable="false"
                src={ETRADE}
                alt="ETRADE"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>
        <Button
          variant="ouyang"
          className="w-[100px] mr-2 mt-3"
          style={{ outline: "2px solid gray", background: "#00a326" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked18 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked18(false)}
            onMouseLeave={() => setIsLocked18(true)}
          >
            <Button
              variant="ouyang"
              className="w-[100px]"
              style={{ background: "#00d632" }}
              onClick={() => window.open("https://cash.app/account/activity")}
            >
              <img
                className="select-none"
                draggable="false"
                src={CASHAPP}
                alt="Cash App"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>
        <Button
          variant="ouyang"
          className="w-[55px] mr-2 mt-3 bg-neutral-900 hover:bg-neutral-900"
          style={{ outline: "2px solid gray" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked19 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked19(false)}
            onMouseLeave={() => setIsLocked19(true)}
          >
            <Button
              variant="ouyang"
              className="w-[55px]"
              onClick={() =>
                window.open(
                  "https://app.jointherealworld.com/chat/01GGDHJAQMA1D0VMK8WV22BJJN/01HYFVF7S7W3TP9HFFCWF1FB0J"
                )
              }
            >
              <img
                className="select-none"
                draggable="false"
                src={TRW}
                alt="TRW"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>
        <Button
          variant="ouyang"
          className="w-[55px] mr-2 mt-3 bg-neutral-900 hover:bg-neutral-900"
          style={{ outline: "2px solid gray" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked20 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked20(false)}
            onMouseLeave={() => setIsLocked20(true)}
          >
            <Button
              variant="ouyang"
              className="w-[55px]"
              onClick={() => window.open("https://www.tradingview.com/")}
            >
              <img
                className="select-none"
                draggable="false"
                src={TV}
                alt="TradingView"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>
        <Button variant="ouyang"className="w-[55px] mr-2 mt-3 bg-neutral-900 hover:bg-neutral-900" style={{ outline: '2px solid gray'}}>
            <div style={{transition: 'transform 0.15s ease',  transform: isLocked29 ? 'translateY(-8px)' : 'translateY(0)'}} onMouseEnter={() => setIsLocked29(false)} onMouseLeave={() => setIsLocked29(true)}>
           <Button variant="ouyang"className="w-[55px]" onClick={() => window.open('https://www.schwab.com/')}>
            <img className="select-none"
                draggable="false"
                    src={Schwab} 
                    alt="Charles Schwab" 
                    style={{width:'100%', height:'100%'}}/>
              </Button>
            </div>   
          </Button>

        <h2 className="text-3xl font-semibold tracking-tight">
          {" "}
          Cloud Storage
        </h2>
        
        <Button
          variant="ouyang"
          className="w-[100px] bg-neutral-900 hover:bg-neutral-900 mr-2 mt-3"
          style={{ outline: "2px solid gray" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked26 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked26(false)}
            onMouseLeave={() => setIsLocked26(true)}
          >
            <Button
              variant="ouyang"
              className="w-[100px]"
              onClick={() => window.open("https://mega.nz/")}
            >
              <img
                className="select-none"
                draggable="false"
                src={Mega}
                alt="Mega"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>
        <h2 className="text-3xl font-semibold tracking-tight">Passwords</h2>
        <Button
          variant="ouyang"
          className="w-[55px] bg-neutral-900 hover:bg-neutral-900 mr-2 mt-3"
          style={{ outline: "2px solid gray" }}
        >
          <div
            style={{
              transition: "transform 0.15s ease",
              transform: isLocked22 ? "translateY(-8px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsLocked22(false)}
            onMouseLeave={() => setIsLocked22(true)}
          >
            <Button
              variant="ouyang"
              className="w-[55px]"
              onClick={() =>
                window.open(
                  "https://c.gmx.com/@1383933226673766769/aBhSBM0OQ_mf0DjvbJL6xw"
                )
              }
            >
              <img
                className="select-none"
                draggable="false"
                src={Passwords}
                alt="Passwords"
                style={{ width: "100%", height: "100%" }}
              />
            </Button>
          </div>
        </Button>
      </div>
    </>
  );
};
export default Storage;
