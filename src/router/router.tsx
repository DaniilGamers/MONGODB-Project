import {createBrowserRouter, RouteObject} from "react-router-dom";
import MovieListPage from "../Pages/MovieListPage";
import MovieInfoPage from "../Pages/MovieInfoPage";
import GenresPage from "../Pages/GenresPage";
import MovieThroughGenresPage from "../Pages/MovieThroughGenresPage";
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
            {path: 'movies/:id', element: <MovieInfoPage/>},
            {path: 'genres', element: <GenresPage/>, children: [

                    {path: ':genreId/', element: <MovieThroughGenresPage/>},

                ]},
            {path: 'search', element: <SearchPage/>, children:[

                    {path: ':keyword/:keywordId/', element: <SearchResultPage/>}

                ]},
        ]
    }
]

export const router = createBrowserRouter(routes)