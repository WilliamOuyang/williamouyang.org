import Navbar2 from "@/pagecomponents/shared/Navbar2"
import { useEffect } from "react";

const Docs = () => {

  useEffect(() => {
    document.title = "Docs | williamouyang.org"
  }, []);

  return (
    <div>
        
        <Navbar2/>
        <div style={{marginTop:'100px', padding:'10px'}}>
          (6/10/2024): <br/> <br/>
          Begun college planning to fulfill parent's wishes. I prioritize minimizing cost.<br/>
          Plan: 2 years of community college (free of charge), then transfer to UC for 2 years.<br/> 
          <br/>
          I have taken on an additional job starting today - teaching chess for $90 an hour. <br/>
          I am currently working at Chipotle for $20.17/hour. <br/>
          I am researching which campus on The Real World fits suits my circumstances. 
          <br/><br/>
          The Real World Notes:<br/>
          Goal: Utilize 40K, Generate revenue<br/>
          <br/>

          <s> 1. Hustler's Campus (my goal is not urgent cash)</s><br/>
          <s> 2. Business Mastery ( I do not have a business ) </s><br/>
          3. Copywriting.  <br/>
          <s>4. Ecommerce. (Consulted with Inder, not currently a good option) <br/> </s>
          5. Content Creation + AI Campus  <br/>
          6. Social Media & Client Acquisition  <br/>
          7. Crypto Trading  <br/>
          8. Crypto DeFi <br/>
          <s> 1. Fitness Campus (No revenue)</s><br/>
          9. Cryptocurrency Investing  <br/>
          10. Stock Campus  <strong>{`<---------------------------- Suits my interests. I will start with this one `}</strong><br/>

          <br/><br/>
          Strategy:<br/>
          1. Choose a Campus. Focus and stick with that Campus. 
          <br/><br/>
          Current Income: 29,280 per year
        

          

        </div>
    </div>
  )
}

export default Docs