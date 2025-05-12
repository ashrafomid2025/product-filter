let movieName = document.getElementById("mealName");
let keyName = document.getElementById("keyName");
const addBtn = document.getElementById("addBtn");
const searchText =  document.getElementById("searchText")
let extraInfo = document.getElementById("extraInfo");
const searchBtn = document.getElementById("searchBtn");
addBtn.addEventListener("click",createMovieList);
const moviesList = [];
function createMovieList(){
   const toastMessage = document.getElementById("toastMessage");
  if(movieName.value !=="" && keyName.value !=="", extraInfo.value!==""){
  const movie = {
    id: Math.random()*10,
    [movieName.value]: movieName.value,
    [keyName.value]: extraInfo.value
  }
  movieName.value = "";
  keyName.value = "";
  extraInfo.value = ""
  moviesList.push(movie);
  toastMessage.classList.remove("hidden");
  setTimeout(()=>{
    toastMessage.classList.add("hidden");
  },4000);
}
else{
    const danger = document.getElementById("danger");
    danger.classList.remove("hidden");
    setTimeout(()=>{
           danger.classList.add("hidden");
    },4000);
}
showList(moviesList);
}


// select showResult
const showResult = document.getElementById("showResult");
function showList(arr){
    showResult.innerHTML = "";
    for(let item of arr){
    const h1 = document.createElement("h1");
    for(let key in item){
        const movieName = item[key];
        const text = document.createTextNode(movieName);
        h1.appendChild(text);

}
showResult.appendChild(h1);
}
}