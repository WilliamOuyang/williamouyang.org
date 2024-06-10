
import { useEffect, useState } from "react";
import { ring2 } from 'ldrs'
ring2.register()

interface UserData {
  TIMESTAMP: string,
  TIME: string,
  EVENT: string,
  ONE: string,
  TWO: string,
  THREE: string,
            FOUR: string,
            FIVE: string,
            SIX: string,
            SEVEN: string,
            EIGHT: string,
            NINE: string,
            TEN: string,
            ELEVEN: string,
            TWELVE: string,
            THIRTEEN: string,
            FOURTEEN: string,
            FIFTEEN: string,
            SIXTEEN: string,
            SEVENTEEN: string,
            EIGHTEEN: string,
            NINETEEN: string,
            TWENTY: string,
            TWENTYONE: string,
            TWENTYTWO: string,
            TWENTYTHREE: string,
            TWENTYFOUR: string,
            TWENTYFIVE: string,
            TWENTYSIX: string,
            TWENTYSEVEN: string,
            TWENTYEIGHT: string,
            TWENTYNINE: string,
            THIRTY: string,
            THIRTYONE: string,
            THIRTYTWO: string,
            THIRTYTHREE: string,
            THIRTYFOUR: string,
            THIRTYFIVE: string,
            THIRTYSIX: string,
            THIRTYSEVEN: string,
            THIRTYEIGHT: string,
            THIRTYNINE: string,
            FORTY: string,
            FORTYONE: string,
            FORTYTWO: string,
            FORTYTHREE: string,
            FORTYFOUR: string,
            FORTYFIVE: string,
            FORTYSIX: string,
            FORTYSEVEN: string,
            FORTYEIGHT: string,
            FORTYNINE: string,
            FIFTY: string,
            FIFTYONE: string,
            FIFTYTWO: string,
            FIFTYTHREE: string,
            FIFTYFOUR: string,
            FIFTYFIVE: string,
            FIFTYSIX: string,
            FIFTYSEVEN: string,
            FIFTYEIGHT: string,
            FIFTYNINE: string,
            SIXTY: string,
            SIXTYONE: string,
            SIXTYTWO: string,
            SIXTYTHREE: string,
            SIXTYFOUR: string,
            SIXTYFIVE: string,
            SIXTYSIX: string,
            SIXTYSEVEN: string,
            SIXTYEIGHT: string,
            SIXTYNINE: string,
            SEVENTY: string,
            SEVENTYONE: string,
            SEVENTYTWO: string,
            SEVENTYTHREE: string,
            SEVENTYFOUR: string,
            SEVENTYFIVE: string,
            SEVENTYSIX: string,
            SEVENTYSEVEN: string,
            SEVENTYEIGHT: string,
            SEVENTYNINE: string,
            EIGHTY: string,
            EIGHTYONE: string,
            EIGHTYTWO: string,
            EIGHTYTHREE: string,
            EIGHTYFOUR: string,
            EIGHTYFIVE: string,
            EIGHTYSIX: string,
            EIGHTYSEVEN: string,
            EIGHTYEIGHT: string,
            EIGHTYNINE: string,
            NINETY: string,
            NINETYONE: string,
            NINETYTWO: string,
            NINETYTHREE: string,
            NINETYFOUR: string,
            NINETYFIVE: string,
            NINETYSIX: string,
}

