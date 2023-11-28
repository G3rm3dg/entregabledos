import axios from "axios"
import { useEffect, useState } from "react"
import WeatherContainer from "./components/WeatherContainer"


function App() {

  const [weather, setWeather] = useState(null)

  const success = (pos)=>{
    const {
      coords: {latitude, longitude},
    } = pos
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b93c31e70d9680850e85d61570eefa73&units=metric&lang=sp`)
    .then(({ data }) => setWeather(data))
    .catch((err) => console.log(err))
  }
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])


// para imagenes en el main bg-[url(/)] direcion de el lugar donde está
  return (
    <main className="flex justify-center items-center h-screen bg-cover bg-[url(/images/sunday.jpg)] bg-no-repeat text-black">
      {
          weather ? <WeatherContainer weather={weather}/>: <span>Cargando.....</span>
      
      }
    </main>
  )
}

export default App
