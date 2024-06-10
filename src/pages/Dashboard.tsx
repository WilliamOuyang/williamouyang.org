import { useEffect, useState } from "react";
import { ring2 } from 'ldrs'
import Navbar2 from "@/pagecomponents/shared/Navbar2";
ring2.register()

interface UserData {

  SYMBOL: string,
  LAST_PRICE: number,
  
  TODAY_GAIN_LOSS$: number,
  TODAY_GAIN_LOSS_PERCENT: number,
  
  TOTAL_GAIN_LOSS$: number,
  TOTAL_GAIN_LOSS_PERCENT: number,
  
  CURRENT_VALUE: number,
  QUANTITY: number,
  COST_BASIS: number,


}

const Dashboarddb = () => {

  const [data, setData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbzMIGQAV3i7oug7Mid7ItfhyJri7Mc9TQV6g4YsWzkvd74e-T113ZRifjFZpU3xBErz/exec')
      .then(response => response.json())
      .then(jsonData => {
        const dataArray = jsonData.data || [];
        setData(dataArray);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <div style={{marginTop:'100px', padding:'10px'}}>
        <Navbar2/>
      
      {loading && (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px', paddingBottom: '100px' }}>
          <l-ring-2
            size="40"
            stroke="5"
            stroke-length="0.25"
            bg-opacity="0.1"
            speed="0.8"
            color="red"
          ></l-ring-2>
        </div>
      )}
        

           
   
  <h2 className="text-1x1 2xl:text-2xl font-light ">
<table className="table-fixed w-full">

<thead>
<tr>
<th className="border border-foreground">Symbol</th> 
<th className="border border-foreground">Last Price</th> 

<th className="border border-foreground">Today's Gain/Loss</th>
<th className="border border-foreground">Total Gain/Loss</th>

<th className="border border-foreground">Current Value</th>
<th className="border border-foreground">Quantity</th>
<th className="border border-foreground">Cost Basis</th>

</tr>
</thead>

<tbody>

{data.map((item, index) => (
  
          <tr key={index}>


          <td className="border border-foreground">
            {item.SYMBOL}
          
          </td>

          <td className="border border-foreground" style={{textAlign:'center'}}>{item.LAST_PRICE}</td>

          <td className={`border ${item.TODAY_GAIN_LOSS$ == 0 ? 'border-foreground text-white' : item.TODAY_GAIN_LOSS$ < 0 ? 'border-foreground text-red-500' : 'border-foreground text-green-500'}`} style={{textAlign:'center'}}>     
            <h1>{item.TODAY_GAIN_LOSS$}</h1>
            <h1>{item.TODAY_GAIN_LOSS_PERCENT}%</h1>
          </td>


          <td className={`border ${item.TOTAL_GAIN_LOSS$ == 0 ? 'border-foreground text-white' : item.TOTAL_GAIN_LOSS$ < 0 ? 'border-foreground text-red-500' : 'border-foreground text-green-500'}`} style={{textAlign:'center'}}>
            <h1>{item.TOTAL_GAIN_LOSS$}</h1>
            <h1>{item.TOTAL_GAIN_LOSS_PERCENT}%</h1>
          </td>

          <td className="border border-foreground" style={{textAlign:'center'}}>{item.CURRENT_VALUE}</td>
          <td className="border border-foreground" style={{textAlign:'center'}}>{item.QUANTITY}</td>
          <td className="border border-foreground" style={{textAlign:'center'}}>{item.COST_BASIS}</td>
          </tr>

))}

</tbody>
</table>
</h2>







     
      </div>
  )
}

export default Dashboarddb