import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() =>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(`https:api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7aa2b960ec0010c47e78e236df746402
`)
        .then((response) => response.json())
        .then((data)=> setWeather(data));
        // .then((data) => console.log(data));
      })
    }
  },[])

  return (
   <div>
    {
      weather ? (
        <div>
         <h2>Current Weather</h2>
            <p>Tempreature : {weather.main.temp}</p>
            <p>Tempreature : {weather.weather[0].description}</p>
        </div>
      ) : <p>
        Looding....
      </p>
    }
   </div>
  )
}

export default App
