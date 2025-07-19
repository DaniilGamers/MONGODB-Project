const baseURl = 'https://api.themoviedb.org/3'

const urls = {
    movies: {
        base: (page: number): string => `/discover/movie?page=${page}`,
        byId: (id: number): string => urls.movieInfo.base + '/' + id,
        byGenreId: (genreId: number, page: number): string => `/discover/movie?with_genres=${genreId}&page=${page}`,
        byKeyword: (keyword: string): string => `/search/keyword?query=${keyword}`,
        byKeywordId: (keywordId: number, page: number): string => `/discover/movie?with_keywords=${keywordId}&page=${page}`
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