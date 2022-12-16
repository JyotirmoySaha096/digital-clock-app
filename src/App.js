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
  
  const handleOnClick = () => {

  }

  return (
    <>
    <div className="container">
      <h3>A SIMPLE DIGITAL CLOCK</h3>
      <h1>{currTime}</h1>
      <h2>{currDate}</h2>
      <button className='btn' onClick={handleOnClick}>Switch to military time format.</button>
    </div>
    </>
  );
}

export default App;
