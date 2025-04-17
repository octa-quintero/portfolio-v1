  'use client';

  import { useState, useEffect } from "react";
  import Image from "next/image";
  import Link from "next/link";
  import { FaDiscord } from "react-icons/fa";
  import { useTranslation } from "react-i18next";

  interface CardDiscordInterface {
    userId: string;
    colStart: number;
    colSpan: number;
    rowStart: number;
    rowSpan: number;
    invitationLink: string;
  }

  export default function CardDiscord({
    colStart = 1,
    colSpan = 1,
    rowStart = 1,
    rowSpan = 1,
    userId,
    invitationLink,
  }: CardDiscordInterface) {
    const { t } = useTranslation(); // Hook de traducción
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<any>(null);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
          const result = await response.json();
          setData(result.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      fetchData();
    }, [userId]);

    if (!data) {
      return (
        <div
          className={`bg-gradient-to-t from-[#1e2124] to-[#2f3136] grid place-items-center rounded-2xl col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan} aspect-square`}
        >
          <p className="text-white">Loading...</p>
        </div>
      );
    }

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
  className={`group bg-gradient-to-t from-[#1e2124] to-[#2f3136] grid place-items-center outline-slate-50 relative rounded-2xl transition z-50 col-start-${colStart} col-span-${colSpan} row-start-${rowStart} row-span-${rowSpan} aspect-square overflow-hidden max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center`}
>
  <span className="absolute inset-0 bg-[#18191c] opacity-0 transition-all duration-500 rounded-full scale-0 group-hover:scale-150 group-hover:opacity-80 z-0" />

  <div className="flex gap-3 items-center relative z-20 max-sm:flex-col max-sm:gap-0 max-sm:text-center max-sm:items-center">
    <div
      className={`relative flex items-center justify-center rounded-sm ${iconColor} max-sm:flex-col ${
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
        className={`z-20 text-6xl max-sm:text-4xl ${
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

    <div className="text-white text-3xl font-semibold z-20 max-sm:text-sm max-sm:mt-1">
      <p>
        {data.discord_status === "online"
          ? t("online")
          : data.discord_status === "offline"
          ? t("offline")
          : data.discord_status === "dnd"
          ? t("do_not_disturb")
          : data.discord_status === "idle"
          ? t("idle")
          : t("unknown")}
      </p>
    </div>
  </div>

  {data.discord_status !== "offline" && vscodeActivity ? (
    <section className="absolute bottom-3 flex flex-col text-white mx-1 z-20 max-sm:static max-sm:gap-[0px]">
<p className="relative text-sm font-bold mb-0 max-sm:text-[10px] max-sm:-mb-[8px]">
  {t("currently_in")}:
</p>

<div className="flex items-center gap-2 max-sm:gap-[4px]">
  <p className="text-sm font-normal tracking-tighter whitespace-nowrap max-sm:text-[8px] max-sm:-mt-[0px]">
    {vscodeActivity.name}
  </p>



    <Image
      className="relative rounded-sl h-7 w-7 max-sm:bottom-1 max-sm:w-5 max-sm:h-5"
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
