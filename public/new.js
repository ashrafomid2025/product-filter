const headerDiv =document.getElementById("headerDiv");

// select input and addBtn
const input = document.getElementById("input");
const addButton = document.getElementById("addBtn");
let todoList = [];
const showListDiv = document.getElementById("showListDiv");


const showBtn = document.getElementById("showBtn");
showBtn.addEventListener("click",()=>{
    showListDiv.innerHTML = "";
    for(let item of todoList){
        const div = document.createElement("div");
        showListDiv.appendChild(div);
        div.classList.add("todoListDiv");
        const h1 = document.createElement("h1");
        const text = document.createTextNode(item);
        h1.appendChild(text);
        div.appendChild(h1);
    }
})

const toast = document.getElementById("toast");
addButton.addEventListener("click",()=>{
    if(input.value !==""){
        todoList.push(input.value);
        input.value = "";
        toast.classList.remove("hidden");
        setTimeout(()=>{
            toast.classList.add("hidden");
        },2000);
    }
});












const arr =[
    "باور داشته باشید، برای هر مشکلی راهی هست.",
    "باور داشته باشید، راه رسیدن به خواسته هایتان، عزم و اراده خودتان است",
    "باور داشته باشید، اگر به هدفی نرسیدیم، آخر دنیا نیست",
    "باور داشته باشید که انسان ها، قصد آزار شما را ندارند،",
    "باور داشته باشید که همه چیز در دست قدرت لایزال خداوند است.",
    "یک فرد موفق کسی است که می‌تواند با آجر‌هایی که دیگران به سمت او پرتاب کرده‌اند، پایه و اساس محکمی برای خود بنا کند.",
    "پیشرفت روزانه کوچک، در طولانی مدت منجر به نتایج خیره‌ کننده خواهد شد"
];

let number = 0;
function showingQuotes(quotes){
    setInterval(()=>{
        headerDiv.innerHTML = "";
        const h1 =document.createElement("h1");
        h1.dir ="rtl";
        const text = document.createTextNode(quotes[number]);
        h1.appendChild(text);
        headerDiv.appendChild(h1);
        number = (number+1) % quotes.length;
    },3000);

}
showingQuotes(arr);

// 