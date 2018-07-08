
const arrowArr = [ { whiteUp: '../images/uparrow.png', redUp: '../images/reduparrow.png' },
                   { whiteRight: '../images/rightarrow.png', redRight: '../images/redrightarrow.png' },
                   { whiteDown: '../images/downarrow.png', redDown: '../images/reddownarrow.png' },
                   { whiteLeft: '../images/leftarrow.png', redLeft: '../images/redleftarrow.png' } ];


//key object:
const key = [ { up: '38', right: '39', down: '40', left: '37' } ];

// add event listeners to img's
const arrowCount = document.querySelectorAll('.arrows');
for (let i = 0; i < arrowCount.length; i += 1) {
    arrowCount[i].addEventListener('click', (e) => {
        console.log(e.target);
    });
}

const rootDiv = document.querySelector('#root');

// hidden window functions MAJOR help from w3schools.com:
const hidContainer = document.querySelector('.content-container');
const instructWindow = document.querySelector('#instructions');
const instructContent = document.querySelector('#instruction-content');
const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');
const downArrow = document.querySelector('#down-arrow');
const startWindow = document.querySelector('#start-game');
const footer = document.querySelector('footer');

// left arrow functions and styling
leftArrow.onclick = function() {
    instructWindow.style.display = "block";
    instructContent.style.height = "300px";
    rootDiv.style.opacity = "0";

}
const span = document.querySelector('.close');
span.onclick = function() {
    instructWindow.style.display = "none";
    rootDiv.style.opacity = "1";
}
document.onclick = function(e) {
    if (e.target == instructWindow) {
        instructWindow.style.display = "none";
        rootDiv.style.opacity = "1";
    }
}

// right arrow functions and styling
const rightRed = arrowArr.redRight;
const startBody = document.querySelector('#start-body');
rightArrow.onclick = function(e) {
    // window.xxxx to handle default behavior of directional keys
    e.preventDefault();
    startWindow.style.display = "block";
    rootDiv.style.opacity = "0";
    footer.style.opacity = "0";
}
const timer = document.querySelector('#timer');
const startSpan = document.querySelector('#start-close');
startSpan.onclick = function() {
    startWindow.style.display = "none";
    rootDiv.style.opacity = "1";
    footer.style.opacity = "1";
    // timer.innerText = "Time: " + Date.now();
}