import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "fr";
  });

  const toggleLanguage = () => {
    setLanguage((prevLang) => {
      const newLang = prevLang === "fr" ? "en" : "fr";
      localStorage.setItem("language", newLang);
      return newLang;
    });
  };

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
