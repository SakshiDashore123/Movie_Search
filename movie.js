//Titles    http://img.omdbapi.com/?apikey=[yourkey]&
//details:  http://www.omdbapi.com/?apikey=[yourkey]&

const movieSearchBox = document.getElementById('movie-search-box');
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('result-grid');

//load movies from API...........
async function loadMovies(searchTerm){
    const URL ='https://www.omdbapi.com/?s=${searhTerm}&apikey=895fc283';
    const res = await fetch('${URL}');
    const data = await res.json();
    // console.log(data.Search);
    if(data.Response = "True") console.log(data.Search);
}
// loadMovies('spidermen');
function findMovies(){
    let searchTerm =(movieSearchBox.value).trim();
    if(searchTerm.length > 0){
        searchList.classList.remove('hide.search-list');
        loadMovies(searchTerm);
    }
    else{
        searchList.classList.add('hide-search-list')
    }
}
function displayMovieList(movies){
    searchList.innerHTML = "";
    for(let idx =0; idx< movies.length; idx++){
        let movieListItem = document.createElement('div');
        // console.log(movieListItem);
        movieListItem.dataset.id = movies[idx].imdbID;
        movieListItem.classList.add('search-list-item');
        if(movies[idx].Poster != "N/A")
            moviePoster = movies[idx].Poster;
        else
        // moviePoster = "image_not_found.png";
                     
    }
}