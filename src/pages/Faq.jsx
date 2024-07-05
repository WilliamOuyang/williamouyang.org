import Navbar from "@/pagecomponents/shared/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/pagecomponents/shared/Footer";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { lineSpinner } from "ldrs";
lineSpinner.register();

const supabase = createClient(
  "https://bsqkowajqcuuiaybhumq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzcWtvd2FqcWN1dWlheWJodW1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2ODY3MjYsImV4cCI6MjAzNDI2MjcyNn0.JQziKNIcTKGBK0jbF7GZj5a0PawnZY2vHX9-vILJcJw"
);



const Faq = () => {
  
  const [loading, setLoading] = useState(true);
  const [blocks, setBlocks] = useState([]);
  useEffect(() => {
    fetchBlocks();
  }, []);
  async function fetchBlocks() {
    try {
      const { data, error } = await supabase.from("FAQ").select("*");
      if (error) {
        throw error;
      }
      setBlocks(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blocks:", error.message);
    }
  }



  useEffect(() => {
    document.title = "FAQ | williamouyang.org";
  }, []);

  return (
    <div style={{height:'100vh', flexDirection:'column'}}>
      <Navbar />
      <div
        style={{ display: "flex", height:'100%', justifyContent: "center"}}
      >
        <div style={{ width: "750px", marginTop: "40px", marginBottom:'50px'}}>

       
        <h1 style={{fontFamily:'GT', fontSize:'30px'}}>Frequently Asked Questions</h1>
      

          <Separator />

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1 style={{fontFamily:'GT'}}>What is your e-mail?</h1>
              </AccordionTrigger>
              <AccordionContent>
                <u className="text-blue-700">
                  <h1>
                    <a href="mailto:williamouyang@gmx.com">
                      williamouyang@gmx.com
                    </a>
                  </h1>
                </u>
                <br />
                Feel free to reach out for personal contact, casual chats, or
                business inquiries.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger><h1 style={{fontFamily:'GT'}}>What is your phone number?</h1></AccordionTrigger>
              <AccordionContent>
              <a href="tel:+1 925-367-1375">+1 925-367-1375</a>

                <br />
                <br />
                Please use this phone number for business inquiries only. 
                <br/>For personal
                contact, please reach me via e-mail: <u className="text-blue-700">
                  <h1>
                    <a href="mailto:williamouyang@gmx.com">
                      williamouyang@gmx.com
                    </a>
                  </h1>
                </u>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1 style={{fontFamily:'GT'}}>What is the best way to contact you?</h1>
              </AccordionTrigger>
              <AccordionContent>
                E-mail. It is my preferred method of communication.
                Additionally, it is the fastest way to reach me. You can expect
                an immediate response to any e-mails sent between 6:00 AM to
                10:00 PM (GMT-7). E-mails received outside of these hours will
                be addressed within 8 hours.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1 style={{fontFamily:'GT'}}>I need alternative contact information, how can I contact you?</h1>
              </AccordionTrigger>
              <AccordionContent>
                <h1>
                <em>Note: Alternative contact is slower than primary e-mail, it may take up to 24 hours for a response.</em>

                <br/><br/>If for any reason you are unable to use the primary e-mail, please use:    

                <u className="text-blue-700">
                  <h1>
                    <a href="mailto:williamouyang@gmx.com">
                    E-mail: williamouyang@caramail.com
                    </a>
                  </h1>
                </u>       
                </h1>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1 style={{fontFamily:'GT'}}>How was this website built?</h1>
              </AccordionTrigger>
              <AccordionContent>
                This website is built using React on the Vite Framework. If you
                are interested in the source code, you can
                find the github repository in the top
                navigation menu under "Introduction". 
              </AccordionContent>
            </AccordionItem>
          </Accordion>


          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1 style={{fontFamily:'GT'}}>What payment methods do you accept?</h1>
              </AccordionTrigger>
              <AccordionContent>
                <h1>
                To find accepted payment methods, visit the "Payments" page under "Support {">"} Payments"
                </h1>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
        </div>
      </div>
      
      
      
      
      
      
      
      <ul>
      {blocks.map((block) => (  
    <li key={block.id}>
     <h1>{block.title}</h1>
     <h1>{block.description}</h1>
    </li>
  ))}
  </ul>
      
      {loading ? 
<l-line-spinner
  size="40"
  stroke="3"
  speed="1" 
  color="#ff0055" 
></l-line-spinner>
: ""}
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      <Footer />
      
    </div>
  );
};

export default Faq
