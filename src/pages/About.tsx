import Footer from "@/pagecomponents/shared/Footer"
import Navbar from "@/pagecomponents/shared/Navbar"
import { useEffect } from "react";

const About = () => {

  useEffect(() => {
    document.title = "About | williamouyang.org";
  }, []);


  return (
    <div style={{display:'flex', height:'100vh', width:'100vw', flexDirection:'column'}}>
    <Navbar/>
        <div style={{display:'flex', height:'100%', marginTop:'40px', marginBottom:'170px', flexDirection:'column'}}>
      <div style={{display:'flex', justifyContent:'center', marginBottom:'10px'}}><h1 style={{fontFamily:'GT', fontSize:'30px'}} className="cursor-default">About</h1></div>
      <div style={{display:'flex', justifyContent:'center', marginBottom:'10px'}}><h1 style={{fontFamily:'GT'}}>Profile Information:</h1></div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <ul>
            <li><h1>Name: William Kadin Ouyang</h1></li>
            <li><h1>Age: 18</h1></li>
            <li><h1>Date of Birth: 12/13/2005</h1></li>
            <li><h1>Net Worth: $42,000</h1></li>
            <li><h1>Current Income: $32,000</h1></li>
            <li><h1>Personal Hobbies: Guitar, Piano</h1></li>
            <li><h1>Work Hobbies: Cryptocurrency, Stocks</h1></li>
            
        </ul>    
      </div>

      </div>
      <Footer/>
    </div>
  )
}

export default About