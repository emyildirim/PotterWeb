import { Endpoints } from "@/lib/api"
import { useFetch } from "@/lib/useFetch";
import {Item} from "@/components/Item"
import { useContext } from "react";
import LanguageContext from "@/lib/languageContext";
import { translations } from "@/lib/lang";

export default function Books(){
    const { language } = useContext(LanguageContext);
    const {data: books, loading, error } = useFetch(Endpoints.GET_BOOKS(language)); 
    const { errors } = translations;

    return(
        <div className="flex-horizontal top-margin bottom-margin">

            {loading ? <p>{errors.loading[language]}</p> 
            : error ? <p>{error}</p> 
            : books != null ? books.map((book) => (
                <Item key={book.number} data={book}/>
            )) : null}
        </div>
    )
}