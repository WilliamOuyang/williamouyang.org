import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Navbar2 from "@/pagecomponents/shared/Navbar2";
import { Separator } from "@/components/ui/separator";
import { SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";
const supabase = createClient(
  "https://bsqkowajqcuuiaybhumq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzcWtvd2FqcWN1dWlheWJodW1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2ODY3MjYsImV4cCI6MjAzNDI2MjcyNn0.JQziKNIcTKGBK0jbF7GZj5a0PawnZY2vHX9-vILJcJw"
);

function CurrentTask() {
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
    } catch (error) {
      console.error("Error fetching blocks:", error.message);
    }
  }

  function getCurrentBlockIndex() {
    const now = new Date();
    const hours = now.getHours();
    const currentBlock = hours * 2; // Each block is half an hour
    return currentBlock;
  }

  return (
    <>
      <Navbar2 />

      <ul>
      {blocks.map((block, index) => {
          if (index === getCurrentBlockIndex()) {
            return (
              <li key={block.id}>
                <p className="text-2xl font-bold">
                  {block.time}:{block.event}
                </p>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </>
  );
}

export default CurrentTask;
