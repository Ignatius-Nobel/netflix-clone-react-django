export const baseUrl = "https://api.themoviedb.org/3/";
export const API_KEY = "279fcaf2538f9f272060dbc176f24e1e";
export const imgUrl = "https://image.tmdb.org/t/p/original";

// Urls
export const trending_all = `trending/all/day?api_key=${API_KEY}`;
export const trending_movies = `trending/movie/day?api_key=${API_KEY}`;
export const trending_series = `trending/tv/day?api_key=${API_KEY}`;

export const popular_movies = `movie/popular?api_key=${API_KEY}`;
export const top_rated_movies = `movie/top_rated?api_key=${API_KEY}`;
export const popular_series = `tv/popular?api_key=${API_KEY}`;
export const top_rated_series = `tv/top_rated?api_key=${API_KEY}`;

export const action_movies = `discover/movie?api_key=${API_KEY}&with_genres=28`;
export const comedy_movies = `discover/movie?api_key=${API_KEY}&with_genres=35`;
export const horror_movies = `discover/movie?api_key=${API_KEY}&with_genres=27`;
export const upcoming_movies = `movie/upcoming?api_key=${API_KEY}`;

export const action_series = `discover/tv?api_key=${API_KEY}&with_genres=10759'`;
export const comedy_series = `discover/tv?api_key=${API_KEY}&with_genres=16'`;
export const crime_series = `discover/tv?api_key=${API_KEY}&with_genres=80'`;
export const on_air_series = `tv/on_the_air?api_key=${API_KEY}&with_genres=80'`;
export const air_today_series = `tv/airing_today?api_key=${API_KEY}&with_genres=80'`;
