

console.log('test');


const rootDiv = document.querySelector('#root');

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
