import { Endpoints } from "@/lib/api"
import { useFetch } from "@/lib/useFetch";
import {Item} from "@/components/Item"
import { useRouter } from "next/router";

export default function Spells(){
    const router = useRouter();
    const lang = router.query.lang || 'en';
    const {data: spells, loading, error } = useFetch(Endpoints.GET_SPELLS(lang)); 
    
    return(
        <div className="flex-horizontal top-margin bottom-margin">

            {loading ? <p>Loading spells...</p> 
            : error ? <p>{error}</p> 
            : spells != null ? spells.map((spell) => (
                <Item key={spell.index} data={spell}/>
            )) : null}
        </div>
    )
}