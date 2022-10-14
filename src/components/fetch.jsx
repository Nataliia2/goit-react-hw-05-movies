import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '9d0cbfdf54c935b25322d86e1e3b7dd0';
const tranding = 'trending/all/day';
const search = 'search/movie';


export const fetchRequest = async () => {
  const responce = await axios.get(`${BASE_URL}/${tranding}?api_key=${KEY}`);
  return responce.data.results;
};

export const fetchSaerch = async name => {
  const responce = await axios.get(
    `${BASE_URL}/${search}?api_key=${KEY}&language=en-US&query=${name}&page=1&include_adult=true`
  );
  return responce.data.results;
};

export const fetchDetails = async id => {
  const responce = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`
  );
  return responce.data;
};

export const fetchCast = async (id, data) => {
  const responce = await axios.get(
    `${BASE_URL}movie/${id}/${data}?api_key=${KEY}&language=en-US`
  );
  return responce.data.cast;
};

export const fetchReviews = async (id, data) => {
  const responce = await axios.get(
    `${BASE_URL}movie/${id}/${data}?api_key=${KEY}&language=en-US`
  );
  return responce.data.results;
};
