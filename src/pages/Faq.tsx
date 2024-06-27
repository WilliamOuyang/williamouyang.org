import Navbar from "@/pagecomponents/shared/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/pagecomponents/shared/Footer";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";

const Faq = () => {

  useEffect(() => {
    document.title = "FAQ | williamouyang.org";
  }, []);

  return (
    <>
      <Navbar />
      <div
        style={{ display: "flex", justifyContent: "center"}}
      >
        <div style={{ width: "750px", marginTop: "40px", marginBottom:'50px'}}>

       
        <h1 style={{fontFamily:'GT', fontSize:'30px'}}>Frequently Asked Questions</h1>
      

          <Separator />

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1>What is your e-mail?</h1>
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
              <AccordionTrigger>What is your phone number?</AccordionTrigger>
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
                <h1>What is the best way to contact you?</h1>
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
                <h1>I need alternative contact information, how can I contact you?</h1>
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
                <h1>How was this website built?</h1>
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
                <h1>What payment methods do you accept?</h1>
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
      <Footer />
    </>
  );
};

export default Faq;
