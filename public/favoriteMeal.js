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
    info:{
    title: movieName.value,
    [keyName.value]: extraInfo.value
  }
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
function showList(arr){
  const showResult = document.getElementById("showResult");
   showResult.innerHTML = ""
  arr.forEach(element => {
  
    const h1 = document.createElement("h1");
    
    for(let key in element.info){
      let text = element.info.title+"-" + key+ "-"+element.info[key];
      h1.textContent = text;
    }
    showResult.append(h1);
  });
}

searchBtn.addEventListener("click",()=>{
  let text = searchText.value;
   let filteredArr = moviesList.filter(movie=>{
    return movie.info.title.includes(text)
  });

  const showResult = document.getElementById("showResult");
  showResult.innerHTML = ""  
  filteredArr.forEach(element => {
    const h1 = document.createElement("h1");
    
    for(let key in element.info){
      let text = element.info.title+"-" + key+ "-"+element.info[key];
      h1.textContent = text;
    }
    showResult.append(h1);
  });
})