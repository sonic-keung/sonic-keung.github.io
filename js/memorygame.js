let startingX = 3; // starting tile X
let startingY = 2; // starting tile Y
let maxSize = 7; // max size of the board
let minSizeY = 2; 
let minSizeX = 3;
let startingScore = 1;
let isCorrect;
let numOfTiles = startingY + 2;
let correctTiles = [];
let perfectTry = true;
let miss = 0;

// create matrix 
function createGrid(width, height) {
    getRightTiles(startingX, startingY);
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

            if (correctTiles[i][j] == 1) {
                y.classList.add('correct');
                //x.classList.add('correct');
            } else {
                y.classList.add('incorrect');
                x.classList.add('incorrect');
            }

            if (y.classList.contains('correct')) {
                y.classList.add('flipCorrect');
                setTimeout(function() {
                    y.classList.remove('flipCorrect');
                    y.classList.add('back');
                }, 2000);
            }

            x.onclick = flipTilesScore;
            y.onclick = flipTilesScore;

            /*
            if(x.classList.contains('correct')) {
                x.classList.add('flipCorrect');
                setTimeout(function() {
                    x.classList.remove('flipCorrect');
                    x.classList.add('back');
                }, 2000);
            }
            */
            container.appendChild(x);
            container.appendChild(y);
           // console.log(container);
        }
    }
}

// rotates the matrix 90 degrees
function rotate() {
    let rotate = document.getElementById('container');
    rotate.classList.remove('containerrotate');
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

// randomly select correct tiles
function getRightTiles(tileX, tileY) {
    for(let i = 0; i < tileX; i++) {
        correctTiles[i] = [];
        for(let j = 0; j < tileY; j++) {
            correctTiles[i][j] = 0;
        }
    }

    for(let i = 0; i < numOfTiles; i++) {
        let x = generateRandomTiles(tileX);
        let y = generateRandomTiles(tileY);
        if (correctTiles[x][y] == 0) {
            correctTiles[x][y] = 1;
        } else {
            i--;
        } 
        isCorrect = numOfTiles;
        console.log(isCorrect);
    }
}

// check score
function flipTilesScore() {
    if (this.classList.contains('correct')) {
        this.classList.remove('back');
        this.classList.add('flipCorrect');
        startingScore++;
        isCorrect--;

        if (miss === 0) {
            perfectTry = true;
        }

        console.log(isCorrect);
    } else if (this.classList.contains('incorrect')) {
        this.classList.remove('back');
        this.classList.add('flipIncorrect');
        startingScore--;
        //perfectTry = false;
        miss++;

        if (miss !== 0) {
            perfectTry = false;
        }

        if(startingScore == 0) {
            alert('You lose');
            window.location = 'summary.html';
        }
    }

    if (isCorrect == 0) {
        setTimeout(function () {
            clearBoard();
    
        }, 2000);

        playSound();

        setTimeout(function() {
            nextStage();
            let rotate = document.getElementById('container');
            rotate.classList.remove('containerrotate');
        }, 5000);
    }
    document.getElementById('score').innerHTML = 'Score: ' + startingScore;
}   

// increment or decrement board by 1 after each stage
function nextStage() {
    // reset miss counter
    miss = 0;
    if (perfectTry === false) {
        if (startingX <= minSizeX && startingY <= minSizeY) {
            startingX = 3;
            startingY = 2;
            numOfTiles = 3;
        } else {
            startingX--;
            startingY--;
        }
        numOfTiles--;
        getRightTiles(startingX, startingY);
        createGrid(startingX, startingY);
        setTimeout(function() {
            rotate();
        }, 3000);
    } else if (perfectTry === true) {
        //perfectTry = true;
        if (startingX <= maxSize && startingY <= maxSize) {
            startingX++;
            startingY++;
        } 
        numOfTiles++;
        getRightTiles(startingX, startingY);
        createGrid(startingX, startingY);
        setTimeout(function() {
            rotate();
        }, 3000);
    }
}

// terminate the game
function terminateGame() {
    if (confirm('Terminating game, quit?')) {
        localStorage.setItem("Score", startingScore);
        window.location = 'summary.html';
    }
}

// plays audio 
function playSound() {
    let playSound = document.getElementById('soundTest');
    playSound.play();
}

// clear the whole board
function clearBoard() {
    let tiles = document.getElementById('container');
    while(tiles.hasChildNodes()) {
        tiles.removeChild(tiles.firstChild);
    }
}

// load the board and correct tiles
window.addEventListener('load', function() {
    // generate a starting 3x3 grid
    createGrid(startingX, startingY);
    setTimeout(function() {
        this.onclick = false;
        rotate();
    }, 3000);
    document.getElementById('terminate').onclick = terminateGame;
});



