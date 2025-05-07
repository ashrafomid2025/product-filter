const selectFilter = document.getElementById("product-filter");
const generalDiv = document.getElementById("genenral-div");

const arr = [
    {name: "Iphone 10",imgURL: "../public/images/iphone10.jpeg"},
    {name: "Iphone 13",imgURL: "../public/images/iphone13.jpeg"},
    {name: "Iphone 15",imgURL: "../public/images/iphone15.jpeg"},
    {name: "Iphone 16",imgURL: "../public/images/iphone16.jpeg"},
    {name: "Samsung S9",imgURL: "../public/images/samsung-a10.jpeg"},
    {name: "Samsung A10",imgURL: "../public/images/samsung-s9.jpeg"},
    {name: "Samsung A21",imgURL: "../public/images/samsung-a21.jpeg"},
    {name: "Samsung S21",imgURL: "../public/images/samsung-s21.jpeg"}
];

// function for showing the products 

function showingProducts(products){
    generalDiv.innerHTML = "";
    for(let item of products){
       
    // 
        const div = document.createElement("div");
        div.classList.add("card");

        const image = document.createElement("img");
        image.setAttribute("src",item.imgURL);
        image.classList.add("card-img");

        const h1 = document.createElement("h1");
        const text = document.createTextNode(item.name);
        h1.appendChild(text);
        h1.classList.add("card-h1");

        // append nodes together
        generalDiv.appendChild(div);
        div.appendChild(image);
        div.appendChild(h1);
    }
}

selectFilter.addEventListener("change",()=>{
    let filteredProducts;
    if(selectFilter.value ==="samsung"){
       filteredProducts=  arr.filter(product=> product.name.includes("Samsung"));
    }
    else if(selectFilter.value ==="apple"){
       filteredProducts=  arr.filter(product=> product.name.includes("Iphone"));
    }
    else{
        filteredProducts = arr;
    }

    showingProducts(filteredProducts);
});
// object => JS;
let person = {
    name: "Ali Reza",
    age: 23,
    lastName: "Ahmadi"
}
// naive
person = {
   ...person,
    grade: 7,
    year: 2025
}
// 
person.name = "Mohammad Reza";
person.score = 78;
delete person.score;
delete person.grade;
