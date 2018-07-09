
const arrowArr = [ { whiteUp: '../images/uparrow.png', redUp: '../images/reduparrow.png' },
                   { whiteRight: '../images/rightarrow.png', redRight: '../images/redrightarrow.png' },
                   { whiteDown: '../images/downarrow.png', redDown: '../images/reddownarrow.png' },
                   { whiteLeft: '../images/leftarrow.png', redLeft: '../images/redleftarrow.png' } ];



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

const timer = document.querySelector('#timer');
const startSpan = document.querySelector('#start-close');
startSpan.onclick = function() {
    startWindow.style.display = "none";
    rootDiv.style.opacity = "1";
    footer.style.opacity = "1";
    // timer.innerText = "Time: " + Date.now();
    
}


// Reaction Arrow Game:

// Modal div elements and array
const divElU = document.querySelector('#img-up');
const divElR = document.querySelector('#img-right');
const divElD = document.querySelector('#img-down');
const divElL = document.querySelector('#img-left');
const timerEl = document.querySelector('#timer');

// html div, directions & keyCode arrays
//keyCode array: up = 38, right = 39, down = 40, left = 37
const divEls = [ divElU, divElR, divElD, divElL ];
const direction = [ "up", "right", "down", "left" ];
const key = [ 38, 39, 40, 37 ];

// win or lose variables and conditions
let timeLeft = 20;
let timeInterval = setInterval(countdown, 1000);
let score = 0;
let win = 55;
let lose = 0;
let playing = false;


// function: create img els, append to div containers & add event listeners
function createEls() {
    for (let i = 0; i < divEls.length; i += 1) {
        let images = document.createElement('img');
        images.dataset.key = key[i];
        images.dataset.dir = direction[i];
        images.id = direction[i];
        divEls[i].appendChild(images);
    }
}
createEls();

// check for correct keyCode
const checkKey = function(x) {
    window.onkeydown = function(e) {
        if (e.keyCode === 37 && x === 'left') {
            score += 1;
            // scoreEl.innerHTML = 'correct: ' + score + '/55';
            appendArrows(nextSequence());
        } else if (e.keyCode === 38 && x === 'up') {
            score += 1;
            // scoreEl.innerHTML = 'correct: ' + score + '/55';
            appendArrows(nextSequence());
        } else if (e.keyCode === 39 && x === 'right') {
            score += 1;
            // scoreEl.innerHTML = 'correct: ' + score + '/55';
            appendArrows(nextSequence());
        } else if (e.keyCode === 40 && x === 'down') {
            score += 1;
            // scoreEl.innerHTML = 'correct: ' + score + '/55';
            appendArrows(nextSequence());
        } else {
            lose += 1;
            // loseEl.innerHTML = 'incorrect: ' + lose + '/5';
        }
    }
}

// function: generate randomSequence array
let gameSequence = [];
const randomSequence = function() {
    for (let i = 0; i < 500; i += 1) {
        gameSequence.push(direction[Math.floor(Math.random() * direction.length)]);
    };
    return gameSequence;
};
randomSequence();


// image element variables and array
let imgEls = document.querySelectorAll(' [data-dir] ');
const imgUp = imgEls[0];
const imgRight = imgEls[1];
const imgDown = imgEls[2];
const imgLeft = imgEls[3];
const imgArray = [ imgUp, imgRight, imgDown, imgLeft ];

// function: next sequence
function nextSequence() {
        return gameSequence.shift()
}
nextSequence();

// function: show arrows to user
function appendArrows(x) {
    for (let i = 0; i < imgArray.length; i += 1) {
        imgArray[i].src = `images/${direction[i]}arrow.png`;
        if (x === direction[i]) {
            imgArray[i].src = `images/red${x}arrow.png`;
        }
    }
    checkKey(x)
}
appendArrows(nextSequence());

// function: check win/lose conditions
function checkWin() {
    if (score >= 55 && lose < 5) {
        alert('Nice reaction time!');
    } else { alert('Too slow, refresh and try again..'); }
}

// function: timer ---stackoverflow
function countdown() {
    // e.preventDefault();
    if (timeLeft === -1) {
        clearTimeout(timeInterval);
        checkWin();
    } else {
        timerEl.innerHTML = 'time: ' + timeLeft;
        timeLeft -= 1;
    }
}
// countdown();

const rightRed = arrowArr.redRight;
const startBody = document.querySelector('#start-body');
rightArrow.addEventListener('click', (e) => {
    // window.xxxx to handle default behavior of directional keys
    // e.preventDefault();
    console.log(e.target);
    playing = true;
    startWindow.style.display = "block";
    rootDiv.style.opacity = "0";
    footer.style.opacity = "0";
});

// function playGame() {
//     if (playing === true) {
//         countdown();
//     } else {
//         appendArrows(nextSequence());
//     }
// }
// playGame();













