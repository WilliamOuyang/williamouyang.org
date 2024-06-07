import { Card } from "@/components/ui/card"
import { EvervaultCard } from "@/components/ui/evervault-card";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Link } from "react-router-dom";



const NavResources=()=> {
  const text = `Vault`;
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-lg border bg-card" style={{height:'300px'}}>
      <div style={{display:'flex',padding:'15px', gap:'15px'}}>
       <Card style={{height:'260px', width:'33vw'}}>
        Schedule
       </Card>
       <Card style={{height:'260px', width:'33vw'}}>
        Dashboard
       </Card>
       <Card style={{height:'260px', width:'33vw'}}>
        Personal Vault
       </Card>
       <Card style={{height:'260px', width:'33vw'}}>
        News
       </Card>
       <Card style={{height:'260px', width:'33vw'}}>
        Five
       </Card>
       <Card style={{height:'260px', width:'33vw'}}>
        Six
       </Card>
       <Card style={{height:'260px', width:'33vw'}}>
        Seven
       </Card>
       <Card style={{height:'260px', width:'33vw'}}>
        Eight
       </Card>
       <Link to="/whitepaper">
       <Card style={{height:'260px', width:'33vw'}}>
        White paper
       </Card>
       </Link>

       <Card style={{height:'260px', width:'33vw'}}>
       <EvervaultCard text={text}/>
       </Card>

      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
export default NavResources;