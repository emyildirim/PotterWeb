import { Endpoints } from "@/lib/api"
import { useFetch } from "@/lib/useFetch";
import {Item} from "@/components/Item"
import { useRouter } from "next/router";

export default function Houses(){
    const router = useRouter();
    const lang = router.query.lang || 'en';
    const {data: houses, loading, error } = useFetch(Endpoints.GET_HOUSES(lang));

    return(
        <div className="flex-horizontal top-margin bottom-margin">

            {loading ? <p>Loading houses...</p> 
            : error ? <p>{error}</p> 
            : houses != null ? houses.map((house) => (
                <Item key={house.index} data={house}/>
            )) : null}
        </div>
    )
}