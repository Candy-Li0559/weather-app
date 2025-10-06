"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const quotes = [
'"Art evokes the mystery without which the world would not exist."',
  '“Everything we see hides another thing.”',
  '"The present reeks of the past and the odor of the future."'
];

export default function QuoteCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      {quotes.map((quote, i) => {
        const isActive = i === activeIndex;
        return (
          <motion.p
            key={quote}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isActive ? 1 : 0.3,
              scale: isActive ? 1.2 : 1,
              y: isActive ? 0 : i < activeIndex ? -40 : 40,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`text-center font-light my-2 transition-all duration-500 ${
              isActive
                ? "text-[32px] md:text-[48px]"
                : "text-[18px] md:text-[24px]"
            } text-[#186243]`}
          >
            {quote}
          </motion.p>
        );
      })}
    </div>
  );
}
