import Footer from "@/pagecomponents/shared/Footer"
import Navbar from "@/pagecomponents/shared/Navbar"

const Sitemap = () => {
  return (
    <>
    <Navbar/>
    
    <div style={{height:'100vh', alignContent:'center'}}>
        <h1 className="text-2xl">
        <div style={{display:'flex', justifyContent:'space-around'}}>
            
        <ul>
        <li><strong>Introduction</strong></li>
        <li>  Overview</li>
        <li>   About </li>
        <li>   Achievements </li>
        <li>   Source Code </li>
        </ul>

        <ul>
        <li><strong>Resources</strong></li>
        <li>   Schedule</li>
        <li>   Vault</li>
        <li>   Storage </li>
        <li>   White paper   </li> 
        </ul>

        <ul>
        <li><strong>Contribute</strong></li>
        <li>   Payments </li>
        <li>   Donate </li>
        <li>   Contact</li>
        </ul>

        <ul>
        <li><strong>Projects</strong></li>
        <li>   Developer Projects </li>
        <li>   Current Projects</li>
        </ul>

        <ul>
        <li><strong>Other</strong></li>
        <li>   FAQ </li>
        {/* <li>   </li> */}
        </ul>
        </div>
        
        </h1>   
    </div>
        <Footer/>
    </>
  )
}

export default Sitemap