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

function Schedule2() {
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
    const minutes = now.getMinutes();
    const totalMinutes = hours * 60 + minutes;
    const currentBlock = Math.floor(totalMinutes / 30)-1;
    return currentBlock;
}

  return (
    <>
      <Navbar2 />
      <div
        style={{
          display: "flex",
          width: "100%",
          marginTop: "100px",
          marginBottom: "100px",
          justifyContent: "center",
        }}
      >
        <div>
          <div
            className="border border-foreground"
            style={{ padding: "10px", marginBottom: "30px" }}
          >
            <strong>
              <h1 className="text-2xl">Supabase Organizer of William Ouyang</h1>
            </strong>
            <Button
              variant="edit"
              style={{ display: "flex", alignItems: "center" }}
              onClick={() =>
                window.open(
                  "https://supabase.com/dashboard/project/bsqkowajqcuuiaybhumq/sql/8e82ee3d-13fe-475c-b270-111eea98ce40"
                )
              }
            >
              <SquarePen className="mr-2" />
              <p>Edit Schedule</p>
            </Button>
          </div>

          <strong>
            <h1 className="text-2xl">Tuesday, 18.06.2024</h1>
          </strong>

          <Separator className="border border-foreground" />

          <ul>
            {blocks.map((block, index) => (

              <div
                style={{
                  backgroundColor:
                    index === getCurrentBlockIndex() ? "#ff0055" : "transparent",
                }}
              >

                <li key={block.id}>
                  <div style={{ marginLeft: "23px" }}>
                    <p className="text-lg">
                      <span className="text-lg font-bold ">{block.time}</span>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {block.event}
                    </p>
                  </div>
                </li>
              
              </div>

            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Schedule2;
