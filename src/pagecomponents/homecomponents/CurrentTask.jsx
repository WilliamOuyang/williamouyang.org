import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Separator } from "@/components/ui/separator";
import { SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { lineSpinner } from 'ldrs'

lineSpinner.register()

const supabase = createClient(
  "https://bsqkowajqcuuiaybhumq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzcWtvd2FqcWN1dWlheWJodW1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2ODY3MjYsImV4cCI6MjAzNDI2MjcyNn0.JQziKNIcTKGBK0jbF7GZj5a0PawnZY2vHX9-vILJcJw"
);

function CurrentTask() {
  const [loading, setLoading] = useState(true)
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    fetchBlocks();
  }, []);

  async function fetchBlocks() {
    try {
      const { data, error } = await supabase.from("block").select("*");
      if (error) {
        throw error;
      }
      setBlocks(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blocks:", error.message);
    }
  }

  function getCurrentBlockIndex() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const totalMinutes = hours * 60 + minutes;
    const currentBlock = Math.floor(totalMinutes / 30)-1;
    return currentBlock;
}

  return (
    <>
      <ul>
      {blocks.map((block, index) => {
          if (index === getCurrentBlockIndex()) {
            return (
              <li key={block.id}>
                <p className="text-2xl font-bold">
                  {/* {block.time}{' '}: */}
                  {' '}{block.event}
                </p>
              </li>
            );
          }
          return null;
        })}
      </ul>
      {loading ? 
<l-line-spinner
  size="40"
  stroke="3"
  speed="1" 
  color="#ff0055" 
></l-line-spinner>
: ""}
    </>
  );
}

export default CurrentTask;
