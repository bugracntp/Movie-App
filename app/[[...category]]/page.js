import React from "react"
import HomeContainer from "@/containers/home"

import { getPopularMovies, getTopRatedMovies, getCategories, getMoviesByGenre } from "@/services/movie"
async function HomePage({ params }) {
    let selectedCategory;

    const [{ results: popularMovies }, { results: topRatedMovies }, {genres: categories}] =
        await Promise.all([getPopularMovies(), getTopRatedMovies(), getCategories()]);

    if (params.category?.length > 0) {
        const {results} = await getMoviesByGenre(params.category[0]);
        selectedCategory = results
    }

    return (
        <HomeContainer
            popularMovies={popularMovies}
            topRated={topRatedMovies}
            categories={categories}
            selectedCategory={{
                id: params.category?.[0] ?? "",
                movies: selectedCategory ? selectedCategory.slice(1, 7) : [],
            }}
        />
    );
}

export default HomePage;