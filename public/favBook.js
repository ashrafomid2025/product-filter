const bookName = document.getElementById("bookName");
const bookDescription = document.getElementById("bookDescription");
const imgUrl = document.getElementById("imgUrl");
const addBtn = document.getElementById("addBtn");

const bookList = [];

addBtn.addEventListener("click",addBook);
function addBook(){
    if(bookName.value !=="" && bookDescription.value !=="" && imgUrl.value!==""){
    let book = {
        name: bookName.value,
        description: bookDescription.value,
        imgUrl: imgUrl.value
    }

    bookList.push(book);
    showList();
    bookName.value = "";
    bookDescription.value = "";
    imgUrl.value = "";
    const success = document.getElementById("success");
    success.classList.remove("hidden");
    setTimeout(()=>{
        success.classList.add("hidden");
    },3000);
}else{
    const warning = document.getElementById("warning");
    warning.classList.remove("hidden");
    setTimeout(()=>{
        warning.classList.add("hidden");
    },3000)
}
}


// showing the book
function showList(){
    const bookDiv = document.getElementById("bookList");
    bookDiv.innerHTML = "";
    bookList.forEach((book)=>{
        const div = document.createElement("div");
        div.classList.add("bookDiv");
        const image = document.createElement("img");
        image.setAttribute("src",book.imgUrl)
        image.classList.add("bookImg")
        const h1 = document.createElement("h1");
        h1.textContent = book.name;
        const p = document.createElement("p");
        p.textContent = book.description;


        div.append(image);
        div.append(h1);
        div.append(p);
        bookDiv.append(div);
    })
}

// search
const search = document.getElementById("search");

search.addEventListener("input", () => {
    const bookDiv = document.getElementById("bookList");
    bookDiv.innerHTML = "";
    let text = search.value;

    let filteredArr = bookList.filter((item) => {
        return item.name.includes(text);
    });

    filteredArr.forEach((book) => {
        const div = document.createElement("div");
        div.classList.add("bookDiv");

        const image = document.createElement("img");
        image.setAttribute("src", book.imgUrl);
        image.classList.add("bookImg");

        const h1 = document.createElement("h1");
        h1.textContent = book.name;

        const p = document.createElement("p");
        p.textContent = book.description;

        div.append(image, h1, p);
        bookDiv.append(div);
    });
});
