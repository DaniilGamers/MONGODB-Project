import {createBrowserRouter, RouteObject} from "react-router-dom";
import MovieListPage from "../Pages/MovieListPage";
import MovieInfoPage from "../Pages/MovieInfoPage";
import GenresPage from "../Pages/GenresPage";
import MovieThroughGenresPage from "../Pages/MovieThroughGenresPage";
import SearchPage from "../Pages/SearchPage";
import HomePage from "../Pages/HomePage";

const routes: RouteObject[] = [
    {
        path: '', element: <HomePage/>,
        errorElement: <h2>It seems something went wrong</h2>,
        children: [
            {index: true, path: 'movies', element: <MovieListPage/>},
            {path: 'movies/:id', element: <MovieInfoPage/>},
            {path: 'genres', element: <GenresPage/>},
            {path: 'genres/:id', element: <MovieThroughGenresPage/>},
            {path: 'search', element: <SearchPage/>}
        ]
    }
]

export const router = createBrowserRouter(routes)