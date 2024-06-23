const baseURl = 'https://api.themoviedb.org/3'

const urls = {
    movies: {
        base: '/discover/movie',
        byId: (id: number): string => urls.movieInfo.base + '/' + id,
    },
    genres:{
        base: `/genre/movie/list`,
        byId: (id: number): string => urls.movies.byId + '/' + id
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