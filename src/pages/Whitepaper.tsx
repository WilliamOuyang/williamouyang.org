import WhitepaperText from "@/pagecomponents/whitepapercomponents/WhitepaperText";
import Download from "@/pagecomponents/whitepapercomponents/Download";
import { motion, useScroll, useSpring } from "framer-motion";
// import Navbar from "@/pagecomponents/shared/Navbar";
import { useEffect } from "react";
import Navbar2 from "@/pagecomponents/shared/Navbar2";

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
    <div>
      <Navbar2 />
      {/* <Navbar/> */}
      <>
        <motion.div className="progress-bar" style={{ scaleX }} />
        <WhitepaperText />
      </>
      <Download />
    </div>
  );
};

export default Whitepaper;
