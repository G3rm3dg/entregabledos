import { useState } from "react";

const WeatherContainer = ({ weather }) => {
  console.log(weather);

  const celsiusToFahrenheit = (tempCelsius) => {
    const tempF = ((tempCelsius * (9/5)) + 32).toFixed(1)
    return tempF
  }

  const [temp, setTemp] = useState(weather.main.temp)

  const handleChangeTemp = () => {
    setTemp ? (celsiusToFahrenheit(weather.main.temp)) : (weather.main.temp)
  }


  return (
    <article className="text-center justify-items-center justify grid gap-5">
      <h2 className="text-4xl">{weather.name}, {weather.sys.country}</h2>

      <div className="text-black grid gap-5 sm:grid sm:grid-cols-[250px_150px]">

        {/* Seccion1: Temoeratura descripcion e imagen*/}
        <section className="bg-white/60 p-3 rounded-xl grid grid-cols-2 items-center">
          <h3 className= "col-span-2 text-2xl">{weather.weather[0].description}</h3>


          <span className="text-4xl">{temp}°C</span>
          

          <div>
            <img className="block mx-auto" 
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
          </div>
        </section>

        {/* Seccion2: adicionales del clima*/}
        <section className="grid grid-cols-3 justify-items-center bg-white/60 p-3 rounded-xl sm:grid sm:grid-cols-1 sm:justify-items-left">
          <div className="flex gap-1">
            <div>
              <img src="/images/wind.png" alt="" />
            </div>
            <span>{weather.wind.speed}m/s</span>
          </div>
          <div className="flex gap-1">
            <div>
              <img src="/images/droplet.png" alt="" />
            </div>
            <span>{weather.main.humidity}%</span>
          </div>
          <div className="flex gap-1">
            <div>
              <img src="/images/world.png" alt="" />
            </div>
            <span>{weather.main.pressure}hPa</span>
          </div>
        </section>
      </div>

      <button onClick={handleChangeTemp} className="bg-white text-blue-600 font-bold py-1 px-4 rounded-full">Cambiar a °F</button>

    </article>
  );
};
export default WeatherContainer;
