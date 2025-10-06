
'use client';
import Header from "./components/header";
import Footer from "./components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import StaggeredText from "./components/StaggeredText";
import QuotesSection from "./components/QuotesSection";
import Hiswork from "./components/hiswork";

export default function HomePage() {
  return (
    <>
    <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/magritte26.jpg')" }}>

      <Header />

    
      <section className="flex items-center justify-start min-h-[90vh] px-6 md:px-24 text-left">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl ml-0 md:ml-12"
        >
          <h2 className="text-2xl md:text-[36px] text-[#186243] font-medium mb-4 tracking-wide">
            The Poetry of the Ordinary
          </h2>
          <h1 className="text-4xl md:text-[56px] font-bold text-[#186243] mb-6 leading-tight">
            René Magritte
          </h1>
          <p className="text-xl md:text-[20px] text-gray-700 mb-10 font-light">
            A Belgian surrealist who transformed everyday objects into visions of mystery and imagination.
          </p>

       
          <div className="flex flex-col md:flex-row gap-4">
            <CTAButton href="/gallery" label="Explore Gallery" />
            <CTAButton href="/biography" label="Biography" />
          </div>
        </motion.div>
      </section>
      
    <section
  className="relative min-h-[100vh] px-6 md:px-24 py-24 bg-[url('/images/bg3.jpg')] bg-cover bg-center flex items-center justify-center"
>
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 2 }}
    className="flex flex-col md:flex-row gap-12 items-center max-w-6xl"
  >
    <motion.img
      src="/images/magritte30.jpg"
      alt="René Magritte"
      className="w-[500px] rounded-2xl shadow-2xl"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    />

    <div className="flex-1 text-[#186243]">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">About Magritte</h2>
      <StaggeredText
        lines={[
         "René François Ghislain Magritte (French: [ʁəne fʁɑ̃swa ɡilɛ̃ maɡʁit]; 21 November 1898 – 15 August 1967) was a Belgian surrealist artist known for his depictions of familiar objects in unfamiliar, unexpected contexts, which often provoked questions about the nature and boundaries of reality and representation. His imagery has influenced pop art, minimalist art, and conceptual art."
        ]}
      />
    </div>
  </motion.div>
</section>

<div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute -inset-4.5 -z-10 bg-cover bg-center blur-xs"
        style={{ backgroundImage: "url('/images/bg3.jpg')" }}
      />
    <QuotesSection/>
    <Hiswork/>

      <Footer />
      </div>
    </div>
    </>
  );
}


function CTAButton({ href, label }) {
  return (
    <Link href={href}>
      <div className="inline-flex items-center gap-3 px-6 py-2 bg-[#186243] text-white rounded-full text-base md:text-lg font-medium hover:scale-105 transition-all">
        <span className="tracking-wide font-normal">{label}</span>
        <span className="w-6 h-6 flex items-center justify-center bg-white text-[#186243] rounded-full">
          <ArrowRight size={16} strokeWidth={2.5} />
        </span>
      </div>
    </Link>

  
  );
}