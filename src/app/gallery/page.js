"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const artworks = [
 
  {
    src: "/images/magritte15.png",
    title: "The Son of Man(1964)",
    description: "Portrays a man in a bowler hat with his face obscured by a floating green apple, questioning identity, visibility, and hidden truths."
  },
    {
    src: "/images/magritte4.png",
    title: "The Empire of Light (1954)",
    description: "Juxtaposes a bright daytime sky with a nighttime street scene, creating a paradox that challenges our sense of time and reality."
  },
  {
    src: "/images/magritte3.png",
    title: "Golconda (1953)",
    description: "Depicts countless men in bowler hats floating in the sky, blending the ordinary with the surreal to reflect anonymity and repetition in modern life."
  },
   {
    src: "/images/magritte16.png",
    title: "The Lovers (1928)",
    description: "Shows two lovers kissing with cloth covering their heads, symbolizing mystery, desire, and the barriers to true intimacy."
  },

];

export default function GalleryScrollPage() {
  const containerRef = useRef(null);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [mouseX, setMouseX] = useState(0);

  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".artwork-section");
      let minDiff = Infinity;
      let active = 0;
      sections.forEach((sec, i) => {
        const rect = sec.getBoundingClientRect();
        const diff = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
        if (diff < minDiff) {
          minDiff = diff;
          active = i;
        }
      });
      setVisibleIndex(active);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const handleMouseMove = (e) => setMouseX(e.clientX);
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#c1c6c0] text-[#186243]">
      <Header />
      <h1 className="text-center m-6 text-3xl md:text-5xl font-semibold text-[#186243] mb-12">
      Gallery
      </h1>
      <div ref={containerRef} className="overflow-hidden">
        {artworks.map((art, i) => {
          const isActive = i === visibleIndex;
          const opacity = isActive ? 1 : 0;
          const translateLeft = isActive ? (mouseX - window.innerWidth / 1.5) * -0.1 : 0;
          const translateRight = isActive ? (mouseX - window.innerWidth / 1.5) * 0.1 : 0;

          return (
            <section
              key={i}
              className="artwork-section h-screen flex items-center justify-center relative"
            >
         
              <Image
                src={art.src}
                alt={art.title}
                width={800}
                height={600}
                className="object-contain max-h-[80vh] w-[65vw] rounded-xl z-10 transition-all duration-700"
                style={{
                  transform: isActive
                    ? `translateX(${(mouseX - window.innerWidth / 2) * 0.01}px) scale(1.05)`
                    : "scale(0.9)",
                  opacity: isActive ? 1 : 0.3
                }}
              />

        
              <div
                className="absolute left-12 top-1/2 transform -translate-y-1/2 w-1/4 text-left text-2xl font-semibold transition-all duration-700"
                style={{
                  opacity,
                  transform: `translateX(${translateLeft}px)`
                }}
              >
                {art.title}
              </div>

      
              <div
                className="absolute right-12 top-1/2 transform -translate-y-1/2 w-1/6 text-left text-lg italic transition-all duration-700"
                style={{
                  opacity,
                  transform: `translateX(${translateRight}px)`
                }}
              >
                {art.description}
              </div>
            </section>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
