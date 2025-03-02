const API_URL = `https://potterapi-fedeperin.vercel.app`;

export const Endpoints = {
    GET_BOOKS: (lang) => `${API_URL}/${lang}/books`,  
    GET_CHARACTERS: (lang) => `${API_URL}/${lang}/characters`,
    GET_HOUSES: (lang) => `${API_URL}/${lang}/houses`,
    GET_SPELLS: (lang) => `${API_URL}/${lang}/spells`,
    GET_RANDOM: (lang, filter) => `${API_URL}/${lang}/${filter}/random`,
};

/**
 * Fetch data based on filter, language, and search query.
 * @param {string} lang - Language to fetch data in.
 * @param {string} filter - Selected filter (e.g., books, characters, etc.).
 * @param {string} searchQuery - Search term for filtering.
 * @returns {Promise<Object>} - Filtered data results, loading status, and error.
 */
export async function fetchSearchResults(lang, filter, searchQuery) {
    const endpoint = Endpoints[`GET_${filter.toUpperCase()}`]?.(lang);
    let filteredResults = [];
    let loading = true;
    let error = null;

    if (!endpoint) {
        return { loading: false, error: new Error(`Invalid filter: ${filter}`), filteredResults };
    }

    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        loading = false;

        if (response.ok) {
            filteredResults = data.filter((item) =>
                Object.values(item)
                    .filter((value) => typeof value === "string")
                    .some((value) => value.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        } else {
            error = new Error(data.message || "Error fetching data");
        }
    } catch (err) {
        loading = false;
        error = err;
        console.error("Error fetching search results:", err);
    }

    return { filteredResults, loading, error };
}
