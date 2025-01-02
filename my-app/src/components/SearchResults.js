import { useState, useEffect } from "react";
import { fetchSearchResults } from "@/lib/api";

export default function SearchResults({ lang, filters, searchQuery }) {
  const { results, loading, error } = fetchSearchResults(lang, filters, searchQuery);
  
  const highlightText = (text, query) => {
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, "<span class='highlight'>$1</span>");
  };

  if (loading) {
    return <p>Loading results...</p>;
  }

  if (error) {
    return <p>There was an error fetching search results.</p>;
  }

  if (results === undefined || results.length === 0) {
    return <p>No results found for "{searchQuery}".</p>;
  }

  return (
    <div>
      <h3>Search Results:</h3>
      <ul>
        {results && results.length > 0 && <p>No results found</p>}
        {results.map((result) => (
          <li key={result.id}>
            <h4 dangerouslySetInnerHTML={{ __html: highlightText(result.title, searchQuery) }}></h4>
            <p dangerouslySetInnerHTML={{ __html: highlightText(result.description, searchQuery) }}></p>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .highlight {
          background-color: yellow;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}