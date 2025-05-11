const mealName = document.getElementById("mealName");
const keyName = document.getElementById("keyName");
const addBtn = document.getElementById("addBtn")
const searchText =  document.getElementById("searchText")
const extraInfo = document.getElementById("extraInfo");
const searchBtn = document.getElementById("searchBtn");
addBtn.addEventListener("click",createMealList);
const mealList = [];
function createMealList(){
    mealList.push({
        [mealName.value]: mealName.value,
        [keyName.value]: extraInfo.value
    });
}