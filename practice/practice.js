
// REACTION ARROW :D

// html el variables
const divElU = document.querySelector('#up');
const divElR = document.querySelector('#right');
const divElD = document.querySelector('#down');
const divElL = document.querySelector('#left');
const arrowDiv = document.querySelector('#arrow-div');
const timerEl = document.querySelector('#timer');
const scoreEl = document.querySelector('#score');
const loseEl = document.querySelector('#lose');
const gameOverWindow = document.querySelector('.game-over');
const winLoseStatment = document.querySelector('.win-lose');

// win or lose variables and conditions
let timeLeft = 20;
let timeInterval = setInterval(countdown, 1000);
let score = 0;
let win = 55;
let lose = 0;
let playing = false;

// html div, directions & keyCode arrays
//keyCode array: up = 38, right = 39, down = 40, left = 37
const divEls = [ divElU, divElR, divElD, divElL ];
const direction = [ "up", "right", "down", "left" ];
const key = [ 38, 39, 40, 37 ];


// check for correct keyCode
const checkKey = function(x) {
    document.onkeydown = function(e) {
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
            if (lose === 5) {
                checkWin()
            }
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
    gameOverWindow.style.display = "block";
    arrowDiv.style.opacity = "0";
    scoreEl.innerHTML = 'correct: ' + score + '/55';
    loseEl.innerHTML = 'incorrect: ' + lose + '/5';
    if (score >= 55 && lose < 5) {
        winLoseStatment.innerHTML = "Nice reaction time!"
    } else { winLoseStatment.innerHTML = "Keep practicing to get better!" }
}

// function: timer ---stackoverflow
function countdown() {
    if (timeLeft === -1) {
        clearTimeout(timeInterval);
        checkWin();
    } else {
        timerEl.innerHTML = 'time: ' + timeLeft;
        timeLeft -= 1;
    }
}
// countdown();

// function playGame() {
//     if (playing === true) {
//         countdown();
//     } else {
//         appendArrows(nextSequence());
//     }
// }
// playGame();




// code determined unnecessary:

// white arrow variables
// const wUp = 'images/uparrow.png';
// const wRight = 'images/rightarrow.png';
// const wDown = 'images/downarrow.png';
// const wLeft = 'images/leftarrow.png';

// red arrow variables
// const rUp = 'images/reduparrow.png';
// const rRight = 'images/redrightarrow.png';
// const rDown = 'images/reddownarrow.png';
// const rLeft = 'images/redleftarrow.png';

// const wArrowArr = [ wUp, wRight, wDown, wLeft ];
// const rArrowArr = [ rUp, rRight, rDown, rLeft ];

// testing appended img's
// let testUp = document.createElement('img');
// divElU.appendChild(testUp);
// testUp.src = wArrowArr[0];

// let testRight = document.createElement('img');
// divElR.appendChild(testRight);
// testRight.src = wArrowArr[1];

// let testDown = document.createElement('img');
// divElD.appendChild(testDown);
// testDown.src = wArrowArr[2];

// let testLeft = document.createElement('img');
// divElL.appendChild(testLeft);
// testLeft.src = wArrowArr[3];

