import { Endpoints } from "@/lib/api"
import { useFetch } from "@/lib/useFetch";
import {Item} from "@/components/Item"

import { useContext } from "react";
import LanguageContext from "@/lib/languageContext";
import { translations } from "@/lib/lang";

export default function Characters(){
    const { language } = useContext(LanguageContext);
    const {data: characters, loading, error } = useFetch(Endpoints.GET_CHARACTERS(language));
    const { errors } = translations; // Access translations

    return (
        <div className="flex-horizontal top-margin bottom-margin">
          
          {loading ? <p>{errors.loading[language]}</p> 
          : error ? <p>{error}</p> 
          : characters && characters.length > 0 && (
            characters.map((character) => (
              <Item key={character.index} data={character} />
            ))
          )}
        </div>
      );
}