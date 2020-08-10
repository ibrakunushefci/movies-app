const API_BASE_URL = 'https://api.themoviedb.org';

const API_KEY = '966af1225598980e83b87ffc4f6c47af';

const splitVar = window.location.href.split("/");
const MOVIE_ID = splitVar[3];

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/w500';


export { API_BASE_URL, API_KEY, MOVIE_ID, IMAGE_BASE_URL }