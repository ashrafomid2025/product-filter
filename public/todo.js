const firstDiv = document.getElementById("firstDiv");
const motivationQuoteList =[
  "یک فرد موفق کسی است که می‌تواند با آجر‌هایی که دیگران به سمت او پرتاب کرده‌اند، پایه و اساس محکمی برای خود بنا کند" ,"پیشرفت روزانه کوچک، در طولانی مدت منجر به نتایج خیره‌ کننده خواهد شد","هر کسی که توانسته است چیزی را بسازد، حتما نظم و انضباط داشته است","موفقیت در این نیست که چه چیزی در پیش رو داریم، موفقیت در این است که چه چیزی در پشت سر به جا می‌گذاریم"
];
const renderBtn = document.getElementById("render");
const todo=[];
const generalDiv = document.getElementById("general-div");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    todo.push(input.value);
});
renderBtn.addEventListener("click",()=>{
    generalDiv.innerHTML = "";
    for(let item of todo){
        const h1 = document.createElement("h1");
        h1.classList.add("h1");
        const text = document.createTextNode(item);
        h1.appendChild(text);
        generalDiv.appendChild(h1);
    }
});
let index = 0;
function showingQuotes(quotes){
    setInterval(()=>{
        firstDiv.innerHTML = ""
                const h1 = document.createElement("h1");
                const text = document.createTextNode(quotes[index]);
                h1.appendChild(text);
                firstDiv.appendChild(h1);
                index = (index+1) % quotes.length;
    },10000);
}
showingQuotes(motivationQuoteList);

