import Footer from "@/pagecomponents/shared/Footer";
import Navbar from "@/pagecomponents/shared/Navbar";
import Email from "@/assets/Email.svg"
import Link from "@/assets/external-link.svg"
import { useEffect } from "react";


const Docs = () => {
  useEffect(() => {
    document.title = "Docs | williamouyang.org";
  }, []);

  return (
    <>
      <Navbar />
      <div style={{padding:'30px'}}>
        <h1 style={{fontFamily:'GT', fontSize:'30px'}}>Contact us</h1>
        <br/>

<em>If you have to troubleshoot problems, business inquries, casual contact, and want to get answers to your questions, feel free to contact me.</em>

<br/>
<br/>
<h1 style={{fontFamily:'GT', fontSize:'30px'}}>E-mail contact option: Contact Form</h1>
<h1>
If you have a question or are experiencing an issue related to the website, please use this <a href="mailto:williamouyang@gmx.com" className="text-blue-700 hover:underline" style={{display: 'inline-flex', alignItems: 'baseline' }}><img src={Link}/>contact form</a> to get in touch for support.<br/><br/>

On the email subject line, please write the subject that most closely describes the reason you are contacting( e.g Business, Friendly Contact, Website Support, or Payment / Donation ). Replies are typically immediate, for exact reply time, please refer to the text below. <br/><br/>

If this list does not contain the answer to your question, please reply to that email with a description of the subject you require assistance with. I will then contact you as soon as possible.<br/><br/>

</h1>
<a href="mailto:williamouyang@gmx.com">
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
     
      <h1 style={{fontFamily:'GT', fontSize:'30px'}}>
      williamouyang@gmx.com
      </h1>
    </div>
    </a>    



    <a href="mailto:williamouyang@gmx.com">
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
     
      <h1 style={{fontFamily:'GT', fontSize:'30px'}}>
      williamouyang@caramail.com
      </h1>
    </div>
    </a>    

<br/>
    If you would like to manually contact me, please send an E-mail. It is my preferred method of communication and the fastest way to reach me. 
    <br/>You can expect an immediate response to any e-mails sent between 6:00 AM to 10:00 PM (GMT-7). E-mails received outside of these hours will be addressed within 8 hours.
</div>
      <Footer/>
    </>
  );
};

export default Docs;
