import React from "react";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Vortex } from "@/components/ui/vortex";
import { GlobeDemo } from "@/components/ui/Globe01";
import { ImagesSliderDemo } from "@/components/ui/TrendingA";



export default function VortexDemo() {
  
  
  const words2 = [
    {
      text: "Explore",
      className: "text-white dark:text-white",
    },
    {
      text: "Top",
      className: "text-white dark:text-white",
    },
    {
      text: "Music",
      className: "text-white dark:text-white",
    },
    {
      text: "Powered by",
      className: "text-white dark:text-white",
    },
    {
      text: "Last Song Only.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <>
    <div className=" mx-auto h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full "
      >
        <div className="flex mt-40 mb-10 flex-col items-center justify-center   ">
          <TypewriterEffectSmooth words={words2}  />
        </div>
        <div className="text-white text-xl text-center lg:w-1/2 mx-4 sm:mx-10 md:mx-20 ">
          <h1>Discover your musical world as we bring together your favorite music services. Connect your listening, watching, and sharing habits seamlessly.</h1>
          <h1>Visualize the listening habits and trends of Last Song Only global community in real-time below.</h1>
        </div>
        
        <button className="bg-slate-800 mt-10 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span>Go explore!</span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </Vortex>
      
    </div>
    <div className="bg-black flex justify-between px-10">
    <div className="w-1/2 h-1/2">
      <GlobeDemo />
      </div>
      <div className="pr-20">
      <ImagesSliderDemo />
      </div>
      
    </div>
    </>
  );
}
