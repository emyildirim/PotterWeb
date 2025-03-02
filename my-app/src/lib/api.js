const API_URL = `https://potterapi-fedeperin.vercel.app`;

export const Endpoints = {
    GET_BOOKS: (lang) => `${API_URL}/${lang}/books`,  
    GET_CHARACTERS: (lang) => `${API_URL}/${lang}/characters`,
    GET_HOUSES: (lang) => `${API_URL}/${lang}/houses`,
    GET_SPELLS: (lang) => `${API_URL}/${lang}/spells`,
    GET_RANDOM: (lang, filter) => `${API_URL}/${lang}/${filter}/random`,
    GET_SEARCH: (lang, filter, search) => `${API_URL}/${lang}/${filter}?search=${search}`,
};

export const staticConfig = {
    supportedLanguages: ['en', 'es', 'fr', 'it', 'pt'],
    categories: ['books', 'characters', 'houses', 'spells'],
    revalidateTime: 3600 // 1 hour in seconds
};

export async function fetchCategoryData(category, lang) {
    const endpoint = Endpoints[`GET_${category.toUpperCase()}`]?.(lang);
    if (!endpoint) return null;

    try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching ${category}:`, error);
        return null;
    }
}