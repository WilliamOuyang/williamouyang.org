import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Navbar from "@/pagecomponents/shared/Navbar";
import { Separator } from "@/components/ui/separator";
import { Edit2Icon, SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconEdit } from "@tabler/icons-react";
import { lineSpinner } from "ldrs";
import Footer from "@/pagecomponents/shared/Footer";
// import Lock from "@/assets/Lock.svg"
import Lock from "@/SVGJSX/Lock"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
lineSpinner.register();

const supabase = createClient(
  "https://bsqkowajqcuuiaybhumq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzcWtvd2FqcWN1dWlheWJodW1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2ODY3MjYsImV4cCI6MjAzNDI2MjcyNn0.JQziKNIcTKGBK0jbF7GZj5a0PawnZY2vHX9-vILJcJw"
);

function Vault() {

  useEffect(() => {
    document.title = "Vault | williamouyang.org";
  }, []);

  const [loading, setLoading] = useState(true);
  const [blocks, setBlocks] = useState([]);
  useEffect(() => {
    fetchBlocks();
  }, []);
  async function fetchBlocks() {
    try {
      const { data, error } = await supabase.from("vault").select("*");
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

          <div style={{display:'flex', justifyContent:'center'}}>
          <h1 className="text-2xl" style={{ marginBottom: "10px", fontFamily:'GT', fontSize:'30px'}}>
            VAULT
          </h1>
          <Lock/>
          {/* <img src={Lock} style={{height:'30px'}}/> */}
        </div>

          <div className="overflow-x-auto bg-card border" >
          <Table>
  <TableCaption>A list of your personal financial assets.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Category</TableHead>
      <TableHead>Cost Basis</TableHead>
      <TableHead>Total Quantity</TableHead>
      <TableHead>Storage Method</TableHead>
      <TableHead >Date Acquired</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {blocks.map((block) => (  
    <TableRow key={block.id}>
      <TableCell className="font-medium">{block.category}</TableCell>
      <TableCell>  {block.costbasis}</TableCell>
      <TableCell>{block.totalquantity}</TableCell>
      <TableCell> {block.storagemethod}</TableCell>
      <TableCell>  {block.dateacquired}</TableCell>
    </TableRow>
  ))}
  </TableBody>
</Table>

            
            {/* <table className="min-w-full table-auto">
              <thead>
                <tr className="text-left">
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium  uppercase tracking-wider"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium  uppercase tracking-wider"
                  >
                    Cost Basis
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium  uppercase tracking-wider"
                  >
                    Total Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium  uppercase tracking-wider"
                  >
                    Storage Method
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium  uppercase tracking-wider"
                  >
                    Date Acquired
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y">
                {blocks.map((block) => (
                  <tr key={block.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm  border border-foreground">
                      {block.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm  border border-foreground">
                      {block.costbasis}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm  border border-foreground">
                      {block.totalquantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm  border border-foreground">
                      {block.storagemethod}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm  border border-foreground">
                      {block.dateacquired}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table> */}
          </div>
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
          <button
            style={{ display: "flex", alignItems: "center" }}
            onClick={() =>
              window.open(
                "https://supabase.com/dashboard/project/bsqkowajqcuuiaybhumq/sql/a6391c22-cae2-4df9-b57d-475eedab3d72"
              )
            }
          >
            <IconEdit stroke={2} className="mr-1" />
            <p>Edit Vault</p>
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Vault;
