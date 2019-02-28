let startingX = 3;
let startingY = 2;
let startingScore = 1;
let isCorrect;
let correctTiles = [];

// create matrix 
function createGrid(width, height) {
    getRightTiles(startingX, startingY, startingY + 2);
	let container = document.getElementById('container');
    container.innerHTML = '';

    for (let i = 0; i < width; i++) {
        let br = document.createElement('br');
        container.appendChild(br);
        let x = document.createElement('div');
        x.className = 'box';
        for (let j = 0; j < height; j++) {

            let y = document.createElement('div');
            y.className = 'box';

            x.onclick = flipTilesScore;
            y.onclick = flipTilesScore;

            if (correctTiles[i][j] == 1) {
                y.classList.add('correct');
                x.classList.add('incorrect');
            } else {
                y.classList.add('incorrect');
                x.classList.add('incorrect');
            }

            if(y.classList.contains('correct')) {
                y.classList.add('flipCorrect');
                setTimeout(function() {
                    y.classList.remove('flipCorrect');
                    y.classList.add('back');
                }, 2000);
            }
            container.appendChild(x);
            container.appendChild(y);
           // console.log(container);
        }
    }
}

// rotates the matrix 90 degrees
function rotate() {
    let rotate = document.getElementById('container');
    rotate.classList.add('containerrotate');
}

// clear the flips
function clear() {
    let hoverTiles = document.querySelectorAll(".box correct");
    hoverTiles.forEach(item => {
        item.classList.remove('correct');
    });
}

// generate a random number
function generateRandomTiles(max) {
    return Math.floor(Math.random() * max);
}

function getRightTiles(tileX, tileY, correcTiles) {
    for(let i = 0; i < tileX; i++) {
        correctTiles[i] = [];
        for(let j = 0; j < tileY; j++) {
            correctTiles[i][j] = 0;
        }
    }

    for(let i = 0; i < correcTiles; i++) {
        let x = generateRandomTiles(tileX);
        let y = generateRandomTiles(tileY);
        if (correctTiles[x][y] == 0) {
            correctTiles[x][y] = 1;
        } else {
            i--;
        } 
        isCorrect = correctTiles;
        console.log(isCorrect);
    }
}

function nextLevel() {
    if(startingX == rowCount && columnCount <= 7) {
        columnCount++;
    }
    else if(columnCount > rowCount && columnCount <= 7) {
        rowCount++;
    }
}

$(document).ready(function() {
    setTimeout(function() {
        setTimeout(function() {
            rotate();
        }, 1000);
    }, 1500);
});

function flipTilesScore() {
    if (this.classList.contains('correct')) {
        this.classList.remove('back');
        this.classList.add('flipCorrect');
        startingScore++;
    } else if (this.classList.contains('incorrect')) {
        this.classList.add('flipIncorrect');
        startingScore--;
        if(startingScore == 0) {
            alert('You lose');
            window.location = 'summary.html';
        }
    }
    document.getElementById('score').innerHTML = 'Score: ' + startingScore;
}   

function terminateGame() {
    alert('Terminating game');
    window.location = 'summary.html';
}

// load the board and right tiles
window.addEventListener('load', function() {
    // generate a starting 3x3 grid
    createGrid(startingX, startingY);
    document.getElementById('terminate').onclick = terminateGame;
});

