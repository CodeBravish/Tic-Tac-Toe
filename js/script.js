function boardCompute(x_Index) {
    board[x_Index] = 1;
    computer_Play();
    console.log('Board Array:' + board)
    boardCheck();

}

function boardCheck() {
    if (board[0] == 1 && board[1] == 1 && board[2] == 1) {
        console.log('Top Horizontal');
        userWin();
        setTimeout(clear, 1000);
        
    } else if (board[3] == 1 && board[4] == 1 && board[5] == 1) {
        console.log('Middle Horizontal');
        userWin();
        setTimeout(clear, 1000);

    } else if (board[6] == 1 && board[7] == 1 && board[8] == 1) {
        console.log('Bottom Horizontal');
        userWin();
        setTimeout(clear, 1000);

    } else if (board[0] == 1 && board[3] == 1 && board[6] == 1) {
        console.log('Left Vertical');
        userWin();
        setTimeout(clear, 1000);

    } else if (board[1] == 1 && board[4] == 1 && board[7] == 1) {
        console.log('Middle Vertical');
        userWin();
        setTimeout(clear, 1000);

    } else if (board[2] == 1 && board[5] == 1 && board[8] == 1) {
        console.log('Right Vertical');
        userWin();
        setTimeout(clear, 1000);

    } else if (board[0] == 1 && board[4] == 1 && board[8] == 1) {
        console.log('Back Diagonal');
        userWin();
        setTimeout(clear, 1000);

    } else if (board[2] == 1 && board[4] == 1 && board[6] == 1) {
        console.log('Forward Diagonal');
        userWin();
        setTimeout(clear, 1000);

    } else if (numberofZeros == 0) {
        console.log('Draw');
        setTimeout(clear, 1000);
    }

    if (board[0] == 2 && board[1] == 2 && board[2] == 2) {
        console.log('Top Horizontal');
        compWin();
        setTimeout(clear, 1000);
        
    } else if (board[3] == 2 && board[4] == 2 && board[5] == 2) {
        console.log('Middle Horizontal');
        compWin();
        setTimeout(clear, 1000);

    } else if (board[6] == 2 && board[7] == 2 && board[8] == 2) {
        console.log('Bottom Horizontal');
        compWin();
        setTimeout(clear, 1000);

    } else if (board[0] == 2 && board[3] == 2 && board[6] == 2) {
        console.log('Left Vertical');
        compWin();
        setTimeout(clear, 1000);

    } else if (board[1] == 2 && board[4] == 2 && board[7] == 2) {
        console.log('Middle Vertical');
        compWin();
        setTimeout(clear, 1000);

    } else if (board[2] == 2 && board[5] == 2 && board[8] == 2) {
        console.log('Right Vertical');
        compWin();
        setTimeout(clear, 1000);

    } else if (board[0] == 2 && board[4] == 2 && board[8] == 2) {
        console.log('Back Diagonal');
        compWin();
        setTimeout(clear, 1000);

    } else if (board[2] == 2 && board[4] == 2 && board[6] == 2) {
        console.log('Forward Diagonal');
        compWin();
        setTimeout(clear, 1000);
    }
}

function userWin() {
    userScore_Compute = parseInt(userScore.innerText) + 1
    userScore.innerText = userScore_Compute
}

function compWin() {
    compScore_Compute = parseInt(compScore.innerText) + 1
    compScore.innerText = compScore_Compute
}

function clear() {
    box.forEach(box => {
        box.innerHTML = ''

    });
    board = [0,0,0,0,0,0,0,0,0]
}

function computer_Play() {
    var random_Play = Math.floor(Math.random() * 9);
    numberofZeros = 0;
    for (let i = 0; i < board.length; i++) {
        if (board[i] == 0) {
            numberofZeros++;
        }
    }
    if (numberofZeros == 0) {
        return;
    }
    if (board[random_Play] === 0) {
        box[random_Play].innerHTML = o;
        console.log('1st Try' + random_Play);
    } else {
        console.log('Used Number:' + random_Play);
        while (board[random_Play] != 0) {
            random_Play = Math.floor(Math.random() * 9);
        }
        box[random_Play].innerHTML = o;
        console.log('2nd Try' + random_Play);
    }
    board[random_Play] = 2
}

function signatureEasterEgg() {
    signature.style.opacity = '0';
    signature.style.bottom = '3.3rem';

}

const userScore = document.getElementById('user-score');
const title = document.getElementById('title');
const signature = document.getElementById('signature');
const compScore = document.getElementById('comp-score');
const x = '<span class="material-icons" id="x">close</span>'
const o = '<span class="material-icons" id="o">radio_button_unchecked</span>'
const box = document.querySelectorAll('.box');
var board = [0,0,0,0,0,0,0,0,0];
var numberofZeros = 0;
const allEqual = arr => arr.every(val => val === arr[0]);

box.forEach((box, index) => {
box.addEventListener('click', () => {
    if (board[index] === 0) {
        box.innerHTML = x;
        boardCompute(index);
    }
})
})

title.addEventListener('click', () => {
    signature.style.opacity = '100';
    setTimeout(() => {
        signature.style.bottom = '2.5rem'
    }, 1);
    setTimeout(signatureEasterEgg, 2000)
})
