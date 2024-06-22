var btnMode = document.querySelector('#btn-mode');
var btnMode1 = document.querySelector('#btn-mode1');
var dark = true;

switchMode();
btnMode.addEventListener("click", function(){ switchMode(); });
btnMode1.addEventListener("click", function(){ switchMode(); });
function switchMode(){
    if (dark){
        dark = false;
        document.querySelector('#btn-menu').style.filter = "invert(1)";
        document.querySelector('#btn-mode').style.filter = "invert(1)";
        document.querySelector('#btn-home').style.filter = "invert(1)";
        document.querySelector('#btn-mode1').style.filter = "invert(1)";
        document.querySelector('#btn-home1').style.filter = "invert(1)";
        document.querySelector('#btn-close').style.filter = "invert(1)";
        document.querySelector('body').style.color = "lightgray";
        document.querySelector('body').style.backgroundColor = "#171717";
        document.querySelector('header').style.backgroundColor = "#171717";
        document.querySelector('.sidebar').style.backgroundColor = "#171717";
        document.querySelector('.quiz-panel').style.backgroundColor = "#171717";
        document.querySelector('.quiz-panel-header').style.backgroundColor = "#171717";
        //mode.innerText = "Switch to Light Mode";
        inputColor(dark);
    }
    else {
        dark = true;
        document.querySelector('#btn-menu').style.filter = "invert(0)";
        document.querySelector('#btn-mode').style.filter = "invert(0)";
        document.querySelector('#btn-home').style.filter = "invert(0)";
        document.querySelector('#btn-mode1').style.filter = "invert(0)";
        document.querySelector('#btn-home1').style.filter = "invert(0)";
        document.querySelector('#btn-close').style.filter = "invert(0)";
        document.querySelector('body').style.color = "black";
        document.querySelector('body').style.backgroundColor = "white";
        document.querySelector('header').style.backgroundColor = "white";
        document.querySelector('.sidebar').style.backgroundColor = "white";
        document.querySelector('.quiz-panel').style.backgroundColor = "white";
        document.querySelector('.quiz-panel-header').style.backgroundColor = "white";
        //mode.innerText = "Switch to Dark Mode";
        inputColor(dark);
    }
}


function inputColor(dark){
    if (dark){
        var inputAnswer = document.querySelectorAll('.input-answer');
        for (let i=0; i<inputAnswer.length; i++) {
            inputAnswer[i].style.color = "black";
            //inputAnswer[i].style.borderBottom = "2px solid black";
        }
    }
    else {
        var inputAnswer = document.querySelectorAll('.input-answer');
        for (let i=0; i<inputAnswer.length; i++) {
            inputAnswer[i].style.color = "white";
            //inputAnswer[i].style.borderBottom = "2px solid white";
        }
    }
}