import { useRouter } from 'next/router';
import { useContext } from 'react';
import LanguageContext from "@/lib/languageContext";
import { useFetch } from "@/lib/useFetch";
import { Endpoints } from "@/lib/api";
import { translations } from "@/lib/lang";
import { Item } from '@/components/Item';

export default function SearchPage() {
  const router = useRouter();
  const { language } = useContext(LanguageContext);
  const { filter, query } = router.query;
  const { data, loading, error } = useFetch(Endpoints.GET_SEARCH(language, filter, query));
  
  // Wait for query params to be available
  if (!filter || !query) {
    return <p className="search-results">{translations.search.noSearch[language]}</p>;
  }

  const highlightText = (text, query) => {
    if (!text) return "";
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, "<span class='highlight'>$1</span>");
  };

  if (loading) {
    return <p className="error-message">{translations.errors.loading[language]}</p>;
  }

  if (error) {
    return <p className="error-message">{translations.errors.error[language]}</p>;
  }

  if (!data || data.length === 0) {
    return <p className="error-message">{`${translations.errors.noData[language]} "${query}"`}</p>;
  }

  const renderResults = () => {
    switch (filter) {
      case 'books':
      case 'characters':
      case 'houses':
      case 'spells':
        return (
          <div className="flex-horizontal top-margin bottom-margin search-results">
            {data.map((result) => (
              <div key={result.id || result.index}>
                <Item data={result} />
              </div>
            ))}
          </div>
        );
      default:
        return (
          <ul>
            {data.map((result) => (
              <li key={result.id || result.index}>
                <h4 dangerouslySetInnerHTML={{
                  __html: highlightText(result.title || result.name, query)
                }} />
                <p dangerouslySetInnerHTML={{
                  __html: highlightText(result.description || "", query)
                }} />
              </li>
            ))}
          </ul>
        );
    }
  };

  return (
      <div className="container">
        <h3 className="text-center bottom-margin-2 top-margin-2">{translations.errors.results[language]} &quot;{query}&quot;</h3>
        {renderResults()}
      </div>
  );
}