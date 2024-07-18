"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play01 } from "@/data/datatrack";

interface YouTubeIdExtractorProps {
  id: number;
  url: string;
  title: string;
  page_count: any;
  description: string;
}

const YouTubeIdExtractor: React.FC<YouTubeIdExtractorProps> = ({
  id,
  url,
  title,
  page_count,
  description,
}) => {
  const [videoId, setVideoId] = useState<string>("");

  useEffect(() => {
    const extractVideoId = (youtubeUrl: string): string => {
      const urlParts = youtubeUrl.split("=");
      return urlParts[1] || "";
    };

    setVideoId(extractVideoId(url));
  }, [url]);
  const miniurl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
    if (isVisible === false) {
      Play01(id);
    }
  };

  return (
    <>
      <div className="flex items-center  w-full hover:bg-gray-500 hover:bg-opacity-5">
        <button
          onClick={handleToggle}
          className=" relative border border-opacity-10 overflow-hidden "
        >
          <svg
            className="h-full w-full p-6 absolute"
            width="50"
            height="50"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="10" fill="white"  />

            <polygon points="7,5 15,10 7,15" fill="black" />
          </svg>
          <Image
            className="aspect-video w-full "
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="Play"
            width={150}
            height={100}
          />
        </button>
        <div className="flex items-center ">
          
        </div>
        <div className="ml-4 text-white">
          <h3 className=" text-xs opacity-70">{description}</h3>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-xs opacity-80"> {page_count || "N/A"}</p>
        </div>
      </div>
      {isVisible && (
        <div className="fixed bottom-4 right-4 text-white  grid">
          <button
            className="justify-self-end drop-shadow-md shadow-black m-2 "
            onClick={handleToggle}
          >
            <Image src="/close.png" alt="Close" width={20} height={20} />
          </button>
          <iframe
            width="460"
            height="259"
            src={miniurl}
            title="Sabrina Carpenter - Espresso (Official Video)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  );
};

export default YouTubeIdExtractor;
