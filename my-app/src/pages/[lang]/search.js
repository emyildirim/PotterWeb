import { useRouter } from "next/router";
import SearchResults from "@/components/SearchResults";

function SearchPage() {
  const router = useRouter();
  const { lang = "en", filter = "books", search = "" } = router.query;

  return (
    <div>
      <h1>Searching for "{search}"</h1>
      <SearchResults lang={lang} filters={filter} searchQuery={search} />
    </div>
  );
}

export default SearchPage;
