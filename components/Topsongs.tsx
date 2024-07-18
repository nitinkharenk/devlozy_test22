"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play01 } from '@/data/datatrack';

interface YouTubeIdExtractorProps {
  id: number;
  url: string;
  title: string;
  index: number;
}

const YouTubeIdExtractor: React.FC<YouTubeIdExtractorProps> = ({ id, url ,title, index }) => {
  const [videoId, setVideoId] = useState<string>('');

  useEffect(() => {
    const extractVideoId = (youtubeUrl: string): string => {
      const urlParts = youtubeUrl.split('=');
      return urlParts[1] || '';
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
    
    <div className="z-50 flex items-center p-2 border-b w-full  hover:bg-gray-500 hover:bg-opacity-5">
      <h1 className='font-thin mx-4'>{index + 1}.</h1>
      <button onClick={handleToggle} className="mx-4 p-2 border border-opacity-10 border-black rounded-full">
        <svg
          fill="#000000"
          width="20px"
          height="20px"
          viewBox="-4 -3 24 24"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin"
          className="jam jam-play"
        >
          <path d="M13.82 9.523a.976.976 0 0 0-.324-1.363L3.574 2.128a1.031 1.031 0 0 0-.535-.149c-.56 0-1.013.443-1.013.99V15.03c0 .185.053.366.153.523.296.464.92.606 1.395.317l9.922-6.031c.131-.08.243-.189.325-.317zm.746 1.997l-9.921 6.031c-1.425.867-3.3.44-4.186-.951A2.918 2.918 0 0 1 0 15.03V2.97C0 1.329 1.36 0 3.04 0c.567 0 1.123.155 1.605.448l9.921 6.032c1.425.866 1.862 2.696.975 4.088-.246.386-.58.712-.975.952z" />
        </svg>
      </button>
      <div className='flex items-center overflow-hidden  mx-6 h-10 w-10'>
      <Image className='  scale-200' src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt="Play" width={100} height={100} />
      </div>
      <h3 className='font-bold text-base'>{title}</h3>
      
      </div>
      {isVisible && (
        <div className="fixed bottom-4 right-4 text-white  grid">
          <button className="justify-self-end drop-shadow-md shadow-black m-2 " onClick={handleToggle}>
            <Image src="/close.png" alt="Close" width={20} height={20} />
          </button>
          <iframe
            className="aspect-video"
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
