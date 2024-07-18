"use client";
// components/HeartButton.tsx
// components/HeartButton.tsx
import { useState } from 'react';

const HeartButton: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button
      className="focus:outline-none"
      onClick={() => setIsLiked(!isLiked)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={isLiked ? 'red' : 'white'}
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={`w-12 h-12 transition-colors duration-300 ease-in-out ${
          isLiked ? 'text-red-500' : 'text-gray-500'
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 8c0-2.21 1.79-4 4-4s4 1.79 4 4v.28C12.21 6.79 14 4 16 4s4 1.79 4 4c0 2.89-4.81 6.86-8 9.56C8.81 14.86 4 10.89 4 8z"
        />
      </svg>
    </button>
  );
};

export default HeartButton;
