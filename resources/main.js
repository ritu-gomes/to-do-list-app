let form = document.getElementById("form");
let field = document.getElementById("fst");
let ourlist = document.getElementById("ourlist");

document.addEventListener("submit", (e) =>{
    e.preventDefault();
    creatlist(field.value);
});
 
function creatlist(x){
     let item = `<li>${x} <button onclick="deletelist(this)">delete</button></li>`;
     ourlist.insertAdjacentHTML("beforeend",item);
     field.value = "";
     field.focus();
};

function deletelist(y){
    y.parentElement.remove();

}
