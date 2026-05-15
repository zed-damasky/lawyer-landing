import { cn } from "@/utils/cn";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "О нас", href: "#about" },
  { label: "Стандарты", href: "#standarts" },
  { label: "Этапы работы", href: "#workflow" },
  { label: "Контакты", href: "#contacts" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  //Fix state
  useState(() => {
    const handleScroll = () => setScrolled(window.screenY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });

  /*todo: 
  1. изменение региона, города в зависимости от места нахождения либо выбора пользователя
  2. может смена языка?
  3. 
  */

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-20 transition-colors duration-300",
        scrolled ? "bg-dark/90 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container-custom h-full flex items-center justify-between px-6 md:px-12">
        {/*Logo*/}
        <a
          href="/"
          className="text-white text-xl md:text-2x1 font-light tracking-wide hover:text-primary transition-colors"
        >АДВОКАТЫ В САЛАВАТЕ</a>
        {/*desktop menu*/}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="group relative text-white font-semibold text-base py-1 transition-colors hover:text-primary"
            >
              {label}
              <span className="absolute left-0 bottom-0.5 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/*mobile button */}
        <button
          className="md:hiden text-white p-2 hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Открыть меню"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* mobile menu */}

      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-dark-light/95 backdrop-blur-md py-4 px-6 flex flex-col gap-4 shadow-xl animate-slide-up">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-white font-medium py-2 border-b border-white/10 last:border-0 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
