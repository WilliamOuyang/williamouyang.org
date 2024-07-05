import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Separator } from "@/components/ui/separator";
import { SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { lineSpinner } from "ldrs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

lineSpinner.register();

const supabase = createClient(
  "https://bsqkowajqcuuiaybhumq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzcWtvd2FqcWN1dWlheWJodW1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2ODY3MjYsImV4cCI6MjAzNDI2MjcyNn0.JQziKNIcTKGBK0jbF7GZj5a0PawnZY2vHX9-vILJcJw"
);

function CurrentTask() {
  const [loading, setLoading] = useState(true);
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    fetchBlocks();
  }, []);

  async function fetchBlocks() {
    try {
      const { data, error } = await supabase.from("faq").select("*");
      if (error) {
        throw error;
      }
      setBlocks(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blocks:", error.message);
    }
  }

  return (
    <>
      <ul>
        {blocks.map((block, index) => {
          return (
            <div key={block.id}>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <h1 style={{ fontFamily: "GT" }}>
                    {block.Title} 
                    </h1>
                  </AccordionTrigger>
                  <AccordionContent>
                    <h1>
                    {block.Description}
                    </h1>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          );
        })}
      </ul>
      {loading ? (
        <l-line-spinner
          size="40"
          stroke="3"
          speed="1"
          color="#ff0055"
        ></l-line-spinner>
      ) : (
        ""
      )}
    </>
  );
}

export default CurrentTask;
