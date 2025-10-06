'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Biography", path: "/biography" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/20 backdrop-blur-lg border-b border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] rounded-b-xl">
      <div className="relative flex items-center justify-center px-6 py-3">
        
   
        <div className="absolute top-0 left-0 w-full h-1 bg-white/30 blur-sm rounded-full" />

      
        <nav className="absolute left-6 flex gap-6 text-xl text-[#186243] font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className="relative pb-1 group transition duration-300 hover:text-[#145232]"
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-[#186243] transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </Link>
            );
          })}
        </nav>

      
        <div className="w-full text-[#186243] text-lg font-bold tracking-tight text-right md:text-center">
          René Magritte
        </div>
      </div>
    </header>
  );
}