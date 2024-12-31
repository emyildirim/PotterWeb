import { Endpoints } from "@/lib/api"
import { useFetch } from "@/lib/useFetch";
import {Item} from "@/components/Item"
import { useRouter } from "next/router";

export default function Books(){
    const router = useRouter();
    const lang = router.query.lang || 'en';
    const {data: books, loading, error } = useFetch(Endpoints.GET_BOOKS(lang)); 

    return(
        <div className="flex-horizontal top-margin bottom-margin">
            {books && books.length === 0 && !loading && !error && (
                <p>No books found.</p>
            )}

            {books != null ? books.map((book) => (
                <Item key={book.number} data={book}/>
            )) : null}
        </div>
    )
}