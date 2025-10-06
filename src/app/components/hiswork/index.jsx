"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

const artworks = [
  { src: "/images/magritte12 1.png", title: "The Lovers Mask" },
  { src: "/images/magritte18 1.png", title: "The Son of Man" },
  { src: "/images/magritte19 1.png", title: "The Listening Room" },
  { src: "/images/magritte17 2.png", title: "Man with Bird" },
  { src: "/images/magritte24 2.png", title: "Golconda" },
{ src: "/images/magritte5.jpg", title: "The Treachery of Images" },
    { src: "/images/magritte7.jpg", title: "The Human Condition" },
    { src: "/images/magritte8.jpg", title: "The Menaced Assassin" },

    { src: "/images/magritte13.jpg", title: "The Blank Signature" },
    { src: "/images/magritte14.jpg", title: "The Alarm Clock" },
];

export default function HisWork() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % artworks.length);
    }, 2500); 
    return () => clearInterval(interval);
  }, []);

  return (
     <div className="relative h-[65vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute -inset-3 bg-emerald-950 blur-xl"/>
    
      <div className="relative z-10 w-full h-full flex flex-col items-center">
        <div className="flex items-center justify-center h-[40%]">
      <h2 className="text-3xl font-bold text-[#d7e0dc]">His Work</h2>
    </div>

      <div
        ref={containerRef}
        className="flex gap-8 transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(calc(50vw - ${currentIndex * 240 + 140}px))`,
        }}
      >
        {artworks.map((art, i) => {
          const isActive = i === currentIndex;
          return (
            <div
              key={i}
              className={`flex-shrink-0 transition-all duration-700 ease-in-out ${
                isActive ? "scale-100 z-10" : "scale-80 opacity-60"
              }`}
            >
             <div className="w-[280px] h-[400px] flex items-center justify-center">
            <Image
                src={art.src}
                alt={art.title}
                width={280}
                height={400}
                className="rounded-2xl border-[6px] border-amber-50 object-contain"
            />
            </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}
