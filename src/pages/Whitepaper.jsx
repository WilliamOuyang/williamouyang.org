// import WhitepaperText from "@/pagecomponents/whitepapercomponents/WhitepaperText";
import Download from "@/pagecomponents/whitepapercomponents/Download";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/pagecomponents/shared/Navbar";
import { useEffect } from "react";
import Footer from "@/pagecomponents/shared/Footer";
import WhitepaperIMG from "@/pagecomponents/whitepapercomponents/WhitepaperIMG/WhitepaperIMG";

const Whitepaper = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  useEffect(() => {
    document.title = "White paper | williamouyang.org";
  }, []);

  return (
    <>
      <Navbar/>
      <>
        <motion.div className="progress-bar" style={{ scaleX }} />
        {/* <WhitepaperText />   */}
        <WhitepaperIMG/>
      </>
      <Download />
      <Footer/>
    </>
  );
};

export default Whitepaper;