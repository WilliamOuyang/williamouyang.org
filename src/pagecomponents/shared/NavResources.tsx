import { Card } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Link } from 'react-router-dom'

const NavResources = () => {
  return (
    <ScrollArea style={{height:'300px', width:'100%'}}>
    <div
    style={{
      display: "flex",
      height: "300px",
      width: "100%",
      borderRadius: "30px",
      alignContent: "center",
      alignItems: "center",
      paddingLeft: "20px",
      paddingRight: "20px",
      justifyContent: "space-around",
      padding:'15px',
      gap:'15px'
    }}
    className="bg-card border"
  >


    <Card style={{display:'flex', height:'100%', width:'33.3333%'}}>
     <Link to="/whitepaper">
         Schedule
        </Link>
    </Card>

    <Card style={{display:'flex', height:'100%', width:'33.3333%'}}>
        <Link to="/whitepaper">
         Dashboard
        </Link>
    </Card>

    <Card style={{display:'flex', height:'100%', width:'33.3333%'}}>
        <Link to="/whitepaper">
         Personal Vault
        </Link>
    </Card>

    <Card style={{display:'flex', height:'100%', width:'33.3333%'}}>
        <Link to="/whitepaper">
         News
        </Link>
    </Card>

    <Card style={{display:'flex', height:'100%', width:'33.3333%'}}>
        <Link to="/whitepaper">
         White paper
        </Link>
    </Card>


    <Card style={{display:'flex', height:'100%', width:'33.3333%'}}>
        <Link to="/whitepaper">
         Test
        </Link>
    </Card>
 
  </div>
  <ScrollBar orientation="horizontal" />
 </ScrollArea>
  )
}

export default NavResources