"use client";
import Navee from '@/components/Navee';
import { useUser } from '@clerk/nextjs';

import { useState } from 'react';


const Home: React.FC =  () => {
  const [dominantColor, setDominantColor] = useState<string | null>(null);



  const handleDominantColorExtracted = (color: string) => {
    setDominantColor(color);
  };
  const { user } = useUser();

  return (
    <div>
      
      <Navee imageUrl={user?.imageUrl || "ni"} onDominantColorExtracted={handleDominantColorExtracted} />
      {dominantColor && (
        <div>
          <p>Dominant Color:</p>
          <div style={{ width: '100px', height: '100px', backgroundColor: dominantColor }}></div>
          <p>{dominantColor}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
