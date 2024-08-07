import { ModeToggle } from "@/components/mode-toggle";
import ArrowDown from "@/assets/Icon_arrow_down.svg";
import { useState } from "react";
import { X } from "lucide-react";
import Languages from "@/SVGJSX/Languages";

const Navbar = () => {
  const [Menu1, setMenu1] = useState<boolean>(false);
  const [Menu2, setMenu2] = useState<boolean>(false);
  const [Menu3, setMenu3] = useState<boolean>(false);
  const [Menu4, setMenu4] = useState<boolean>(false);
  const [Menu5, setMenu5] = useState<boolean>(false);

  const [Banner, setBanner] = useState<boolean>(true);
  



  

  return (
    <>
<div style={{display:'visible'}}>
{Banner && (<div className="cursor-pointer" style={{
  display: "flex",
  position: "relative",
  backgroundColor: 
  "#ff0055",
  width: "100%",
  boxSizing: "border-box",
  color: "#FFFFFF",
  height: "55px",
  fontWeight: '600',
  border: 'none',
  fontSize: '16px',
  alignItems:'center',
  justifyContent:'center',
}}    
  onClick={()=>{window.open("https://pay.williamouyang.org")}}
  >
    <h1 style={{fontFamily:'GT', fontSize:"20px"}}>Donate to William Ouyang!</h1>
    <button style={{position:'absolute', right:'25px'}}
     onClick={(e) => { 
      e.stopPropagation(); // Prevent event from bubbling up
      setBanner(false); // Hide the banner
    }}    
    ><X /></button>
  </div>
  )   }


    <div
      className="bg-card border"      
      // drop-shadow-md
      style={{
        position: "relative",
        // top: "10px",
        width: "100%",
        height: "59px",
        alignContent: "center",
      }}
      
>
  
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height:'100%',
          gap: '30px'
        }}
        // onMouseEnter={() => {
        //     setMenu1(false);
        //   }}
      >


<h1 style={{ position: "absolute", left: "60px", fontFamily: 'GT'}}>
<a href="/">
     williamouyang.org
</a>
</h1>

<div style={{position:'absolute', right:"60px"}}>
    <ModeToggle />
  </div>

{/* English Code Below */}
<div style={{position:'absolute', right:"120px"}}><div className="menu-parent" style={{ position: "relative"}}>

<div style={{display:'flex', alignContent:'baseline'}} className="cursor-pointer" onMouseEnter={() => setMenu3(true)} onMouseLeave={() => setMenu3(false)}>
    <Languages/>
    <h1 className="mr-2 ml-1">English</h1>
    <img
 src={ArrowDown}
    style={{
    transform: Menu3 ? "rotate(180deg)" : "rotate(0deg)",
    cursor: "pointer",
    }}/>
</div>

{Menu3 && (
<div
style={{
position: "absolute",
top: "100%",
right: 0,
zIndex: 100,
minWidth: "220px",
maxWidth: "220px",
}}
onMouseEnter={() => setMenu3(true)} 
onMouseLeave={() => setMenu3(false)}
className="bg-card border"
>
<ul>
<a href="/">
<li className="hover:bg-accent" style={{ padding: "6px 10px 3px 15px"}}>
English
</li>
</a>
<a href="/">
<li className="hover:bg-accent" style={{ padding: "6px 10px 3px 15px" }}>
Français
</li>
</a>
<a href="/">
<li className="hover:bg-accent" style={{ padding: "6px 10px 3px 15px" }}>
Español
</li>
</a>
</ul>
</div>
)}

</div>
</div>
{/* English Code Above */}






        
{/* Introduction Code Below */}
<div className="menu-parent" style={{ position: "relative"}}>

<div style={{display:'flex', alignContent:'center'}} className="cursor-pointer" onMouseEnter={() => setMenu2(true)} onMouseLeave={() => setMenu2(false)}>
    <h1 className="mr-2">Introduction</h1>
    <img
 src={ArrowDown}
    style={{
    transform: Menu2 ? "rotate(180deg)" : "rotate(0deg)",
    cursor: "pointer",
    }}/>
</div>

{Menu2 && (
<div
style={{
position: "absolute",
top: "100%",
right: 0,
zIndex: 100,
minWidth: "220px",
maxWidth: "220px",
}}
onMouseEnter={() => setMenu2(true)} 
onMouseLeave={() => setMenu2(false)}
className="bg-card border"
>
<ul>
<a href="/">
<li className="hover:bg-accent" style={{ padding: "6px 10px 3px 15px"}}>
Home
</li>
</a>
<a href="/about">
<li className="hover:bg-accent" style={{ padding: "6px 10px 3px 15px" }}>
About
</li>
</a>
<a href="/achievements">
<li className="hover:bg-accent" style={{ padding: "6px 10px 3px 15px"}}>
Achievements
</li>
</a>
<a href="https://github.com/WilliamOuyang/williamouyang.org" target="_blank">
<li className="hover:bg-accent" style={{ padding: "6px 10px 3px 15px"}}>
Source Code (Github)
</li>
</a>

</ul>
</div>
)}

