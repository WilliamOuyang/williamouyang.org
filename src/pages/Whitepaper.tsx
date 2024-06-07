import Navbar from "@/pagecomponents/shared/Navbar";
import WhitepaperText from "@/pagecomponents/whitepapercomponents/WhitepaperText";
import Download from "@/pagecomponents/whitepapercomponents/Download";
import { motion, useScroll, useSpring } from "framer-motion";

const Whitepaper = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div>

      <Navbar />

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