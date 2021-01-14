const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=02ce28bcb0320d007a30c63a29d122ba&page=1'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const SEARCH_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=02ce28bcb0320d007a30c63a29d122ba&QUERY="'

//Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    console.log(data.results)
}