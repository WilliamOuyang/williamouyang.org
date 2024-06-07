import { Card } from "@/components/ui/card"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"



const NavResources=()=> {
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
       <Card style={{height:'260px', width:'33vw'}}>
        White paper
       </Card>

      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
export default NavResources;