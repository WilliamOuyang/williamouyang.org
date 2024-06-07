import Image from "@/assets/react.svg"
import { Card } from "@/components/ui/card"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export interface Artwork {
  artist: string
  art: string
}

export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
]

const NavResources=()=> {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-lg border bg-card" style={{height:'300px'}}>
      <div style={{display:'flex',padding:'15px', gap:'15px'}}>
       <Card style={{height:'260px', width:'33vw'}}>
        One
       </Card>
       <Card style={{height:'260px', width:'33vw'}}>
        Two
       </Card>
       <Card style={{height:'260px', width:'33vw'}}>
        Three
       </Card>
       <Card style={{height:'260px', width:'33vw'}}>
        Four
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
        Nine
       </Card>

      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
export default NavResources;