</div>
{/* Introduction Code Above */}



{/* Resources Code Below */}
        <div className="menu-parent" style={{ position: "relative"}}>

            <div style={{display:'flex', alignContent:'center'}} className="cursor-pointer" onMouseEnter={() => setMenu1(true)} onMouseLeave={() => setMenu1(false)}>
                <h1 className="mr-2">Resources</h1>
                <img
             src={ArrowDown}
                style={{
                transform: Menu1 ? "rotate(180deg)" : "rotate(0deg)",
                cursor: "pointer",
                }}/>
            </div>

  {Menu1 && (
    <div
      style={{
        position: "absolute",
        top: "100%",
        right: 0,
        zIndex: 100,
        minWidth: "220px",
        maxWidth: "220px",
      }}
      onMouseEnter={() => setMenu1(true)} 
      onMouseLeave={() => setMenu1(false)}
      className="bg-card border"
    >
      <ul>
        <a href="/schedule">
            <li className="hover:bg-accent" style={{ padding: "6px 10px 3px 15px"}}>
              Schedule
            </li>
        </a>
        <a href="/vault">
            <li className="hover:bg-accent" style={{ padding: "6px 10px 3px 15px" }}>
            Vault
            </li>
        </a>
        <a href="/storage">
        <li className="hover:bg-accent" style={{ padding: "6px 10px 3px 15px" }}>
          Storage
        </li>
        </a>
        <a href="/whitepaper">
        <li className="hover:bg-accent" style={{ padding: "6px 10px 3px 15px" }}>
          White paper
        </li>
        </a>
      </ul>
    </div>
  )}

</div>
{/* Resources code above */}


{/* Support Code Below */}
<div className="menu-parent" style={{ position: "relative"}}>

<div style={{display:'flex', alignContent:'center'}} className="cursor-pointer" onMouseEnter={() => setMenu5(true)} onMouseLeave={() => setMenu5(false)}>
    <h1 className="mr-2">Support</h1>
    <img
 src={ArrowDown}
    style={{
    transform: Menu5 ? "rotate(180deg)" : "rotate(0deg)",
    cursor: "pointer",
    }}/>
</div>

{Menu5 && (
<div
style={{
position: "absolute",
top: "100%",
right: 0,
zIndex: 100,
minWidth: "220px",
maxWidth: "220px",
}}
onMouseEnter={() => setMenu5(true)} 
onMouseLeave={() => setMenu5(false)}
className="bg-card border"
>
<ul>
<a href="/payments">
<li className="hover:bg-accent" style={{ padding: "6px 10px 3px 15px"}}>
  Payments
</li>
</a>
<a href="https://pay.williamouyang.org/" target="_blank">
<li className="hover:bg-accent" style={{ padding: "6px 10px 3px 15px" }}>
Donate
</li>
</a>
<a href="/contact">
<li className="hover:bg-accent" style={{ padding: "6px 10px 3px 15px" }}>
Contact
</li>
</a>
</ul>
</div>
)}

</div>
{/* Participate code above */}




        {/* Learn Code Below */}
<div className="menu-parent" style={{ position: "relative"}}>

<div style={{display:'flex', alignContent:'center'}} className="cursor-pointer" onMouseEnter={() => setMenu4(true)} onMouseLeave={() => setMenu4(false)}>
    <h1 className="mr-2">Projects</h1>
    <img
 src={ArrowDown}
    style={{
    transform: Menu4 ? "rotate(180deg)" : "rotate(0deg)",
    cursor: "pointer",
    }}/>
</div>

{Menu4 && (
<div
style={{
position: "absolute",
top: "100%",
right: 0,
zIndex: 100,
minWidth: "220px",
maxWidth: "220px",
}}
onMouseEnter={() => setMenu4(true)} 
onMouseLeave={() => setMenu4(false)}
className="bg-card border"
>
<ul>
<a href="/developerprojects">
<li className="hover:bg-accent" style={{ padding: "6px 10px 3px 15px"}}>
  Developer Projects
</li>
</a>
<a href="/currentprojects">
<li className="hover:bg-accent" style={{ padding: "6px 10px 3px 15px" }}>
Current Projects
</li>
</a>

</ul>
</div>
)}

</div>
{/* Learn Code Above */}

        

        <a href="/faq">FAQ</a>





      </div>
    </div>


    </div>
    </>
  );
};

export default Navbar;
