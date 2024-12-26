import { useFetch } from "@/lib/useFetch";
import { Endpoints } from "@/lib/api"

import {NavBar} from "@/components/NavBar"
import {Container} from "react-bootstrap"


export default function Home() {
  const {data: books, loading, error } = useFetch(Endpoints.GET_BOOKS('en'));

  return (
    <div>
      <NavBar/>
      <Container>
      {books && books.length === 0 && !loading && !error && (
        <p>No books found.</p>
      )}

      <ul>
        {books != null ? books.map((book) => (
          <li key={book.number}>
            <img src={book.cover} alt={`Book cover for ${book.originalTitle}`} />
            <h3>{book.number}. {book.title}</h3>
            <span>Release Date: {book.releaseDate}</span>
            <p>Description: {book.description}</p>
            <p>Pages: {book.pages}</p>
          </li>
        )) : loading && <p>loading</p>}
      </ul>
    </Container>
    </div>
  );
}
