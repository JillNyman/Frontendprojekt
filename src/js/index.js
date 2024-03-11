import("./tvshows").then(function (page) {
  page.render();
});

import("./omdb").then(function (page) {
  page.render();
});

import("./tvapi").then(function (page) {
  page.render();
});

//ID: 287 (BRAD PITT)
//ID: 297 (MEET JOE BLACK) fetch('https://api.themoviedb.org/3/search/movie?query=meet%20joe%20black&include_adult=false&language=en-US&page=1', options)
//REVIEWS(MOVIE-ID): fetch('https://api.themoviedb.org/3/movie/297/reviews?language=en-US&page=1', options)

//elements
let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");

//event listener
openBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);


//TA FRAM MENYN
function toggleMenu() {
  let navMenuEl = document.getElementById("nav-menu");

  let style = window.getComputedStyle(navMenuEl);

  if (style.display === "none") {
    navMenuEl.style.display = "block";
  } else {
    navMenuEl.style.display = "none";
  }
}

//HÄMTA DATA FRÅN API 
//window.onload = init;

//function init(){
  //display();
  //searchDBmovie();
  //displayMovies();
    //searchMovies();
   
//processData();
//}

// En asynkron funktion som simulerar hämtning av data från en API
/*const movieSearch = document.getElementById("movie-search");//INPUT. ONCLICK OCH ONKEYUP => FINDmOVIES()
const searchList = document.getElementById("search-list");
const resultPresentation = document.getElementById("results");
const cmdbResults = document.getElementById("cmdbResults");*/

//VÄLJ EN FILM I LISTAN
//VISA INFO OM FILMEN
//VISA TIPS OM ANDRA LIKNANDE (?)
//VISA BETYG FRÅN FLERA API

//ELEMENT OCH EVENTLISTENERS
const inputEl = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const searchResult = document.getElementById("results-stream");
const showMovieInfo = document.getElementById("movie-info");
const searchResultTV =  document.getElementById("results-tvdb");

//submitBtn.addEventListener("click", searchMovies, false);
submitBtn.addEventListener("click", displayMovies, false);



//SÖKFUNKTION THEMOVIEDB (loadMovies(searchword))FUNKAR INTE NÄR FUNKTIONEN TAR EMOT (SEARCHWORD) 
//SÖKER EFTER FILMER
async function searchDBmovie(){
  let inputValue = inputEl.value;
  const url = `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjRiYjc0YzYwMDI0MjFmZmE0NWEzN2IyYmJjMDhjNyIsInN1YiI6IjY1ZGEwODUzZjhhZWU4MDE3YzQxNmUxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tm3VM8c4WC3_tAeRYHRyN__XNeFouwkkEQVAXoJeVv0'
    }
  };

    try {    
      const response = await fetch(url, options);
      const result = await response.json();
      //display(result);
      //console.log("Fetch:", result); 
      return result;     
      //console.log("DB Test res:", result.results[0].original_title);
      //let titleEl = result[0].original_title;
       //console.log("DB response:", titleEl);
       //displayMovies(result);
    } catch (error) {
      console.error(error);
    }      
}

async function displayMovies(){
  searchResult.innerHTML = "";
  //showMovieInfo.innerHTML = "";
  const movies = await searchDBmovie();
   // movies.forEach((movie) => {  

    for(i = 0; i < movies.results.length; i++){
    //console.log("Res:", movies.results[i].title);//VISAR RÄTT, ALLA FILMERS TITEL
  
    let listOfMoviesEl = document.createElement("div");
    listOfMoviesEl.dataset.id = movies.results[i].id; //movies.results[i].id
    listOfMoviesEl.classList.add("results-movie-item");
    posterEl = "https://image.tmdb.org/t/p/w45" + movies.results[i].poster_path;   

    console.log("DB RESULT:", movies.results[i].title);//VISAR RÄTT:TITELN PÅ ALLA FILMER

  //let movieText = document.createTextNode(movies.results[i].title);
  //listOfMoviesEl.appendChild(movieText);
  //listOfMoviesEl.className = "results-stream";
 listOfMoviesEl.innerHTML = `<div class = "results-item-thumbnail">
  <img src = ${posterEl}>
</div>
<div class = "results-item-info">
<h3>${movies.results[i].title}</h3>
<h4>(Film)</h4>
<p>${movies.results[i].release_date}</p>
</div>
`;
searchResult.appendChild(listOfMoviesEl);
    }
    
makeLinks();
  
}


 //displayMovies();



//HETER LOADMOVIEDETAILS
 async function makeLinks(){
  const searchedMovies = searchResult.querySelectorAll(".results-movie-item");
  
 //LÄGG TILL LÄNKAR PÅ ALLA SÖKRESULTAT
  searchedMovies.forEach((searched) => {
    searched.addEventListener("click", async () => {
       //NÄR ANV KLICKAR PÅ ETT SÖKRESULTAT, FÖRSVINNER ALLA RESULTAT
searchResult.classList.add("hide-search-list");
searchResultTV.classList.add("hide-search-list");
inputEl.value = "";

//console.log("LÄNKAR:", searchedMovies.results); //FUNKAR INTE

const url = `https://api.themoviedb.org/3/movie/${searched.dataset.id}?language=en-US`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjRiYjc0YzYwMDI0MjFmZmE0NWEzN2IyYmJjMDhjNyIsInN1YiI6IjY1ZGEwODUzZjhhZWU4MDE3YzQxNmUxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tm3VM8c4WC3_tAeRYHRyN__XNeFouwkkEQVAXoJeVv0'
  }
};
const result = await fetch(url, options);
const movieDetails = await result.json();    
console.log("FILM-RESULTAT FRÅN NYTT API-ANROP:", movieDetails);
//console.log("TEST:", result );
//HÄMTA OCKSÅ DATA FRÅN ANNAT API

