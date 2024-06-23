import { ModeToggle } from "@/components/mode-toggle";
import ArrowDown from "@/assets/Icon_arrow_down.svg";
import { useState } from "react";

const Navbar = () => {
  const [Menu1, setMenu1] = useState<boolean>(false);
  const [Menu2, setMenu2] = useState<boolean>(false);
  

  return (
    <>

    <div
      className="bg-card border"
      // drop-shadow-md
      style={{
        position: "relative",
        // top: "10px",
        width: "100%",
        height: "75px",
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
<a href="/vault">
<li className="hover:bg-accent" style={{ padding: "6px 10px 3px 15px" }}>
About
</li>
</a>
<a href="/storage">
<li className="hover:bg-accent" style={{ padding: "6px 10px 3px 15px" }}>
Contact
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



        <a href="/docs">Documentation</a>

        <a className="" href="faq">FAQ</a>




      </div>
    </div>
    </>
  );
};

export default Navbar;
