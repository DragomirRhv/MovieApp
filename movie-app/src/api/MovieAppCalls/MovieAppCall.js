import axios from "axios";

export const axiosMovieApp = axios.create({
  baseURL: "http://api.tvmaze.com/",
});

export async function searchShows(show) {
  const response = await axiosMovieApp.get(`/search/shows?q=${show}`);
  return response;
}

export async function getOneShow(id) {
  const response = await axiosMovieApp.get(`/shows/${id}`);
  return response;
}