getIMDBid(movieDetails);
//displayInfo(movieDetails);
    });
  });
 }

async function displayInfo(movieDetails){
  //showGenres(movieDetails);
 let string = movieDetails.genres.name;    //.toString();
 console.log(string);
 let array = movieDetails.genres.map(a => a.name).toString();
    
    //console.log("Array", array.toString());

  showMovieInfo.innerHTML = `<div class = "movie-info">
  <img src= "https://image.tmdb.org/t/p/w500${movieDetails.poster_path}}><br/>
  <h1 class = "movie-title">${movieDetails.title}</h1><br/>
  <p id="overwiew">${movieDetails.overview}</p>
  <ul class = "misc-info">
  <li id="year"><b>Premiärdatum: </b>${movieDetails.release_date}</li> 
  <li id="year"><b>Längd: </b>${movieDetails.runtime}</li>
  <li id="year"><b>Genre: ${array}</b></li>
  <li id="year"><b>Medelbetyg:</b>${movieDetails.vote_average}</li>
  </div>`;
  console.log("VISA GENRE OCH MEDELBETYG:", movieDetails.genres[0].name, movieDetails.vote_average);
  //ÄNDRA FORMAT PÅ RELEASEDATUM?
  //SKAPA STAPEL ELLER LIKNANDE SOM VISAR BETYG
}//9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg


//HÄMTA IMDB-ID FÖR ATT SEDAN GÖRA ANROP TILL OMDB OCH FÅ LISTA PÅ SKÅDISAR OSV
async function getIMDBid(movieDetails){
  let movieID = movieDetails.id;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjRiYjc0YzYwMDI0MjFmZmE0NWEzN2IyYmJjMDhjNyIsInN1YiI6IjY1ZGEwODUzZjhhZWU4MDE3YzQxNmUxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tm3VM8c4WC3_tAeRYHRyN__XNeFouwkkEQVAXoJeVv0'
    }
  };
  
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/external_ids`, options);
    const result = await response.json();

  let IMDBid = result.imdb_id;
  console.log("TEST omdb:", IMDBid);
  const responseOMDB = await fetch(`http://www.omdbapi.com/?apikey=68bda63a&i=${IMDBid}`);
  const resultOMDB = await responseOMDB.json();
  //return resultOMDB;
  console.log("OMDB-resultat:", resultOMDB.Ratings);
getInfoOmdb(resultOMDB, movieDetails);
    

    //http://www.omdbapi.com/?apikey=[yourkey]&
    //68bda63a
    
}

//VISA OLIKA RATINGS I DOM (FUNKAR)
async function getInfoOmdb(resultOMDB, movieDetails){
 
  let genreArray = movieDetails.genres.map(a => a.name).join(" | ").toString();
    
  //console.log("Array", array.toString());
console.log("VARFÖR:", movieDetails.poster_path);
  //let actors = resultOMDB.Actors

showMovieInfo.innerHTML = `<div class = "movie-info">
<img src= "https://image.tmdb.org/t/p/w185/${movieDetails.poster_path}}><br/>
<h1 class = "movie-title">${movieDetails.title}</h1><br/>
<h4 class = "actors">Skådespelare: ${resultOMDB.Actors}</h4><br/>  
<p id="overwiew">${movieDetails.overview}</p>
<ul class = "misc-info">
<li id="year"><b>Premiärdatum: </b>${movieDetails.release_date}</li> 
<li id="length"><b>Längd: </b>${movieDetails.runtime}</li>
<li id="genre"><b>Genre: </b>${genreArray}</li></ul>
<ul class="misc-info id="misc-ratings>
<li class="score" id="averageScore" ><b>Medelbetyg: </b>${movieDetails.vote_average}</li>

</div>`;


    let array = resultOMDB.Ratings;   

    for(let i = 0; i < array.length; i++){
//<div class = "movie-info">
      showMovieInfo.innerHTML += `<ul class="misc-info id="misc-ratings>
      <li class="score"><b>${array[i].Source}:</b> ${array[i].Value}</li>`;
    }

 
//searchResult.appendChild(listOfActorsEl);
}
/*
  let partialArray = movieDetails.genres.map((item) => {
    {name: item.name};
    return JSON.stringify(partialArray);
  })
     movieDetails.forEach(detail => {
    return [detail.genres.name].join(" , ");
  })

  }*/
  











