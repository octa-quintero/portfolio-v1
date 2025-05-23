/* eslint-disable @next/next/no-img-element */
import { gradeCelsius } from "@/lib/conversions";
import { CardTextInterface } from "./card-text";

interface WeatherElement {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Weather {
  weather: WeatherElement[];
  main: { temp: number };
  visibility: number;
  dt: number;
  sys: { country: string, sunrise: number, sunset: number };  // Incluye sunrise y sunset
  id: number;
  name: string;
  timezone: number;
}

interface CardTimeInterface extends CardTextInterface {
  city: string;
}

export default async function CardTime({
  background,
  colStart,
  colSpan,
  rowStart,
  rowSpan,
  city,
}: CardTimeInterface) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_APIKEY}&lang=es`
  );
  const weather: Weather = await response.json();

  const currentTime = new Date(weather.dt * 1000);
  const sunriseTime = new Date(weather.sys.sunrise * 1000);
  const sunsetTime = new Date(weather.sys.sunset * 1000);

  // Determina si es de día o de noche
  const isDaytime = currentTime >= sunriseTime && currentTime <= sunsetTime;

  // Establecer la imagen de fondo en función del día o la noche
  const backgroundImage = isDaytime ? '/sun.webp' : '/mon.webp';

  return (
<div
  className={`${background} grid outline-slate-50 relative rounded-2xl transition col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan}`}
>
  {weather && (
    <section className="flex justify-between relative place-items-center max-sm:h-[118px]">
      <div className="flex flex-col items-start text-white pl-10 max-sm:pl-5 max-sm:w-1/2">
        {/* Contenedor de grados e icono */}
        <div className="flex items-center">
          <h2 className="text-7xl font-semibold max-sm:text-2xl">{gradeCelsius(weather.main.temp)}°</h2>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather icon"
            className="w-50 h-20 max-sm:w-10 max-sm:h-auto"
          />
        </div>

        <p className="text-3xl font-medium capitalize max-sm:text-sm">{weather.weather[0].description}</p>
        <p className="text-xl font-thin max-sm:text-xs">
          {new Date(weather.dt * 1000).toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          })}
        </p>
        <h5 className="text-xl font-thin max-sm:text-lg">
          {weather.name}, {weather.sys.country}
        </h5>
      </div>

      <div
        className="relative h-full bg-cover bg-no-repeat bg-center rounded-2xl w-full max-sm:w-1/2"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
        }}
      />
    </section>
  )}
</div>

  );
}
