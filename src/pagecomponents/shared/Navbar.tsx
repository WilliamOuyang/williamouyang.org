import { ModeToggle } from "@/components/mode-toggle";
import ArrowDown from "@/assets/Icon_arrow_down.svg";
import { useState } from "react";

const Navbar2 = () => {
  const [Menu1, setMenu1] = useState<boolean>(false);

  return (
    <div
      className="bg-card border drop-shadow-md"
      style={{
        position: "fixed",
        top: "10px",
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
          height:'100%'
          
        }}
        onMouseEnter={() => {
            setMenu1(false);
          }}
      >





        <h1 style={{ position: "fixed", left: "40px" }}>WilliamOuyang</h1>


        <a className="mx-4" href="/">Home</a>


        <div className="menu-parent" style={{ position: "relative"}}>

            <div style={{display:'flex', alignContent:'center'}} onMouseEnter={() => setMenu1(true)} onMouseLeave={() => setMenu1(false)}>
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
        

        <a className="mx-4" href="/docs">Documentation</a>

        <a className="mx-4" href="faq">FAQ</a>

        <a style={{ position: "fixed", right: "40px" }}>
          <ModeToggle />
        </a>
      </div>
    </div>
  );
};

export default Navbar2;
