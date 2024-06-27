import Footer from '@/pagecomponents/shared/Footer'
import Navbar from '@/pagecomponents/shared/Navbar'
import { useEffect } from 'react';

const Achievements = () => {

    useEffect(() => {
        document.title = "Achievements | williamouyang.org";
      }, []);

  return (
    <>
    <Navbar/>
        <div style={{marginTop:'40px', marginBottom:'170px'}}>
      <div style={{display:'flex', justifyContent:'center', marginBottom:'10px'}}><h1 style={{fontFamily:'GT', fontSize:'30px'}} className="cursor-default">Achievements</h1></div>
      <div style={{display:'flex', justifyContent:'center', marginBottom:'10px'}}><h1 style={{fontFamily:'GT'}}>Information about milestones and accomplishments.</h1></div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <ul>
            <li><h1>Eagle Scout Rank (Silver Palm)</h1></li>
            <li><h1>More to be added...</h1></li>
            
        </ul>    
      </div>

      </div>
      <Footer/>
    </>
  )
}

export default Achievements