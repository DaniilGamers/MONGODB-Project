import {PaginatedPageModel} from "./PaginatedPageModel";

export interface MovieListPageModel<T>{
    page: PaginatedPageModel | null;
    results: T[];
    total_pages: number;
    total_results: number;
}