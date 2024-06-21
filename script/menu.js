var btnMenu = document.getElementById('btn-menu');
var main = document.querySelector('.main');
var sidebar = document.querySelector('.sidebar');
var dp = true;

btnMenu.addEventListener('click', function(){
    if (dp){
        dp = false;
        sidebar.style.display = "none";
    }
    else {
        dp = true;
        sidebar.style.display = "flex";
    }
});

/*
main.addEventListener('click', () => {
    dp = false;
    sidebar.style.display = "none";
});
*/