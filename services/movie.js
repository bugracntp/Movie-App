const API_KEY = process.env.API_KEY
const BASE_URL = process.env.BASE_URL


async function fetchData(path, { query = "" } = {}) {
    const res = await fetch(
    `${BASE_URL}${path}?api_key=${process.env.API_KEY}&${query}`
    );
    return res.json();
}

export async function getMovie(id){
    try{
        return fetchData(`/movie/${id}`);
    }catch (error) {
        throw new Error("Error happened while fetching top rated movies", error);
      }
}

export async function getPopularMovies(){
    try{
        return fetchData("/movie/popular", "&page=1");
    }catch (error) {
        throw new Error("Error happened while fetching popular movies", error);
      }
}

export async function getTopRatedMovies(){
    try{
        return fetchData("/movie/top_rated", "&page=1");
    }catch (error) {
        throw new Error("Error happened while fetching top rated movies", error);
      }
}

export async function getCategories(){
    try{
        return fetchData("/genre/movie/list");
    }catch (error) {
        throw new Error("Error happened while fetching categories", error);
    }
}

export async function getMoviesByGenre(id){
    try{
        return fetchData(`/discover/movie`, {
            query: `with_genres=${id}&page=1`,
        });
    }catch (error) {
        throw new Error("Error happened while fetching top rated movies", error);
      }
}
