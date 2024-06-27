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
            
        <ul>
        <li className="cursor-default"><strong>Introduction</strong></li>
        <li className="mt-5"> <a href="/" className="hover:underline">  Overview </a></li>
        <li className="mt-5"> <a href="/about" className="hover:underline">   About </a></li>
        <li className="mt-5"> <a href="/achievements" className="hover:underline">  Achievements </a></li>
        <li className="mt-5"> <a href="https://github.com/WilliamOuyang/williamouyang.org" className="hover:underline">  Source Code </a></li>
        </ul>

        <ul>
        <li className="cursor-default"><strong> Resources</strong></li>
        <li className="mt-5">   <a href="/schedule" className="hover:underline">Schedule</a></li>
        <li className="mt-5">   <a href="/vault" className="hover:underline">Vault</a></li>
        <li className="mt-5">   <a href="/storage" className="hover:underline">Storage </a></li>
        <li className="mt-5">   <a href="/whitepaper" className="hover:underline">White paper </a>  </li> 
        </ul>

        <ul>
        <li className="cursor-default"><strong>Support</strong></li>
        <li className="mt-5"><a href="/payments" className="hover:underline">Payments</a></li>
        <li className="mt-5"><a href="https://pay.williamouyang.org" target="_blank" className="hover:underline">Donate</a> </li>
        <li className="mt-5"><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>

        <ul>
        <li className="cursor-default"><strong>Projects</strong></li>
        <li className="mt-5">  <a href="/developerprojects" className="hover:underline">Developer Projects</a> </li>
        <li className="mt-5">   <a href="currentprojects" className="hover:underline">Current Projects</a></li>
        </ul>

        <ul>
        <li className="cursor-default"><strong>Other</strong></li>
        <li className="mt-5"> <a href="/faq" className="hover:underline">FAQ</a> </li>
        </ul>
        </div>
        
        </h1>   
    </div>
        <Footer/>
    </>
  )
}

export default Sitemap