const baseURl = 'https://api.themoviedb.org/3'

const apiKey = process.env.REACT_APP_API_KEY;

const urls = {
    movies: {
        base: (page: number): string => `/discover/movie?page=${page}&api_key=${apiKey}`,
        byId: (id: number): string => urls.movieInfo.base + '/' + id + `&api_key=${apiKey}`,
        byGenreId: (genreId: number, page: number): string => `/discover/movie?with_genres=${genreId}&page=${page}&api_key=${apiKey}`,
        byKeyword: (keyword: string, page: number): string => `/search/movie?query=${keyword}&page=${page}&api_key=${apiKey}`,
    },
    genres:{
        base: `/genre/movie/list`,
    },
    movieInfo: {
        base: '/movie',
        byId: (id: number): string => urls.movieInfo.base + '/' + id
    }
}

export {
    baseURl,
    urls
}