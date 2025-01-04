import LanguageContext from "@/lib/languageContext";
import { useState } from "react";

export default function LanguageProvider({children}) {
    const [language, setLanguage] = useState("en");

    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}