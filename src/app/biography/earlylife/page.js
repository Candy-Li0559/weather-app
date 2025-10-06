"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/app/components/header";

export default function EarlyLifePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
  
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/bg3.jpg')" }}
      ></div>

 
      <div className="relative z-10">
        <Header />

       <h1 className="text-3xl lg:text-5xl text-center mt-6 font-semibold text-[#186243] mb-2">
          Biography
      </h1>


        <div className="min-h-[100vh] px-6 md:px-10 py-5 relative">

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute left-4 bottom-4 opacity-10 z-0"
          >
            <Image src="/images/hat-icon.png" alt="icon" width={120} height={120} />
          </motion.div>

          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-[64px] md:text-[96px] text-[#186243] font-light tracking-tight"
          >
            Early Life
          </motion.h1>

   
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-16 flex flex-col lg:flex-row gap-8 items-start"
          >
            <div className="flex gap-4">
              <Image
                src="/images/magritte28.jpg"
                alt="Magritte young"
                width={240}
                height={240}
                className="rounded-lg"
              />
              <Image
                src="/images/magritte29.jpg"
                alt="Magritte with Regina"
                width={240}
                height={240}
                className="rounded-lg"
              />
            </div>

            <p className="max-w-2xl text-gray-700 text-base lg:text-lg font-light leading-relaxed">
              René Magritte was born in Lessines, in the province of Hainaut in Belgium, in 1898.He was the oldest son of Léopold Magritte, a tailor and textile merchant, and Régina (née Bertinchamps), who was a milliner before she got married.
              <br /><br />
              Little is known about Magritte’s early life. He began lessons in drawing in 1910.
            </p>
          </motion.div>

        
          <motion.h2
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 0.7 }}
            transition={{ duration: 2 }}
            className="absolute bottom-8 right-8 text-[100px] md:text-[160px] text-[#186243] font-extralight pointer-events-none select-none"
          >
            Early Life
          </motion.h2>
          
        </div>
      </div>
    </div>
  );
}