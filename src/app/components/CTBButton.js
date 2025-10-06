import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTAButton({ href, label }) {
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