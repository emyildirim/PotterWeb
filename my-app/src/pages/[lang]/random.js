import { Container, Button } from "react-bootstrap";
import { Item } from "@/components/Item"
import { Endpoints } from "@/lib/api"
import { useFetch } from "@/lib/useFetch";

import { useState, useContext } from "react";
import LanguageContext from "@/lib/languageContext";

export default function Random(){

    const { language } = useContext(LanguageContext);
    const [index , setIndex] = useState(0);
    const filters = ["books", "characters", "houses", "spells"];

    const filter = filters[index];
    const { data, loading, error } = useFetch(Endpoints.GET_RANDOM(language, filter));

    const incrementIndex = () => {
        setIndex((prev) => (prev + 1) % filters.length);
    }

    return(
        <>
            <Container className="flex-horizontal top-margin">
                <Button variant="dark" onClick={incrementIndex}>Generate</Button>
            </Container>
            <Container className="flex-horizontal top-margin bottom-margin">
                {loading ? <p>Loading...</p> 
                : error ? <p>{error}</p> 
                : data != null ? <Item data={data}/> : null}
            </Container>
        </>
    )
}