import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='d4e2c9331518c1c001c492708b0e4863'

const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=d4e2c9331518c1c001c492708b0e4863';

// 'https://api.themoviedb.org/3/trending/all/day?api_key=d4e2c9331518c1c001c492708b0e4863
const getTrendingVideos=axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);
const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default {
    getTrendingVideos,
    getMovieByGenreId
}
