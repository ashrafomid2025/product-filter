const general = document.getElementById("general");
for(let i= 1 ; i<34; i++){
    const div = document.createElement("div");
    div.classList.add("rotatedDiv");
    general.append(div);
}
const textDiv = document.getElementById("text");
const text = "سلام و وقت بخیر خوش آمدید دوباره به وبسایت ما";
const h1 = document.createElement("h1");
textDiv.appendChild(h1);
let index = 0;
h1.textContent = "";
setInterval(()=>{
    h1.textContent += text[index];
    index++;
    if(index> text.length){
        index = 0;
        h1.textContent = ""
    }
},100);



// object: related data 
let book = {
    img: "../public/images/book1.jpeg",
    price: 120,
    name: "بیست و یک درس برای قرن بیست و یک"
}
// value
// for in
const bookDiv = document.getElementById("bookList");

    const image = document.createElement("img");
    image.setAttribute("src",book.img);
    const h2 = document.createElement("h1");
    h2.textContent = book.name;
    const p = document.createElement("p");
    p.textContent = book.price;


    bookDiv.append(image);
    bookDiv.appendChild(h2);
    bookDiv.append(p);