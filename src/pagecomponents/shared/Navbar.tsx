import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import NavResources from "./NavResources";


const Navbar = () => {
  
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* <div style={{display:'flex', backgroundColor:'red', height:'35px', alignItems:'center', justifyContent:'center'}}>Announcement Banner</div> */}



      <div style={{ display: "flex", width: "100%", padding: "10px", 
           position: "fixed",
            top: "0px",
            left: "0",
      }}
      >
        <div
          style={{
            display: "flex",
            height: "62px",
            width: "100%",
            borderRadius: "50px",
            alignContent: "center",
            alignItems: "center",
            paddingLeft: "20px",
            paddingRight: "20px",
            justifyContent: "space-around",
          }}
          className="bg-card border"
        >
          <Link to="/" onMouseEnter={() => setIsHovered(false)}>Home</Link>
          <Link to="/" onMouseEnter={() => setIsHovered(false)}>About</Link>
          <Link to="/" onMouseEnter={() => setIsHovered(false)}>Development</Link>
      
          

             
          
        
              <div style={{ display: "flex", alignItems: "center", height:'100%'}}  onMouseEnter={() => setIsHovered(true)}>
                
                <h1 className={isHovered? "text-white-500" : "text-neutral-400"}>Resources</h1>
                <ChevronDown size={16} className="ml-1" style={{display: isHovered ? "none" : "",}}/>
                <ChevronUp size={16} className="ml-1" style={{display: isHovered ? "" : "none",}}/>
              </div>
              
       
          

          <ModeToggle />
        </div>
      </div>

      <div
        style={{
          display: isHovered ? "flex" : "none",
          width: "100%",
          padding: "10px",
          position: "fixed",
          top: "80px",
          left: "0",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
       <NavResources/>
      </div>
    </>
  );
};

export default Navbar;
