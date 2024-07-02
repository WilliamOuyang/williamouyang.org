import Footer from "@/pagecomponents/shared/Footer";
import Navbar from "@/pagecomponents/shared/Navbar";
import { useEffect } from "react";

const CurrentProjects = () => {

    useEffect(() => {
        document.title = "Current Projects | williamouyang.org";
      }, []);

  return (
    <div style={{display:'flex', height:'100vh', flexDirection:'column'}}>
      <Navbar />
      <div style={{display:'flex', height:'100%', flexDirection:'column', marginTop:'40px', marginBottom:'170px'}}>
      <div style={{display:'flex', justifyContent:'center', marginBottom:'30px'}}><h1 style={{fontFamily:'GT', fontSize:'30px'}} className="cursor-default">Current Projects</h1></div>
      <div style={{display:'flex', justifyContent:'center', marginBottom:'30px'}}><h1 style={{fontFamily:'GT'}}>A list of my current business projects:</h1></div>
      <div style={{display:'flex', justifyContent:'center', marginBottom:'30px'}}><h1>Stock Trading</h1></div>
      <div style={{display:'flex', justifyContent:'center', marginBottom:'30px'}}><h1>Peer to Peer Exchange</h1></div>
      <div style={{display:'flex', justifyContent:'center', marginBottom:'30px'}}><h1>Chess Tutoring</h1></div>
      <div style={{display:'flex', justifyContent:'center', marginBottom:'30px'}}><h1>Chipotle</h1></div>
      </div>
      <Footer />
    </div>
  );
};

export default CurrentProjects;
