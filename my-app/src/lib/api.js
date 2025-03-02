const API_URL = `https://potterapi-fedeperin.vercel.app`;

export const Endpoints = {
    GET_BOOKS: (lang) => `${API_URL}/${lang}/books`,  
    GET_CHARACTERS: (lang) => `${API_URL}/${lang}/characters`,
    GET_HOUSES: (lang) => `${API_URL}/${lang}/houses`,
    GET_SPELLS: (lang) => `${API_URL}/${lang}/spells`,
    GET_RANDOM: (lang, filter) => `${API_URL}/${lang}/${filter}/random`,
    GET_SEARCH: (lang, filter, search) => `${API_URL}/${lang}/${filter}?search=${search}`,
};