const CurrentTask = () => {

  const [data, setData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=_zhstUaNFBsM91NwW-ftExAiDmxVALwvD34-xZhDCBUHJr-WPokvKRRy_KtVhn8Ua2BNsXpLBVu2azrLs2jBLC1XPDWoZTQDm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnImmGR4A1-ZB1BerYHFZodwq_Y5PXLthbfAAA4ctU3Oz3O7cHOdhT7KarRKMlEoUT1ld2mZbrgwbjQGsoLXi0ah-t3vIGzZq5Q&lib=MKUgBByiu_EfeJEGrj4-xHztxprFv1kLI')
      .then(response => response.json())
      .then(jsonData => {
        const dataArray = jsonData.data || [];
        setData(dataArray);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const [time, setTime] = useState<Date>(new Date());
   useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div>
      
      {loading && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
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

{data.map((item) => (

<h2 className="text-2xl font-semibold">
      <div className={`${hours === 0 && minutes <=29 && seconds <=59 ? '' : 'hidden'}`}>{item.TWO}</div>      
      <div className={`${hours === 0 && minutes >= 30 && minutes <= 59 && seconds <=59 ? '' : 'hidden'}`}>{item.FOUR}</div>
      <div className={`${hours === 1 && minutes <=29 && seconds <=59 ? '' : 'hidden'}`}>{item.SIX}</div>
      <div className={`${hours === 1 && minutes >= 30 && minutes <= 59 && seconds <=59 ? '' : 'hidden'}`}>  {item.EIGHT}</div>
      <div className={`${hours === 2 && minutes <=29 && seconds <=59 ? '' : 'hidden'}`}>{item.TEN}</div>
      <div className={`${hours === 2 && minutes >= 30 && minutes <= 59 && seconds <=59 ? '' : 'hidden'}`}>{item.TWELVE} </div>
      <div className={`${hours === 3 && minutes <=29 && seconds <=59 ? '' : 'hidden'}`}>{item.FOURTEEN}</div>
      <div className={`${hours === 3 && minutes >= 30 && minutes <= 59 && seconds <=59 ? '' : 'hidden'}`}>{item.SIXTEEN}</div>
      <div className={`${hours === 4 && minutes <=29 && seconds <=59 ? '' : 'hidden'}`}>{item.EIGHTEEN}</div>
      <div className={`${hours === 4 && minutes >= 30 && minutes <= 59 && seconds <=59 ? '' : 'hidden'}`}> {item.TWENTY}</div>
      <div className={`${hours === 5 && minutes <=29 && seconds <=59 ? '' : 'hidden'}`}>{item.TWENTYTWO}</div>
      <div className={`${hours === 5 && minutes >= 30 && minutes <= 59 && seconds <=59 ? '' : 'hidden'}`}>{item.TWENTYFOUR}</div>
      <div className={`${hours === 6 && minutes <=29 && seconds <=59 ? '' : 'hidden'}`}>{item.TWENTYSIX}</div>
      <div className={`${hours === 6 && minutes >= 30 && minutes <= 59 && seconds <=59 ? '' : 'hidden'}`}> {item.TWENTYEIGHT}</div>
      <div className={`${hours === 7 && minutes <=29 && seconds <=59 ? '' : 'hidden'}`}>{item.THIRTY}</div>
      <div className={`${hours === 7 && minutes >= 30 && minutes <= 59 && seconds <=59 ? '' : 'hidden'}`}> {item.THIRTYTWO}</div>
      <div className={`${hours === 8 && minutes <=29 && seconds <=59 ? '' : 'hidden'}`}>{item.THIRTYFOUR}</div>
      <div className={`${hours === 8 && minutes >= 30 && minutes <= 59 && seconds <=59 ? '' : 'hidden'}`}>  {item.THIRTYSIX}</div>
      <div className={`${hours === 9 && minutes <=29 && seconds <=59 ? '' : 'hidden'}`}>{item.THIRTYEIGHT}</div>
      <div className={`${hours === 9 && minutes >= 30 && minutes <= 59 && seconds <=59 ? '' : 'hidden'}`}> {item.FORTY}</div>
      <div className={`${hours === 10 && minutes <=29 && seconds <=59 ? '' : 'hidden'}`}>{item.FORTYTWO}</div>
      <div className={`${hours === 10 && minutes >= 30 && minutes <= 59 && seconds <=59 ? '' : 'hidden'}`}> {item.FORTYFOUR}</div>
      <div className={`${hours === 11 && minutes <=29 && seconds <=59 ? '' : 'hidden'}`}>{item.FORTYSIX}</div>
      <div className={`${hours === 11 && minutes >= 30 && minutes <= 59 && seconds <=59 ? '' : 'hidden'}`}>  {item.FORTYEIGHT}</div>
      <div className={`${hours === 12 && minutes <=29 && seconds <=59 ? '' : 'hidden'}`}>{item.FIFTY}</div>    
      <div className={`${hours === 12 && minutes >= 30 && minutes <= 59 && seconds <=59 ? '' : 'hidden'}`}> {item.FIFTYTWO}</div>
      <div className={`${hours === 13 && minutes <=29 && seconds <=59 ? '' : 'hidden'}`}>{item.FIFTYFOUR}</div>
      <div className={`${hours === 13 && minutes >= 30 && minutes <= 59 && seconds <=59 ? '' : 'hidden'}`}>  {item.FIFTYSIX}</div>
      <div className={`${hours === 14 && minutes <=29 && seconds <=59 ? '' : 'hidden'}`}>{item.FIFTYEIGHT}</div>
      <div className={`${hours === 14 && minutes >= 30 && minutes <= 59 && seconds <=59 ? '' : 'hidden'}`}>{item.SIXTY}</div>
      <div className={`${hours === 15 && minutes <=29 && seconds <=59 ? '' : 'hidden'}`}>{item.SIXTYTWO}</div>
      <div className={`${hours === 15 && minutes >= 30 && minutes <= 59 && seconds <=59 ? '' : 'hidden'}`}>{item.SIXTYFOUR}</div>  
      <div className={`${hours === 16 && minutes <=29 && seconds <=59 ? '' : 'hidden'}`}>{item.SIXTYSIX}</div>
      <div className={`${hours === 16 && minutes >= 30 && minutes <= 59 && seconds <=59 ? '' : 'hidden'}`}>  {item.SIXTYEIGHT}</div>
      <div className={`${hours === 17 && minutes <=29 && seconds <=59 ? '' : 'hidden'}`}>{item.SEVENTY}</div>
      <div className={`${hours === 17 && minutes >= 30 && minutes <= 59 && seconds <=59 ? '' : 'hidden'}`}> {item.SEVENTYTWO}</div>
      <div className={`${hours === 18 && minutes <=29 && seconds <=59 ? '' : 'hidden'}`}>{item.SEVENTYFOUR}</div>
      <div className={`${hours === 18 && minutes >= 30 && minutes <= 59 && seconds <=59 ? '' : 'hidden'}`}> {item.SEVENTYSIX} </div>
      <div className={`${hours === 19 && minutes <=29 && seconds <=59 ? '' : 'hidden'}`}>{item.SEVENTYEIGHT}</div>
      <div className={`${hours === 19 && minutes >= 30 && minutes <= 59 && seconds <=59 ? '' : 'hidden'}`}> {item.EIGHTY}</div>
      <div className={`${hours === 20 && minutes <=29 && seconds <=59 ? '' : 'hidden'}`}>{item.EIGHTYTWO}</div>
      <div className={`${hours === 20 && minutes >= 30 && minutes <= 59 && seconds <=59 ? '' : 'hidden'}`}> {item.EIGHTYFOUR}</div>
      <div className={`${hours === 21 && minutes <=29 && seconds <=59 ? '' : 'hidden'}`}>{item.EIGHTYSIX} </div>
      <div className={`${hours === 21 && minutes >= 30 && minutes <= 59 && seconds <=59 ? '' : 'hidden'}`}> {item.EIGHTYEIGHT} </div>
      <div className={`${hours === 22 && minutes <=29 && seconds <=59 ? '' : 'hidden'}`}>{item.NINETY}</div>
      <div className={`${hours === 22 && minutes >= 30 && minutes <= 59 && seconds <=59 ? '' : 'hidden'}`}> {item.NINETYTWO}</div>
      <div className={`${hours === 23 && minutes <=29 && seconds <=59 ? '' : 'hidden'}`}>{item.NINETYFOUR}</div>
      <div className={`${hours === 23 && minutes >= 30 && minutes <= 59 && seconds <=59 ? '' : 'hidden'}`}> {item.NINETYSIX} </div>    
    </h2>
))}
      </div>
  )
}

export default CurrentTask