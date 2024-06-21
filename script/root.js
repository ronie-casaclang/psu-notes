//set page icon
var icon = document.querySelector("#icon");
icon.href = "../img/icon.png";

//set logo
var logo = document.querySelector("#logo");
logo.src = "../img/icon.png";

//home page
var home = document.querySelector("#btn-home");
home.addEventListener('click', function(){ location.href = "main.html"; });