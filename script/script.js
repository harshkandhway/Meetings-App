let search = document.getElementById("search-meeting-container");
let searchContainer = document.getElementById("search-for-meeting");

let add = document.getElementById("add-meeting-container");
let addContainer = document.getElementById("add-new");

search.addEventListener("click", function(){
    addContainer.style.display="none";
    searchContainer.style.display = "inline-flex";
});






add.addEventListener("click", function(){
    searchContainer.style.display = "none";
    addContainer.style.display = "inline-flex";
})
