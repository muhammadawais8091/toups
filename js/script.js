var x = document.getElementById("toggleData");
var navbarData = document.getElementById("navdata");
var hTop = document.getElementById("h_top");

x.addEventListener("click", function(){
    navbarData.classList.toggle("show");
    hTop.classList.toggle("header-top");
});
 
 