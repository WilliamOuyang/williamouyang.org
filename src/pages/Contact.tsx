import Footer from "@/pagecomponents/shared/Footer";
import Navbar from "@/pagecomponents/shared/Navbar";
import Email from "@/assets/Email.svg"
import { useEffect } from "react";

const Docs = () => {
  useEffect(() => {
    document.title = "Docs | williamouyang.org";
  }, []);

  return (
    <>
      <Navbar />
        Contact


       
    <div style={{display:'flex', alignItems:'center'}}>
      <button className="w-[40px] h-[40px] mr-2">
        <img
          className="select-none"
          draggable="false"
          src={Email}
          alt="E-mail"
          style={{ width: "100%", height: "100%" }}
        />  
      </button>
      <h1>E-mail: williamouyang@gmx.com</h1>
    </div>
   
        

      <Footer/>
    </>
  );
};

export default Docs;
