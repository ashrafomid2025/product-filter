// array
// foreach 
// map
// for of (loop)=> array
// filter
const listOfMovies = ["زخم کاری",
    "تمساح خونی",
    "شهرزاد",
    "دل",
    "پدر"
];
const movieDiv = document.getElementById("movieDiv");

// foreach(item, index, array)
listOfMovies.forEach((movie, index, movies)=>{
    if(movie ==="تمساح خونی"){
        movies[index] = "فیلم  "+ movie
    }
    else{
    movies[index] = "سریال  "+ movie;
}
});

let numbers = [1,2,3,4,5,6,7];
let evenNumber =  numbers.filter((number)=> { 
    return number%2 ==0

});
let oddNumbers = numbers.filter((item)=>{
    return item%2 !==0;
});

// numbers.forEach((item, index, array)=>{
//     array[index]= item+2;
// });

// const doubledNumber = numbers.map((item, index, array)=>{
//     return item+2;
// })



// numbers.forEach((item, index, arr)=>{
//     arr[index] = Math.pow(item,3 );
// });


// numbers.forEach(double);
// function double(number, index, arr){
//     arr[index] = number*9;
// }


const searchText = document.getElementById("searchText");
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click",()=>{
    movieDiv.innerHTML = "";
   const filteredMovie=  listOfMovies.filter((movie)=>{
       return movie.includes(searchText.value);
    });
    if(filteredMovie.length>1){
    for(let movie of filteredMovie){
       const h1 =  document.createElement("h1");
       h1.textContent = movie;
       h1.dir = "rtl"
       movieDiv.append(h1);
    }
}
else{
    const warn = document.getElementById("warning");
    warn.classList.remove("hidden");
    setTimeout(()=>{
         warn.classList.add("hidden");
    },4000);
}
})