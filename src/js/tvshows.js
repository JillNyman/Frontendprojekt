export function render(){

}

//FÖRSLAG:
//FAVORITER JUST NU
//TOPPLISTA
//SPARA EGNA FAVORITER

//ELEMENT OCH EVENTLISTENERS
const inputEl = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const searchResultTV = document.getElementById("results-tvdb");
const searchResultMovies = document.getElementById("results-stream");
//const showMovieInfo = document.getElementById("movie-info");
const showTVInfo = document.getElementById("tv-info");
//const showMovieInfo = document.getElementById("movie-info");
//const allResultsEl = document.getElementById("result-container");
const toplistEl = document.getElementById("toplist");
const streamingEl = document.getElementById("streaming-services");

//submitBtn.addEventListener("click", searchMovies, false);
submitBtn.addEventListener("click", displayTV, false);



//SÖKER EFTER TV-PROGRAM
async function searchDBtv(){
    let inputValue = inputEl.value;
    const url = `https://api.themoviedb.org/3/search/tv?query=${inputValue}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjRiYjc0YzYwMDI0MjFmZmE0NWEzN2IyYmJjMDhjNyIsInN1YiI6IjY1ZGEwODUzZjhhZWU4MDE3YzQxNmUxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tm3VM8c4WC3_tAeRYHRyN__XNeFouwkkEQVAXoJeVv0'
      }
    };       
        const response = await fetch(url, options);
        const result = await response.json();
        //display(result);
        //console.log("Fetch TV:", url, result); //FUNKAR
        return result;     
        //console.log("DB Test res:", result.results[0].original_title);             
  }

  //VISA SÖKRESULTAT, TV
  async function displayTV(){
    searchResultTV.innerHTML = "";
    //showMovieInfo.innerHTML = "";
    const tvshows = await searchDBtv();
    //console.log("tvtest:", tvshows);
     // movies.forEach((movie) => {  
        
  
      for(i = 0; i < tvshows.results.length; i++){
       
      //console.log("Res:", tvshows.results[i].name);//VISAR RÄTT, ALLA FILMERS TITEL
    
      let listOfTvshowsEl = document.createElement("div");
      listOfTvshowsEl.dataset.id = tvshows.results[i].id; 
      listOfTvshowsEl.classList.add("results-tv-item");
      posterEl = "https://image.tmdb.org/t/p/w45" + tvshows.results[i].poster_path;   
      
  
      //console.log("BILD TV:", posterEl);//VISAR RÄTT:TITELN PÅ ALLA FILMER
  
    //let movieText = document.createTextNode(movies.results[i].title);
    //listOfMoviesEl.appendChild(movieText);
    //listOfMoviesEl.className = "results-stream";
   listOfTvshowsEl.innerHTML = `<div class = "results-item-thumbnail">
    <img src = ${posterEl}>
  </div>
  <div class = "results-item-info">
  <h3>${tvshows.results[i].name}</h3>
  <h4>(TV-serie)</h4>
  <p>${tvshows.results[i].first_air_date}</p>
  </div>
  `;
  searchResultTV.appendChild(listOfTvshowsEl);
      }
      
  makeLinksTV();
   
    
  }
  
  //displayTV();

  //VARFÖR FUNKAR INTE INPUT EN ANDRA GÅNG? MÅSTE FÖRST TRYCKA PÅ UPPDATERA, SEDAN FUNKAR DET ATT SÖKA IGEN

  //SKAPA LÄNKAR AV VARJE TV-RESULTAT
  async function makeLinksTV(){
    const searchedTVshows = searchResultTV.querySelectorAll(".results-tv-item");
    
   //LÄGG TILL LÄNKAR PÅ ALLA SÖKRESULTAT
    searchedTVshows.forEach((searched) => {
      searched.addEventListener("click", async () => {
         //NÄR ANV KLICKAR PÅ ETT SÖKRESULTAT, FÖRSVINNER ALLA RESULTAT
         searchResultMovies.classList.replace("results-stream", "hide-search-list");
         searchResultTV.classList.replace("results-tvdb", "hide-search-list");
        inputEl.value = "";
   
        //VID KLICK GÖRS ETT NYTT API-ANROP
  const url = `https://api.themoviedb.org/3/tv/${searched.dataset.id}?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjRiYjc0YzYwMDI0MjFmZmE0NWEzN2IyYmJjMDhjNyIsInN1YiI6IjY1ZGEwODUzZjhhZWU4MDE3YzQxNmUxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tm3VM8c4WC3_tAeRYHRyN__XNeFouwkkEQVAXoJeVv0'
    }
  };
  const result = await fetch(url, options);
  const tvDetails = await result.json();    
  console.log("TV-RESULTAT FRÅN NYTT API-ANROP:", tvDetails);
  //console.log("TEST:", result );
  //HÄMTA OCKSÅ DATA FRÅN ANNAT API (TYP INFO OM SKÅDISARNA)
  
  //displayInfo(movieDetails);
  getIMDBid(tvDetails);
      });
    });
   }

   //HÄMTA IMDB-ID FÖR ATT SEDAN GÖRA ANROP TILL OMDB OCH FÅ LISTA PÅ SKÅDISAR OSV
