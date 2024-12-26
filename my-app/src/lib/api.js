const API_URL = `https://potterapi-fedeperin.vercel.app`

export const Endpoints = {
    GET_BOOKS: (lang) => `${API_URL}/${lang}/books`,
    GET_BOOKS_RANDOM: (lang) => `${API_URL}/${lang}/books/random`,
  
    GET_CHARACTERS: (lang) => `${API_URL}/${lang}/characters`,
    GET_CHARACTERS_RANDOM: (lang) => `${API_URL}/${lang}/characters/random`,
  
    GET_HOUSES: (lang) => `${API_URL}/${lang}/houses`,
    GET_HOUSES_RANDOM: (lang) => `${API_URL}/${lang}/houses/random`,
  
    GET_SPELLS: (lang) => `${API_URL}/${lang}/spells`,
    GET_SPELLS_RANDOM: (lang) => `${API_URL}/${lang}/spells/random`,
}