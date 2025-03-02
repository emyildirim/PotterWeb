import { useState, useEffect } from "react";
import LanguageContext from "@/lib/languageContext";

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  // On mount, check if a language is saved in localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save the language whenever it changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
