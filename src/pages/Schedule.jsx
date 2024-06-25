import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Navbar from "@/pagecomponents/shared/Navbar";
import { Separator } from "@/components/ui/separator";
import { Edit2Icon, SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconEdit } from "@tabler/icons-react";
import { lineSpinner } from "ldrs";
import Footer from "@/pagecomponents/shared/Footer";
lineSpinner.register();

const supabase = createClient(
  "https://bsqkowajqcuuiaybhumq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzcWtvd2FqcWN1dWlheWJodW1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2ODY3MjYsImV4cCI6MjAzNDI2MjcyNn0.JQziKNIcTKGBK0jbF7GZj5a0PawnZY2vHX9-vILJcJw"
);

function Schedule() {

  useEffect(() => {
    document.title = "Schedule | williamouyang.org";
  }, []);

  const [loading, setLoading] = useState(true);
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
    const currentBlock = Math.floor(totalMinutes / 30) - 1;
    return currentBlock;
  }
  //TIME SCRIPT BELOW
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const formattedDate = currentDate.toLocaleString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  //TIME SCRIPT ABOVE

  return (
    <>
      <Navbar />
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
            style={{display:'flex', padding: "10px", marginBottom: "30px",  justifyContent:'center', flexDirection: 'column',}}
          >
            <strong>
              <h1 className="text-2xl">Supabase Organizer of William Ouyang</h1>
            </strong>
            <button
              style={{ display: "flex", alignItems: "center", justifyContent:'center', }}
              onClick={() =>
                window.open(
                  "https://supabase.com/dashboard/project/bsqkowajqcuuiaybhumq/sql/8e82ee3d-13fe-475c-b270-111eea98ce40"
                )
              }
            >
              <IconEdit stroke={2} className="mr-1" />
              <p>Edit Schedule</p>
            </button>
          </div>
          <strong>
            <h1 className="text-2xl">{formattedDate}</h1>
          </strong>
          <Separator className="border border-foreground" />
          <ul>
            {blocks.map((block, index) => (
              <div
                style={{
                  backgroundColor:
                    index === getCurrentBlockIndex()
                      ? "#ff0055"
                      : "transparent",
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
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Schedule;
