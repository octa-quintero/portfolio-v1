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

  // Obtener la hora actual y las horas de salida y puesta del sol en la zona horaria local
  const currentTime = new Date(weather.dt * 1000);
  const sunriseTime = new Date(weather.sys.sunrise * 1000);
  const sunsetTime = new Date(weather.sys.sunset * 1000);

  // Determina si es de día o de noche
  const isDaytime = currentTime >= sunriseTime && currentTime <= sunsetTime;

  // Establecer la imagen de fondo en función del día o la noche
  const backgroundImage = isDaytime ? '/sun.webp' : '/mon.webp';

  return (
    <div
      className={`${background} grid outline-slate-50 relative rounded-2xl transition col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan} `}
    >
      {weather && (
        <section className="flex justify-between relative place-items-center">
          <div className="flex flex-col items-start text-white w-full pl-10 pr-4">
            {/* Contenedor de grados e icono */}
            <div className="flex items-center">
              <h2 className="text-7xl font-semibold">{gradeCelsius(weather.main.temp)}°</h2>
              {/* Icono al lado de los grados */}
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}  // Usa el código del icono desde la API
                alt="Weather icon"
                className="w-20 h-20"  // Ajuste de tamaño y margen
              />
            </div>

            {/* Descripción del clima (nublado, despejado, etc.) */}
            <p className="text-3xl font-medium capitalize">{weather.weather[0].description}</p>

            {/* Hora con AM/PM */}
            <p className="text-xl font-thin">
              {new Date(weather.dt * 1000).toLocaleTimeString('es-ES', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,  // Habilita AM/PM
              })}
            </p>

            {/* Ubicación */}
            <h5 className="text-xl font-thin">
              {weather.name}, {weather.sys.country}
            </h5>
          </div>

          <div
            className="relative h-full bg-cover bg-no-repeat bg-center rounded-2xl w-full"  // Añadido 'rounded-2xl' para aplicar los bordes redondeados
            style={{
              backgroundImage: `url(${backgroundImage})`,  // Cambia la imagen de fondo según el día o la noche
              backgroundPosition: 'center', // Centra la imagen
              backgroundSize: 'cover',  // Asegura que la imagen cubra completamente el contenedor
              WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
              maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
            }}
          />
        </section>
      )}
    </div>
  );
}
