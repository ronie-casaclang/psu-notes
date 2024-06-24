// elements
var btnMode = document.querySelector('#btn-mode');
var btnMode1 = document.querySelector('#btn-mode1');
var isDark = !true; //(2references: SwitchMode(), mode.LoadQuiz())

// events
document.addEventListener("DOMContentLoaded", SwitchMode());
btnMode.addEventListener("click", function(){ SwitchMode(); });
btnMode1.addEventListener("click", function(){ SwitchMode(); });


/* Switch Mode : (3references: DOMContentLoaded, btnMode.click, btnMode1.click) 
1. set isDark value
2. set btn menu inverted color (b/w)
3. set btn mode inverted color (b/w)
4. set btn home inverted color (b/w)
5. set btn mode1 inverted color (b/w)
6. set btn home1 inverted color (b/w)
7. set btn close inverted color (b/w)
8. set body text color (lightgray/black)
9. set body bg color (b/w)
10. set header color (b/w)
11. set sidebar color (b/w)
12. set quiz panel bg color (b/w)
13. set quiz panel header bg color (b/w)
14. set answer input text color (inputColor())
*/
function SwitchMode(){
    if (isDark){
        isDark = false;
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
        SetInputColor(isDark);
    }
    else {
        isDark = true;
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
        SetInputColor(isDark);
    }
}

/* Set Answer Input Text Color : (2references: SwitchMode(), mode.LoadQuiz()) 
1. set inputAnswer as array of all text inputs
2. repeat til reach inputAnswer max limit
3. set inputAnswer index element its text color (b/w)
*/
function SetInputColor(isDark){
    if (isDark){
        var inputAnswer = document.querySelectorAll('.input-answer');
        for (let i=0; i<inputAnswer.length; i++) {
            inputAnswer[i].style.color = "black";
        }
    }
    else {
        var inputAnswer = document.querySelectorAll('.input-answer');
        for (let i=0; i<inputAnswer.length; i++) {
            inputAnswer[i].style.color = "white";
        }
    }
}