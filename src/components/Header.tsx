import { motion } from "motion/react";
import { useLanguage } from "./LanguageProvider";
import { Globe, Menu, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { useTheme } from "./ThemeProvider";

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M12 2L12 22" />
        <path d="M12 22C14.5 22 16.5 20 16.5 17.5C16.5 15 14.5 13 12 13" />
        <path d="M12 13C9.5 13 7.5 15 7.5 17.5C7.5 20 9.5 22 12 22" />
        <path d="M12 2C14.5 2 16.5 4 16.5 6.5C16.5 9 14.5 11 12 11" />
        <path d="M12 11C9.5 11 7.5 9 7.5 6.5C7.5 4 9.5 2 12 2" />
      </svg>
      <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent border-2 border-primary" />
    </div>
    <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
      MealPrep <span className="text-primary">Pro</span>
    </span>
  </div>
);

export function Header({ onOpenModal }: { onOpenModal: (type: "subscribe" | "consult") => void }) {
  const { t, language, setLanguage, dir } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 border-b",
        isScrolled 
          ? "bg-background/80 py-3 shadow-sm backdrop-blur-md border-border" 
          : "bg-transparent py-6 border-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <a href="#" className="transition-transform hover:scale-105 active:scale-95">
            <Logo />
          </a>
          
          <nav className="hidden items-center gap-6 md:flex">
            {["how_it_works", "meals", "pricing", "faq"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {t(`nav.${item}`)}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-accent hover:text-accent-foreground"
            title="Toggle Theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <button
            onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-accent hover:text-accent-foreground"
            title="Toggle Language"
          >
            <Globe className="h-5 w-5" />
          </button>

          <button
            onClick={() => onOpenModal("consult")}
            className="hidden rounded-full border-2 border-primary/20 px-5 py-2 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-primary-foreground md:block"
          >
            {language === "ar" ? "استشارة مجانية" : "Free Consultation"}
          </button>

          <button
            onClick={() => onOpenModal("subscribe")}
            className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg active:scale-95 md:block"
          >
            {t("common.subscribe")}
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-muted md:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
