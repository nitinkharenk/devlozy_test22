"use client";
import React, { useEffect, useRef } from 'react';

interface ExtractorProps {
  imageUrl: string;
  onDominantColorExtracted: (color: string) => void;
}

const loadImage = (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // To avoid CORS issues
    img.onload = () => resolve(img);
    img.onerror = (error) => reject(error);
    img.src = url;
  });
};

const rgbToHex = (r: number, g: number, b: number): string => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

const Extractor: React.FC<ExtractorProps> = ({ imageUrl, onDominantColorExtracted }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const extractDominantColor = async () => {
      try {
        const img = await loadImage(imageUrl);
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          throw new Error("Could not get canvas context");
        }

        // Set canvas size to image size
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the image on the canvas
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // Get image data
        const imageData = ctx.getImageData(0, 0, img.width, img.height);
        const data = imageData.data;

        // Process pixels to find the dominant color
        const colorCounts: Record<string, number> = {};
        const tileSize = 10; // You can adjust this value

        for (let y = 0; y < img.height; y += tileSize) {
          for (let x = 0; x < img.width; x += tileSize) {
            const index = (y * img.width + x) * 4;
            const r = data[index];
            const g = data[index + 1];
            const b = data[index + 2];

            const hex = rgbToHex(r, g, b);

            if (colorCounts[hex]) {
              colorCounts[hex]++;
            } else {
              colorCounts[hex] = 1;
            }
          }
        }

        // Find the most frequent color
        let maxCount = 0;
        let dominant = '';
        for (const color in colorCounts) {
          if (colorCounts[color] > maxCount) {
            maxCount = colorCounts[color];
            dominant = color;
          }
        }

        onDominantColorExtracted(dominant);
      } catch (error) {
        console.error("Error loading image", error);
      }
    };

    extractDominantColor();
  }, [imageUrl, onDominantColorExtracted]);

  return <canvas ref={canvasRef} style={{ display: 'none' }} />;
};

export default Extractor;
