// import WhitepaperText from "@/pagecomponents/whitepapercomponents/WhitepaperText";
import Download from "@/pagecomponents/whitepapercomponents/Download";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/pagecomponents/shared/Navbar";
import { useEffect } from "react";
import Footer from "@/pagecomponents/shared/Footer";

const Whitepaper = () => {
  
  
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });


  useEffect(() => {
    document.title = "White paper | williamouyang.org";
  }, []);

  return (
    <div style={{display:'flex', height:'100vh', width:'100vw', flexDirection:'column'}}>
      <Navbar/>
      {/* <>
        <motion.div className="progress-bar" style={{ scaleX }} />
      </> */}
      <div style={{display:'flex', height:'100%'}}>
      <Download />
      </div>
      <Footer/>
    </div>
  );
};

export default Whitepaper;
