import { Endpoints } from "@/lib/api"
import { useFetch } from "@/lib/useFetch";
import { Item } from "@/components/Item"

import { useContext } from "react";
import LanguageContext from "@/lib/languageContext";
import { translations } from "@/lib/lang";

export default function Spells(){
    const { language } = useContext(LanguageContext);
    const {data: spells, loading, error } = useFetch(Endpoints.GET_SPELLS(language)); 
    const { errors } = translations;

    return(
        <div className="flex-horizontal top-margin bottom-margin">

            {loading ? <p>{errors.loading[language]}</p> 
            : error ? <p>{error}</p> 
            : spells != null ? spells.map((spell) => (
                <Item key={spell.index} data={spell}/>
            )) : null}
        </div>
    )
}