// components/WordList.tsx
import React from 'react';

interface WordListProps {
  text: string;
}

const WordList: React.FC<WordListProps> = ({ text }) => {
  const words = text.split(', ');

  return (
    <div>
      {words.map((word, index) => (
        
        <div key={index}>
            <div  className='flex mx-4'>
                <h1>{word} </h1>
                </div>
        </div>
      ))}
    </div>
  );
};

export default WordList;