async function getIMDBid(tvDetails){
  let tvID = tvDetails.id;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjRiYjc0YzYwMDI0MjFmZmE0NWEzN2IyYmJjMDhjNyIsInN1YiI6IjY1ZGEwODUzZjhhZWU4MDE3YzQxNmUxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tm3VM8c4WC3_tAeRYHRyN__XNeFouwkkEQVAXoJeVv0'
    }
  };
  
    const response = await fetch(`https://api.themoviedb.org/3/tv/${tvID}/external_ids`, options);
    const result = await response.json();

  let IMDBid = result.imdb_id;
  console.log("TEST omdb:", IMDBid);
  const responseOMDB = await fetch(`http://www.omdbapi.com/?apikey=68bda63a&i=${IMDBid}`);
  const resultOMDB = await responseOMDB.json();
  //return resultOMDB;
  //console.log("OMDB-TV-resultat:", resultOMDB.Ratings);
  getInfoOmdbTV(resultOMDB, tvDetails);
  getStreamers(IMDBid);
}

//VISA OLIKA RATINGS I DOM (FUNKAR)
async function getInfoOmdbTV(resultOMDB, tvDetails){
 
  let genreArray = tvDetails.genres.map(a => a.name).join(" | ").toString();
    
  //console.log("Array", array.toString());
//console.log("VARFÖR:", tvDetails.poster_path);
  //let actors = resultOMDB.Actors

  showTVInfo.innerHTML = `<div class = "tv-info">
<img src= "https://image.tmdb.org/t/p/w185/${tvDetails.poster_path}><br/>
<h1 class = "movie-title">${tvDetails.name}</h1><br/>
<h4 class = "actors">Skådespelare: ${resultOMDB.Actors}</h4><br/>  
<p id="overwiew">${tvDetails.overview}</p>
<ul class = "misc-info">
<li id="year"><b>Premiärdatum: </b>${tvDetails.first_air_date}</li> 
<li id="length"><b>Längd: </b>${tvDetails.episode_run_time[0]}</li>
<li id="genre"><b>Genre: </b>${genreArray}</li></ul>
<ul class="misc-info id="misc-ratings>
<li class="score" id="averageScore" ><b>Medelbetyg: </b>${tvDetails.vote_average}</li>`; 

let array = resultOMDB.Ratings;   

for(let i = 0; i < array.length; i++){
//<div class = "movie-info">
showTVInfo.innerHTML += `<ul class="misc-info id="misc-ratings">
  <li class="score"><b>${array[i].Source}:</b> ${array[i].Value}</li>`;
}
let seasonArray = tvDetails.seasons;
for(let i = 0; i < seasonArray.length; i++){
  showTVInfo.innerHTML += `<div id="seasons">
  <img src="https://image.tmdb.org/t/p/w92/${seasonArray[i].poster_path}>
  <p class="seasons">${seasonArray[i].name} Antal avsnitt: ${seasonArray[i].episode_count}</p></div>`
}

}
//WATCHMODE:  4hrH5DyBGk6eNLxkoOK9GLtidyhhN9pa0DNnajyR
 

//getStreamLogos();
//Hämta loggorna till streamingtjänster (ej kopplat till vilken serie som sökts)
async function getStreamLogos(){ 
 
  let url = `https://api.watchmode.com/v1/sources/?apiKey=4hrH5DyBGk6eNLxkoOK9GLtidyhhN9pa0DNnajyR&regions=US`;
  const response = await fetch(url, {method: 'Get'});
  const result = await response.json();

  let jsonstr = JSON.stringify(result);
  localStorage.setItem('logs', jsonstr);

  console.log("Hämta bilder:", jsonstr);//Funkar
  getFromLocalStorage();

  //result[i].logo_100px
}

function getFromLocalStorage(){
  let items = JSON.parse(localStorage.getItem("logs"));

  let networkArray = [];

  for(i = 0; i < items.length; i++){
    //skapa en array med NAMN på streamingtjänst och BILD, alltså logga
    networkArray.push(items[i].name, items[i].logo_100px);
    return networkArray;
    
  };
  console.log("Hämtat från localStorage:", networkArray);
}

 //HÄMTA alla STREAMINGTJÄNSTER som visar aktuell serie
 async function getStreamers(IMDBid){
  let fetchedID = IMDBid;
  //&search_value=Breaking%20bad&search_type=1'
  let url = `https://api.watchmode.com/v1/title/${fetchedID}/sources/?apiKey=4hrH5DyBGk6eNLxkoOK9GLtidyhhN9pa0DNnajyR&regions=US`;
    const response = await fetch(url, {method: 'Get'});
    const result = await response.json();
    //return result;
    showStreamers(result);
    console.log("Finns regionen med?", result);
    let gotLogos = await getStreamLogos();
    console.log("Komplicerad manöver:", gotLogos);

    //Filtrera så endast gratis och prenumeration kommer med
  /*for(let i = 0; i < result.length; i++){
    if(result[i].type === "sub" || result[i].type === "free" || result[i].type === "tve"){
      for(let i; i < gotLogos.length; i++){
        if(result[i].name === gotLogos[i].name){
          let logoArray = [];
          logoArray.push(gotLogos[i].logo_100px);
          //return logoArray;
          //logoImg++;
          console.log("Alla logos som är aktuella:", logoArray); 
        }
      }
    }
  }*/
}
  //let pics = result[i].logo_100px;

  //console.log("Hämta alla logos:", result[0].logo_100px);
  
  /*let extractedValue = [];

  //return result;
 for(i = 0; i < result.length; i++){
  //let onlyLogo = result[i].logo_10px
    extractedValue.push(result[i].logo_100px);
  

    //localStorage.setItem(`logga`, JSON.stringify(result[i].logo_100px));
    
  }*/

