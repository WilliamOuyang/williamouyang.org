import CurrentTask from '@/pagecomponents/homecomponents/CurrentTask';
import LoginButton from '@/pagecomponents/shared/LoginButton';

import Navbar2 from '@/pagecomponents/shared/Navbar2'
import { useEffect, useState } from 'react';

const Home = () => {

// textdate below
const currentDate = new Date();
  const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
  const month = currentDate.toLocaleDateString('en-US', { month: 'short' });
  const year = currentDate.toLocaleDateString('en-US', { year: 'numeric' });
  const dayOfMonth = currentDate.getDate();
  const textDate = `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
// textdate above

  // regular time below
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

 const minutesStr: string = minutes.toString().padStart(2, '0');
 const secondsStr: string = seconds.toString().padStart(2, '0');
 const adjustedHours: number = hours === 0 ? 12 : (hours > 12 ? hours - 12 : hours);
 const hourStr: string = adjustedHours.toString().padStart(2, '0');
 const amPmTag: string = hours >= 12 ? "PM" : "AM";
// regular time above

  //timerfunction 
  const [time2, setTime2] = useState<number>(() => {
    const now = new Date();
    return 1800 - (now.getMinutes() % 30) * 60 - now.getSeconds();
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime2(prevTime2 => prevTime2 === 0 ? 1800 : prevTime2 - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes2 = Math.floor(time2 / 60);
  const seconds2 = time2 % 60;
  //timer

  useEffect(() => {
    document.title = "Home | williamouyang.org"
  }, []);

  return (
    <div>
      <LoginButton/>
      <Navbar2/>

      <div className="flex w-full h-screen " style={{display:'flex', zIndex: 0, justifyContent: 'center', alignItems:'center'}}>
    
    <div className="text-center">

      <span className="font-mono font-medium text-5xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl select-none text-center">{hourStr}:{minutesStr}:{secondsStr}</span> {amPmTag}
       
        <h1 className="text-2xl font-light select-none text-center">   
      {textDate}
     
        </h1>
        <h3 className="text-2xl sm:text-3x1 md:text-4x1 xl:text-5x1 2xl:text-6x1 font-light select-none text-center ">
      Current Task:  <CurrentTask/>
    
      </h3>
      <h3 className="text-2xl 2xl:text-3xl font-light select-none text-center"> 
        
      Task Timer:  <span className="font-mono">{minutes2 < 10 ? '0' + minutes2 : minutes2}:{seconds2 < 10 ? '0' + seconds2 : seconds2}</span>
      
      </h3>
    </div>
    </div>
    </div>
  )
}

export default Home