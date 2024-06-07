import { Card } from "@/components/ui/card"
import { EvervaultCard } from "@/components/ui/evervault-card";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"



const NavResources=()=> {
  const text = `Vault`;
  return (
    <ScrollArea className="w-full whitespace-nowrap" style={{position:'absolute', left:'0', height:'300px'}}>
      <div style={{display:'flex',padding:'15px', gap:'15px'}}>
       <Card style={{height:'260px', width:'31vw'}}>
        Schedule
       </Card>
       <Card style={{height:'260px', width:'31vw'}}>
        Dashboard
       </Card>
       <Card style={{height:'260px', width:'31vw'}}>
        Personal Vault
       </Card>
       <Card style={{height:'260px', width:'31vw'}}>
        News
       </Card>
       <Card style={{height:'260px', width:'31vw'}}>
        Five
       </Card>
       <Card style={{height:'260px', width:'31vw'}}>
        Six
       </Card>
       <Card style={{height:'260px', width:'31vw'}}>
        Seven
       </Card>
       <Card style={{height:'260px', width:'31vw'}}>
        Eight
       </Card>

       <Card style={{height:'260px', width:'33vw'}}>
       <EvervaultCard text={text}/>
       </Card>

      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
export default NavResources;