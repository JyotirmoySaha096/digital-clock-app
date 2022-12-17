import './App.css';
import {useState} from 'react'
const weekdayGenerator = weekday => {
  switch(weekday){
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednessday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Invalid day";
  }
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function App() {
  let date = new Date();
  let weekday = date.getDay();
  let month = months[date.getMonth()];
  let dateDay = date.getDate()+1;
  let year = date.getFullYear();

  // let hours = date.getHours();
  // let minutes = date.getMinutes();
  // let seconds = date.getSeconds();

  let time = new Date().toLocaleTimeString();
  
  let completeDate = weekdayGenerator(weekday) + ", " + month + " " + dateDay + "th " + year;
  
  const[currTime,setCurrTime] = useState(time);

  const [currDate,setCurrDate] = useState(completeDate);

  const [options,setOptions] = useState(true)

const updateTime = () =>{
    time = new Date().toLocaleTimeString();
    setCurrTime(time);
  }
  setInterval(updateTime,1000)

  const updateDate = ()=>{
    weekday = date.getDay();
    month = months[date.getMonth()];
    dateDay = date.getDate()+1;
    year = date.getFullYear();
    let newDate = weekdayGenerator(weekday) + ", " + month + " " + dateDay + "th " + year;
    setCurrDate(newDate)
    console.log(newDate);
  }

  setInterval(updateDate,60000)

  let time24 = new Date().toLocaleTimeString('en-US',{hour12:false})
  const[currTime24,setCurrTime24] = useState(time24);
  const updateTime24 = () =>{
    time24 = new Date().toLocaleTimeString('en-US',{hour12:false});
    setCurrTime24(time24);
  }
  setInterval(updateTime24,1000)
  
  const handleOnClick = () => {
    if(options === true){
      setOptions(false);
    }
    if(options === false){
      setOptions(true)
    }
  }

  return (
    <>
    <div className="container">
      <h3>A SIMPLE DIGITAL CLOCK</h3>
      <h1>{options ? currTime:currTime24}</h1>
      <h2>{currDate}</h2>
      <button className='btn' onClick={handleOnClick}>Switch to {options ? 24 : 12}-hours time format.</button>
    </div>
    </>
  );
}

export default App;
