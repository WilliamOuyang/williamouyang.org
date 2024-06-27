import Footer from "@/pagecomponents/shared/Footer"
import Navbar from "@/pagecomponents/shared/Navbar"
import { useEffect } from "react";


const DevProjects = () => {
  useEffect(() => {
    document.title = "Developer Projects | williamouyang.org";
  }, []);

  return (
    <>
    <Navbar/>
    <div style={{marginTop:'40px', marginBottom:'170px'}}>
      <div style={{display:'flex', justifyContent:'center', marginBottom:'30px'}}><h1 style={{fontFamily:'GT', fontSize:'30px'}} className="cursor-default">Developer Projects</h1></div>
      <div style={{display:'flex', justifyContent:'center', marginBottom:'30px'}}><h1 style={{fontFamily:'GT'}}>A list of my current developer projects:</h1></div>
      <div style={{display:'flex', justifyContent:'center', marginBottom:'30px'}}><h1><u><a href="https://williamouyang.org">williamouyang.org</a></u></h1></div>
      </div>
    <Footer/>
    </>
  )
}

export default DevProjects