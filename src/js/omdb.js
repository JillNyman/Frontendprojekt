//KEY: 68bda63a

export function render(){

}

//Requests: http://www.omdbapi.com/?apikey=[yourkey]&
//Poster requests: http://img.omdbapi.com/?apikey=[yourkey]&




window.onload = init;

function init(){
    getNewReleases();
}

//TOPPLISTOR OCH LIKNANDE SOM SKA VISAS DIREKT
const toplistEl = document.getElementById("toplist");

//KONVERTERA DATUM TILL RÄTT FORMAT
function convertDate(){
    const date = new Date();
const year = date.getFullYear();
const month = ('0' + (date.getMonth() + 1)).substr(-2);
const day = ('0' + date.getDate()).substr(-2);
const dateStr = [year, month, day].join('');
return dateStr;
}

//HÄMTA RELEASER SOM FINNS PÅ NÅGON AV DE LISTADE TJÄNSTERNA
async function getNewReleases(){
    let todaysDate = convertDate();
let url = `https://api.watchmode.com/v1/releases/?apiKey=4hrH5DyBGk6eNLxkoOK9GLtidyhhN9pa0DNnajyR&start_date=${todaysDate}`;
  const response = await fetch(url, {method: 'Get'});
  const result = await response.json();
  //return result;
  //console.log("Dagens datum:", todaysDate);
  console.log("Nya releaser:", result);
  let viewable = result.releases;

  let onlyUS = [];
  //for(let i = 0; i < result.releases.length; i++){
    viewable.forEach((res) => {
    if(res.source_name === "Netflix" || res.source_name === "discovery+" || res.source_name === "Hulu" || res.source_name === "Bravo" || res.source_name === "Paramount+" || res.source_name === "Amazon Prime Video" || res.source_name ===  "HBO Max"){
        
        onlyUS.push(res);
        return onlyUS;
        //console.log("Releaser som ska listas:", onlyUS);
    
    
  }
})
let acc = [];
let removeThis = "";
onlyUS.reduce((acc, item ) => {
    if(item.poster_url !== removeThis){
        acc.push(item);
    }
    return acc;
});
console.log("arr:", onlyUS, "acc:", acc);



/*let onlyNetflix = viewable.source_name.filter(filterChannels);
function filterChannels(value){
    return value === "Netflix";
}*/
  //console.log("Releaser som ska listas:", onlyUS);
  //HBO Max, Amazon Prime Video, Paramount+, Bravo, Hulu, discovery+, Netflix
  //showReleases(filteredOnlyUS);
}




/*async function showReleases(filteredOnlyUS){
    let newStreaming = filteredOnlyUS;
    
    console.log("Vad är detta:", newStreaming);
    for(let i = 0; i < newStreaming[i].length; i++){
        
             //Skapa div med class och id
        let listOfNewsEl = document.createElement("div");
        listOfNewsEl.dataset.id = newStreaming[i].imdb_id;
        listOfNewsEl.classList.add("toplist-item");

        //Skapa img-element
        let newsImgEl = document.createElement("img");
        newsImgEl.src = `${newStreaming[i].poster_url}`;
       /* if(newStreaming[i].poster_url === ""){
            newsImgEl.src = "./images/missing-symbolic.256x256.png";
            newsImgEl.style = width="185px";
        }
        //let newsImg = newStreaming[i].poster_url;
        let newsTitleEl = document.createElement("h4");
        let newsTitle = document.createTextNode(newStreaming[i].title);
        console.log("I loopen:", newStreaming[i].title);

        let newsDateEl = document.createElement("h5");
        let newsDate = document.createTextNode(newStreaming[i].
        source_release_date);
        

        let newsSourceEl = document.createElement("h5");
        let newsSource = document.createTextNode(newStreaming[i].source_name);  
        

        newsTitleEl.appendChild(newsTitle);
        newsDateEl.appendChild(newsDate);
        newsSourceEl.appendChild(newsSource);
        
        listOfNewsEl.appendChild(newsImgEl);
        listOfNewsEl.appendChild(newsTitleEl);
        listOfNewsEl.appendChild(newsDateEl);
        listOfNewsEl.appendChild(newsSourceEl);

        toplistEl.appendChild(listOfNewsEl);

      
    };   
    console.log("Ska synas:", newStreaming);

  

    
}*/




//getNetworks();

/*
async function getNetworks(){
let url = 'https://api.watchmode.com/v1/networks/?apiKey=4hrH5DyBGk6eNLxkoOK9GLtidyhhN9pa0DNnajyR';
const response = await fetch(url, {method: 'Get'});
  const result = await response.json();


 let onlyUS = [];
  for(let i = 0; i < result.length; i++){
    if(result[i].origin_country === "US" || result[i].origin_country === ""){
    onlyUS.push(result[i].name);
    //return onlyUS;
    
}

}


console.log("Alla nätverk", onlyUS);

  
}*/