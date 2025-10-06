"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const lineVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function StaggeredText({ lines }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="space-y-4 text-2xl leading-relaxed"
    >
      {lines.map((line, idx) => (
        <motion.p key={idx} variants={lineVariant}>
          {line}
        </motion.p>
      ))}
    </motion.div>
  );
}
