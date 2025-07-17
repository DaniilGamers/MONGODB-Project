const baseURl = 'https://api.themoviedb.org/3'

const urls = {
    movies: {
        base: (page: number): string => `/discover/movie?page=${page}`,
        byId: (id: number): string => urls.movieInfo.base + '/' + id,
    },
    genres:{
        base: `/genre/movie/list`,
        movieBase: '/discover/movie',
        byId: (id: number): string => urls.genres.movieBase + `?with_genres=${id}`
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