import WhitepaperText from "@/pagecomponents/whitepapercomponents/WhitepaperText";
import Download from "@/pagecomponents/whitepapercomponents/Download";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar1 from "@/pagecomponents/shared/Navbar1";

const Whitepaper = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div>

      <Navbar1 />
    {/* <Home/> */}

      <>

        <motion.div
          className="progress-bar"
          style={{ scaleX}}
        />
        <WhitepaperText />
  
      </>

          <Download/>

    </div>
  );
};

export default Whitepaper;
