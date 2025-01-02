import { Endpoints } from "@/lib/api"
import { useFetch } from "@/lib/useFetch";
import {Item} from "@/components/Item"
import { useRouter } from "next/router";

export default function Characters(){
    const router = useRouter();
    const lang = router.query.lang || 'en';
    const {data: characters, loading, error } = useFetch(Endpoints.GET_CHARACTERS(lang));

    return (
        <div className="flex-horizontal top-margin bottom-margin">
          
          {loading ? <p>Loading characters...</p> 
          : error ? <p>{error}</p> 
          : characters && characters.length > 0 && (
            characters.map((character) => (
              <Item key={character.index} data={character} />
            ))
          )}
        </div>
      );
}