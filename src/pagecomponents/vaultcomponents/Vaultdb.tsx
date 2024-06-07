import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useEffect, useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ring2 } from 'ldrs'
ring2.register()

interface UserData {
  CATEGORY: string;
  COST: string;
  QUANTITY: string;
  STORAGE: string;
  DATE: string;
}

function Vaultdb() {

  const [loading, setLoading] = useState(true);

  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbxnWZtyX1SoYNFR7T76at6hxpLAuKoyHhoQMikeFsFaa42uKdRDvIDsbLYhB9wTn0DN/exec')
      .then(response => response.json())
      .then(jsonData => {
        const dataArray = jsonData.data || [];
        setData(dataArray);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleSheetClick = (index: number) => { 
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
 
  <Card style={{ width:'100%', marginTop:'20px'}}> 

{loading && (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px', paddingBottom: '100px' }}>
          <l-ring-2
            size="40"
            stroke="5"
            stroke-length="0.25"
            bg-opacity="0.1"
            speed="0.8"
            color="white"
          ></l-ring-2>
        </div>
      )}

{data.map((item, index) => (
  <>
  <div key={index} className="hover:bg-primary" onClick={() => handleSheetClick(index)}>
    
    <div style={{ display: 'flex', padding: '10px', paddingTop: '20px', paddingBottom: '20px', alignItems: 'center' }}>
      <div style={{ justifyContent: 'flex-start' }}>
        <div style={{marginLeft:'10px'}}>
        <Sheet open={openIndex === index} >
  <SheetTrigger>{item.CATEGORY}</SheetTrigger>
  <SheetContent style={{paddingLeft:'25px'}}>
    <SheetHeader>
      <SheetTitle style={{margin:'auto'}} className="select-none">Asset Purchase</SheetTitle>
      <SheetDescription style={{margin:'auto', paddingTop:'50px', paddingBottom:'60px'}}>
      <h1 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-5xl text-white select-none">
      {item.QUANTITY}
          </h1>
      </SheetDescription>
    </SheetHeader>

    <Card style={{background: 'black'}}>
  
        <div style={{display:'flex', padding:'10px', paddingTop:'20px', paddingBottom:'20px', alignItems:'center'}}>
         <div style={{color:'white', marginLeft:'15px'}} className="select-none">
         Category
          <br/>
          <p className="text-gray-400 select-none">{item.CATEGORY}</p>
          </div>
        </div>
          
          <div style={{ paddingRight: '20px', paddingLeft:'20px'}}>
          <Separator  className="bg-primary"/>
          </div>

          <div style={{display:'flex', padding:'10px', paddingTop:'20px', paddingBottom:'20px', alignItems:'center'}}>
         <div style={{color:'white', marginLeft:'15px'}} className="select-none">
         Cost Basis
          <br/>
          <p className="text-gray-400 select-none">{item.COST}</p>
          </div>
        </div>
          
          <div style={{ paddingRight: '20px', paddingLeft:'20px'}}>
          <Separator  className="bg-primary"/>
          </div>

          <div style={{display:'flex', padding:'10px', paddingTop:'20px', paddingBottom:'20px', alignItems:'center'}}>
         <div style={{color:'white', marginLeft:'15px'}} className="select-none">
         Total Quantity
          <br/>
          <p className="text-gray-400 select-none">{item.QUANTITY}</p>
          </div>
        </div>
          
          <div style={{ paddingRight: '20px', paddingLeft:'20px'}}>
          <Separator  className="bg-primary"/>
          </div>

          <div style={{display:'flex', padding:'10px', paddingTop:'20px', paddingBottom:'20px', alignItems:'center'}}>
         <div style={{color:'white', marginLeft:'15px'}} className="select-none">
          Storage Method
          <br/>
          <p className="text-gray-400 select-none">{item.STORAGE}</p>
          </div>
        </div>
          
          <div style={{ paddingRight: '20px', paddingLeft:'20px'}}>
          <Separator  className="bg-primary"/>
          </div>

          <div style={{display:'flex', padding:'10px', paddingTop:'20px', paddingBottom:'20px', alignItems:'center'}}>
         <div style={{color:'white', marginLeft:'15px'}} className="select-none">
          Date Acquired
          <br/>
          <p className="text-gray-400 select-none">{item.DATE}</p>
          </div>
        </div>
    </Card>

  </SheetContent>
        </Sheet>
</div>
        <div className="text-gray-400" style={{marginLeft:'10px'}}>{item.QUANTITY}</div>
      </div>
      <div style={{ marginLeft: 'auto', marginRight:'10px'}}>{item.COST}</div>  
    </div> 
      <div style={{marginRight:'20px', marginLeft:'20px'}}>  
         <Separator className="bg-primary" />
       </div>

  </div>
  </>
))}


</Card>



  );
}  

export default Vaultdb;