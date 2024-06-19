import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Navbar2 from "@/pagecomponents/shared/Navbar2";
const supabase = createClient(
  "https://bsqkowajqcuuiaybhumq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzcWtvd2FqcWN1dWlheWJodW1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2ODY3MjYsImV4cCI6MjAzNDI2MjcyNn0.JQziKNIcTKGBK0jbF7GZj5a0PawnZY2vHX9-vILJcJw"
);

function Test2() {
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
          <div className="border border-foreground" style={{padding:'10px'}}>
          <strong>
            <h1  className="text-2xl">Supabase Organizer of William Ouyang</h1>
          </strong>
          </div>

          <strong>
            <h1 className="text-2xl">Tuesday, 18.06.2024</h1>
          </strong>

          <ul>
            {blocks.map((block) => (
              <li key={block.id}>
                <p className="text-lg">
                  <span className="text-lg font-bold">{block.time}</span>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {block.event}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Test2;
