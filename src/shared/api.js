import axios from "axios";

const key = "d642b0816f29d948f7e39b683ef3d6ef";

export const getMovieById = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
  );
};

// write all the API calls here

export const getDiscover = pageNumber => {
  return axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}`
  );
};

export const getVideo = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`
  );
};

export const getReview = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1 `
  );
};

export const getCastCrew = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key} `
  );
};

export const getSocialLinks = id => {
  return axios.get(
`https://api.themoviedb.org/3/movie/${id}/external_ids?api_key=${key}`
  );
};

export const getReleaseInfo = id => {
  return axios.get(
`https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${key}`
  );
};

export const getGenres=() => {
  return axios.get(
`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`
  );
};

export const getKeywords= id => {
  return axios.get(
`https://api.themoviedb.org/3/movie/${id}/keywords?api_key=${key}
`
  );
};

export const getDetails = id => {
  return axios.get(
`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
  );
};
