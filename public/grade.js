const isLargeScreen = window.innerWidth >= 1024; // Adjust breakpoint as needed (e.g., 1024px for lg)

const count = isLargeScreen ? 49 : 18;

for (let i = 1; i <= count; i++) {
    const div = document.createElement("div");
    div.classList.add("div-r");
    const divG = document.getElementById("div");
    divG.append(div);
}
const text = document.getElementById("text");
const tx = "Hi there welcome back to our website";
const h1 = document.createElement("h1");
let index = 0;
h1.textContent = "";
text.append(h1);

setInterval(() => {
    h1.textContent += tx[index];
    index++;
    if (index > tx.length) {
        index = 0;
        h1.textContent = ""; 
    }
}, 200);

