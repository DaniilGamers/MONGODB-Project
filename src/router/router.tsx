import {createBrowserRouter, RouteObject} from "react-router-dom";
import App from "../App";
import MovieListPage from "../Pages/MovieListPage";
import MovieInfoPage from "../Pages/MovieInfoPage";
import GenresPage from "../Pages/GenresPage";
import MovieThroughGenresPage from "../Pages/MovieThroughGenresPage";

const routes: RouteObject[] = [
    {
        path: '', element: <App/>,
        errorElement: <h2>It seems something went wrong</h2>,
        children: [
            {index: true, path: 'movies', element: <MovieListPage/>},
            {path: 'movies/:id', element: <MovieInfoPage/>},
            {path: 'genres', element: <GenresPage/>},
            {path: 'genres/:id', element: <MovieThroughGenresPage/>}
        ]
    }
]

export const router = createBrowserRouter(routes)