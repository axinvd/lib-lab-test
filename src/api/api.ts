import { baseFetch } from "./baseFetch";
import { CharacterResponse } from "./models/CharacterResponse";
import { MoviesResponse } from "./models/MoviesResponse";
import { QuoteResponse } from "./models/QuoteResponse";

export const api = {
  getMovies: (page: number) =>
    baseFetch<MoviesResponse>(`/movie?page=${page}&limit=50`),
  getMovie: async (id: string) => {
    const movie = await baseFetch<MoviesResponse>(`/movie/${id}`);

    if (movie.status !== 200) {
      return movie;
    }

    return {
      status: 200,
      data: movie.data.docs[0],
    };
  },
  getMovieQuotes: (id: string, page: number, limit = 50) =>
    baseFetch<QuoteResponse>(`/movie/${id}/quote?page=${page}&limit=${limit}`),
  getCharacters: (page: number, name?: string) =>
    baseFetch<CharacterResponse>(
      `/character?page=${page}&limit=100${name ? `&name=/${name}/i` : ""}`,
    ),
  getCharacter: async (id: string) => {
    const character = await baseFetch<CharacterResponse>(`/character/${id}`);

    if (character.status !== 200) {
      return character;
    }

    return {
      status: 200,
      data: character.data.docs[0],
    };
  },
  getCharacterQuotes: (id: string, page: number, limit = 50) =>
    baseFetch<QuoteResponse>(
      `/character/${id}/quote?page=${page}&limit=${limit}`,
    ),
  getQuotes: (page: number) =>
    baseFetch<QuoteResponse>(`/quote?page=${page}&limit=50`),
  getQuote: async (id: string) => {
    const quote = await baseFetch<QuoteResponse>(`/quote/${id}`);

    if (quote.status !== 200) {
      return quote;
    }

    return {
      status: 200,
      data: quote.data.docs[0],
    };
  },
};
