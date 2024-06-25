import Footer from "@/pagecomponents/shared/Footer"
import Navbar from "@/pagecomponents/shared/Navbar"
import { useEffect } from "react";

const Sitemap = () => {

  useEffect(() => {
    document.title = "Sitemap | williamouyang.org";
  }, []);

  return (
    <>
    <Navbar/>
    
    <div style={{marginTop:'40px', marginBottom:'170px'}}>
      <div style={{display:'flex', justifyContent:'center', marginBottom:'30px'}}><h1 style={{fontFamily:'GT', fontSize:'60px'}} className="cursor-default">Sitemap</h1></div>
        <h1 className="text-2xl">
        <div style={{display:'flex', justifyContent:'space-around'}}>
            
        <ul style={{ display: 'grid', gap: '10px' }}>
        <li className="cursor-default"><strong>Introduction</strong></li>
        <li>  Overview</li>
        <li>   About </li>
        <li>   Achievements </li>
        <li> <a href="https://github.com/WilliamOuyang/williamouyang.org">  Source Code </a></li>
        </ul>

        <ul style={{ display: 'grid', gap: '10px' }}>
        <li className="cursor-default"><strong> Resources</strong></li>
        <li>   <a href="/schedule">Schedule</a></li>
        <li>   <a href="/vault">Vault</a></li>
        <li>   <a href="/storage">Storage </a></li>
        <li>   <a href="/whitepaper">White paper </a>  </li> 
        </ul>

        <ul style={{ display: 'grid', gap: '10px' }}>
        <li className="cursor-default"><strong>Support</strong></li>
        <li>   Payments </li>
        <li><a href="/donate">Donate</a> </li>
        <li><a href="/donate">Contact</a></li>
        </ul>

        <ul style={{ display: 'grid', gap: '10px' }}>
        <li className="cursor-default"><strong>Projects</strong></li>
        <li>   Developer Projects </li>
        <li>   Current Projects</li>
        </ul>

        <ul>
        <li className="cursor-default"><strong>Other</strong></li>
        <li className="mt-5"> <a href="/faq">FAQ</a> </li>
        </ul>
        </div>
        
        </h1>   
    </div>
        <Footer/>
    </>
  )
}

export default Sitemap