/*`<button id="hide-info">Dölj</button>`;

let hideBtn = document.getElementById("hide-info");
let seasonEl = document.getElementById("seasons");
hideBtn.addEventListener("click", hideInfo, false);


function hideInfo(){
  seasonEl.classList.add("hide-search-list");
}*/

//VISA STREAMARE som visar aktuell serie (US)
//streamingEl, toplistEl
async function showStreamers(result){
  let streamers = result;
  let fetchedLogo = await getStreamLogos();
 
  console.log("Fungerar hämt logos:", fetchedLogo);

  let headerEl = document.createElement("h2");
      let headerText = document.createTextNode("Streamingtjänster");
      headerEl.appendChild(headerText);
      streamingEl.appendChild(headerEl);

      
//Filtrera så endast gratis och prenumeration kommer med
  for(let i = 0; i < streamers.length; i++){
    if(streamers[i].type === "sub" || streamers[i].type === "free" || streamers[i].type === "tve"){
      for(let i; i < fetchedLogo.length; i++){
        if(streamers[i].name === fetchedLogo[i].name){
          let logoArray = [];
          logoArray.push(fetchedLogo[i].logo_100px);
          //return logoArray;
          //logoImg++;
          console.log("Alla logos som är aktuella:", logoArray); 
          
        }
        
      //console.log("Filtered streaming:", streamers[i].name, streamers[i].type, streamers[i].region);

      streamers[i].name.forEach(stream => {
        //för varje namn på streamingtjänst, vill jag hämta motsvarande bild från fetchedlogo

        for(let i; i < stream.length; i++){
          //loopa genom alla fetchedLogo, ta fram de som är aktuella
        for(let i; i < fetchedLogo.length; i++){
          if(stream[i].name === fetchedLogo[i].name){
            let logoImg = fetchedLogo[i].logo_100px;
            //logoImg++;
            console.log("Alla logos som är aktuella:", logoImg); 
          }
        
          //när namnet finns i streamers[i].name, ska bilden med motsvarande fetchedLogo[i]name returnera fetchedLogo[i].logo_100px
        }
        }
        
        
      })

      /*fetchedLogo.forEach(logo => {
        //result[i].logo_100px
      });*/

      
      /*'let logoSearch = streamers; //för att kunna få fram alla streamingtjänster jag behövar loggan till

      for(let i = 0; i < logoSearch.length; i++){
        console.log("Hämta logo:", logoSearch[i].name);
      }*/

      let streamingService = document.createElement("h3");
      let streamerName = document.createTextNode(streamers[i].name);
      streamingService.appendChild(streamerName);

      let streamingCost = document.createElement("p");
      function freeORsub(){
      if(streamers[i].type === "free"){
        return "Gratis";
      }else if(streamers[i].type === "sub" || streamers[i].type === "tve") {
        return "Prenumeration krävs";
      } //lägg också till "tve"
    }
      let streamerPay = document.createTextNode(freeORsub());
      streamingCost.appendChild(streamerPay);

      streamingEl.appendChild(streamingService);
      streamingEl.appendChild(streamingCost);


    /*console.log("Filtered streaming:", result[i].name, result[i].type, result[i].region);*/
  }
}

}
}

/*async function getWatchMode(){
let url = 'https://api.watchmode.com/v1/releases/?apiKey=4hrH5DyBGk6eNLxkoOK9GLtidyhhN9pa0DNnajyR';
  const response = await fetch(url, {method: 'Get'});
  const result = await response.json();
  console.log("WATCHMODE:", result);
}

getWatchMode();*/

//IMDB Vanderpump: tt2343157
/*async function getStreamers(){
  let url = 'https://api.watchmode.com/v1/title/tt2343157/sources/?apiKey=4hrH5DyBGk6eNLxkoOK9GLtidyhhN9pa0DNnajyR';
    const response = await fetch(url, {method: 'Get'});
    const result = await response.json();
    console.log("STREAMERS:", result);

    //&& result.type === "sub" || result.type === "free"

    
      for(let i = 0; i < result.length; i++){
        if(result[i].region === "US" &&  result[i].type === "sub" || result[i].type === "free"){
        console.log("Filtered streaming:", result[i].name, result[i].type, result[i].region);
      }
    }
  }*/
