import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
const key = "8018dbd4b46ba3aebb8670f173bfaf20"

export const getTrending = async () => {
    const response = await axios.get(`trending/all/day?api_key=${key}`);
    return response.data
}



export const getMovies = async (query) => {
    const response = await axios.get(`search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`);
    return response.data
}



export const getMovieDetails  = async (id) => {
    const response = await axios.get(`movie/${id}?api_key=${key}&language=en-US`);
    return response.data
}


export const getMovieCast  = async (id) => {
    const response = await axios.get(`movie/${id}/credits?api_key=${key}&language=en-US`);
    return response.data
}

export const getMovieReviews  = async (id) => {
    const response = await axios.get(`movie/${id}/reviews?api_key=${key}&language=en-US`);
    return response.data
}