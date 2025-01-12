import Image from "next/image";
import Link from "next/link"; // Ya no necesitas importar <a> ni usarla
import { FaDiscord } from "react-icons/fa";

interface CardDiscordInterface {
  userId: string;
  colStart: number;
  colSpan: number;
  rowStart: number;
  rowSpan: number;
  invitationLink: string;
}

export default async function CardDiscord({
  colStart = 1,
  colSpan = 1,
  rowStart = 1,
  rowSpan = 1,
  userId,
  invitationLink,
}: CardDiscordInterface) {
  const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
  const { data } = await response.json();

  const vscodeActivity = data.activities?.find(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (activity: any) => activity.name === "Visual Studio Code"
  );

  const iconColor =
    data.discord_status === "online"
      ? "text-green-500"
      : data.discord_status === "offline"
      ? "text-gray-400"
      : data.discord_status === "dnd"
      ? "text-red-500"
      : data.discord_status === "idle"
      ? "text-orange-500"
      : "text-gray-400";

  return (
    <Link
      href={invitationLink}
      target="_blank"
      className={`group bg-gradient-to-t from-[#1e2124] to-[#2f3136] grid place-items-center outline-slate-50 relative rounded-2xl transition z-50 col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan} overflow-hidden`} 
    >
      {/* Efecto con z-0, asegurando que esté detrás de todos los demás elementos */}
      <span className="absolute inset-0 bg-[#18191c] opacity-0 transition-all duration-500 rounded-full scale-0 group-hover:scale-150 group-hover:opacity-80 z-0" />

      <div className="flex gap-3 items-center relative z-20"> {/* z-20 para que el contenido esté por encima del efecto */}
        <div
          className={`relative flex items-center justify-center rounded-sm ${iconColor} ${
            data.discord_status === "online"
              ? "animate-glowing-green"
              : data.discord_status === "offline"
              ? "animate-glowing-gray"
              : data.discord_status === "dnd"
              ? "animate-glowing-red"
              : data.discord_status === "idle"
              ? "animate-glowing-orange"
              : ""
          }`}
        >
          <FaDiscord
            className={`z-20 text-6xl ${
              data.discord_status === "online"
                ? "drop-shadow-lg text-green-500"
                : data.discord_status === "offline"
                ? "drop-shadow-lg text-gray-500"
                : data.discord_status === "dnd"
                ? "drop-shadow-lg text-red-500"
                : data.discord_status === "idle"
                ? "drop-shadow-lg text-orange-500"
                : "drop-shadow-lg text-gray-400"
            }`}
          />
        </div>

        <div className="text-white text-3xl font-semibold z-20"> {/* z-20 para el texto */}
          <p>
            {data.discord_status === "online"
              ? "Online"
              : data.discord_status === "offline"
              ? "Offline"
              : data.discord_status === "dnd"
              ? "No molestar"
              : data.discord_status === "idle"
              ? "Ausente"
              : "Unknown"}
          </p>
        </div>
      </div>

      {data.discord_status !== "offline" && vscodeActivity ? (
        <section className="absolute bottom-3 flex flex-col text-white mx-4 z-20"> {/* z-20 para la sección de actividad */}
          <p className="text-sm font-bold">Actualmente en:</p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-normal">{vscodeActivity.name}</p>
            <Image
              className="rounded-sl h-7 w-7"
              src={`https://cdn.discordapp.com/app-assets/${vscodeActivity.application_id}/${vscodeActivity.assets.large_image}.png`}
              width={60}
              height={60}
              alt="Visual Studio Code"
            />
          </div>
        </section>
      ) : null}
    </Link>
  );
}
