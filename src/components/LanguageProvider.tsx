import React, { createContext, useContext, useEffect, useState } from "react";
import ar from "../messages/ar.json";
import en from "../messages/en.json";

type Language = "ar" | "en";
type Messages = typeof ar;

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "rtl" | "ltr";
};

const messages: Record<Language, any> = { ar, en };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("mealprep-lang") as Language) || "ar";
    }
    return "ar";
  });

  useEffect(() => {
    localStorage.setItem("mealprep-lang", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const t = (path: string) => {
    const keys = path.split(".");
    let value = messages[language];
    for (const key of keys) {
      value = value?.[key];
    }
    return value || path;
  };

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
