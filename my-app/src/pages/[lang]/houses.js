import { Endpoints } from "@/lib/api"
import { useFetch } from "@/lib/useFetch";
import {Item} from "@/components/Item"

import { useContext } from "react";
import LanguageContext from "@/lib/languageContext";
import { translations } from "@/lib/lang";

export default function Houses(){
    const { language } = useContext(LanguageContext);
    const {data: houses, loading, error } = useFetch(Endpoints.GET_HOUSES(language));
    const { errors } = translations; // Access translations

    return(
        <div className="flex-horizontal top-margin bottom-margin">

            {loading ? <p>{errors.loading[language]}</p> 
            : error ? <p>{error}</p> 
            : houses != null ? houses.map((house) => (
                <Item key={house.index} data={house}/>
            )) : null}
        </div>
    )
}