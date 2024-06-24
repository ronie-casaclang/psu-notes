//elements
var btnMenu = document.getElementById('btn-menu');
var sidebar = document.querySelector('.sidebar');
var isDisplay = true;

/* Sidebar Menu : (1reference) 
1. set isDisplay value
2. set sidebar display visibility (flex/none)
*/
btnMenu.addEventListener('click', function(){
    if (isDisplay){
        isDisplay = false;
        sidebar.style.display = "none";
    }
    else {
        isDisplay = true;
        sidebar.style.display = "flex";
    }
});
