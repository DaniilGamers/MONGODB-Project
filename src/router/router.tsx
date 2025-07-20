import {createBrowserRouter, RouteObject} from "react-router-dom";
import MovieListPage from "../Pages/MovieListPage";
import MovieInfoPage from "../Pages/MovieInfoPage";
import GenresPage from "../Pages/GenresPage";
import MoviesThroughGenresPage from "../Pages/MoviesThroughGenresPage";
import SearchPage from "../Pages/SearchPage";
import HomePage from "../Pages/HomePage";
import WelcomePage from "../Pages/WelcomePage";
import SearchResultPage from "../Pages/SearchResultPage";

const routes: RouteObject[] = [
    {
        path: '', element: <HomePage/>,
        errorElement: <h2>It seems something went wrong</h2>,
        children: [
            {path: '', element: <WelcomePage/>},
            {index: true, path: 'movies', element: <MovieListPage/>},
            {path: 'movie/:id', element: <MovieInfoPage/>},
            {path: 'genres', element: <GenresPage/>, children: [

                    {path: ':genreId/', element: <MoviesThroughGenresPage/>},

                ]},
            {path: 'search', element: <SearchPage/>, children:[

                    {path: ':keyword/', element: <SearchResultPage/>}

                ]},
        ]
    }
]

export const router = createBrowserRouter(routes)