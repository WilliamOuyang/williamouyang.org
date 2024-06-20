import Navbar from "@/pagecomponents/shared/Navbar"
import { useEffect } from "react";

const Docs = () => {

  useEffect(() => {
    document.title = "Docs | williamouyang.org"
  }, []);

  return (
    <div>
        <Navbar/>
        <div style={{marginTop:'100px', padding:'10px'}}>
          Docs
        </div>
    </div>
  )
}

export default Docs