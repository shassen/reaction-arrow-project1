

console.log('test');


// game logic:

const rootDiv = document.querySelector('#root');

const arrowArr = [ { whiteUp: '../images/uparrow.png', redUp: '../images/reduparrow.png'},
                   { whiteRight: '../images/rightarrow.png', redRight: '../images/redrightarrow.png' },
                   { whiteDown: '../images/downarrow.png', redDown: '../images/reddownarrow.png' },
                   { whiteLeft: '../images/leftarrow.png', redLeft: '../images/redleftarrow.png' } ];

//stackoverflow help here:
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            console.log('left');
            break;
        case 38:
            console.log('up');
            break;
        case 39:
            console.log('right');
            break;
        case 40:
            console.log('down');
            break;
    }
};

// add event listeners to img's
const arrowCount = document.querySelectorAll('.arrows');
for (let i = 0; i < arrowCount.length; i += 1) {
    arrowCount[i].addEventListener('click', (e) => {
        console.log(e.target);
    });
}
















// hidden window functions MAJOR help from w3schools.com:

const hidContainer = document.querySelector('.content-container');
const instructWindow = document.querySelector('#instructions');
const leftArrow = document.querySelector('#left-arrow');
leftArrow.onclick = function() {
    instructWindow.style.display = "block";
    rootDiv.style.opacity = "0";

}

const span = document.querySelector('.close');
span.onclick = function() {
    instructWindow.style.display = "none";
    rootDiv.style.opacity = "1";
}

window.onclick = function(e) {
    if (e.target == instructWindow) {
        instructWindow.style.display = "none";
        rootDiv.style.opacity = "1";
    }
}
