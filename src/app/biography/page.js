'use client'

import { motion } from "framer-motion";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Image from "next/image";
import Link from "next/link";

export default function BiographyPage() {
  const bioData = [
    {
      title: "Early Life",
      image: "/images/magritte29.png",
      link: "/biography/earlylife",
    },
    {
      title: "Art Journey",
      image: "/images/magritte30.jpg",
      link: "/biography/artjourney",
    },
    {
      title: "Late Period",
      image: "/images/magritte23.jpg",
      link: "/biography/lateperiod",
    },
  ];

  return (
    <div>
      <div className="w-full min-h-screen bg-cover bg-center bg-[#c1c6c0]">
        <Header />

        <section className="min-h-[90vh] px-6 md:px-24 py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#186243] mb-12">
            Biography
          </h1>

       
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap1 px-8 md:px-1">
            {bioData.map((item) => (
              <Link key={item.title} href={item.link} passHref>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-[300px] md:h-[360px] lg:h-[380px] 
                             bg-white/60 backdrop-blur-md rounded-xl p-4 
                             flex flex-col items-center justify-between 
                             transition-all shadow-lg"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={240}
                    height={220}
                    className="rounded-lg object-cover h-[220px] w-full"
                  />
                  <p className="text-[#186243] mt-4 text-2xl font-medium">
                    {item.title}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
