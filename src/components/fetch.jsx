import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '9d0cbfdf54c935b25322d86e1e3b7dd0';

const fetchRequest = async (page) => {
    const response = await axios.get(`${BASE_URL}trending/all/day?api_key=${KEY}&page=${page}`);
    return response.data;
}

const fetchOneMovie = async (id) => {
    const response = await axios.get(`${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`);
    return response.data;

}

const fetchMovieByName = async (searchName, currentPage) => {
    const response = await axios.get(`${BASE_URL}search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${searchName}&page=${currentPage}`);
    return response.data;
}

const fetchActorsMovie = async (id) => {
    const response = await axios.get(`${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=en-US`);
    return response.data;
}

const fetchReviews = async (id) => {
    const response = await axios.get(`${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`);
    return response.data;
}

export { fetchRequest, fetchOneMovie, fetchMovieByName, fetchActorsMovie, fetchReviews };