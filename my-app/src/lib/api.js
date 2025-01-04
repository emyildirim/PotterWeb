import { useFetch } from "@/lib/useFetch";

const API_URL = `https://potterapi-fedeperin.vercel.app`

const filters = ["books", "characters", "houses", "spells"];

export const Endpoints = {
    GET_BOOKS: (lang) => `${API_URL}/${lang}/books`,  
    GET_CHARACTERS: (lang) => `${API_URL}/${lang}/characters`,
    GET_HOUSES: (lang) => `${API_URL}/${lang}/houses`,
    GET_SPELLS: (lang) => `${API_URL}/${lang}/spells`,
    GET_RANDOM: (lang, filter) => `${API_URL}/${lang}/${filter}/random`,
}

/**
 * Fetch data based on filter, language, and search query.
 * @param {string} lang - Language to fetch data in.
 * @param {string} filter - Selected filter (e.g., books, characters, etc.).
 * @param {string} searchQuery - Search term for filtering.
 * @returns {Promise<Array>} - Filtered data results.
 */
export async function fetchSearchResults(lang, filter, searchQuery) {
    const endpoint = Endpoints[`GET_${filter.toUpperCase()}`]?.(lang);
    let filteredResults = [];
    let loading = true;
    let error = null;

    if (!endpoint) {
        const error = new Error(`Invalid filter: ${filter}`);
        return { loading: false, error, filteredResults };
    }

    try{
        const { data, l, err } = useFetch(endpoint);
        loading = l;
        error = err;
        
        // Filter results based on the search query
        if (data) {
            filteredResults = data.filter((item) =>
                Object.values(item)
                    .filter((value) => typeof value === "string") // Ensure we only search in string fields
                    .some((value) => value.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }
    } catch (error) {
        console.error("Error fetching search results:", error);
    }

    return { filteredResults, loading, error };
}
