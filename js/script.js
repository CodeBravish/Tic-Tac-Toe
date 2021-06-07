function boardCompute(x_Index) {
	win = 0;
	board[x_Index] = 1;
	console.log('Board Array\n' 
				+'['+ board[0] +']' +'['+ board[1] +']' +'['+ board[2] +']\n'
				+'['+ board[3] +']' +'['+ board[4] +']' +'['+ board[5] +']\n'
				+'['+ board[6] +']' +'['+ board[7] +']' +'['+ board[8] +']\n');
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
	}

	if (win == 1) {
		return;
	}

	computer_Play();

	if (numberofZeros == 0) {
		console.log('Draw');
		draw();
		setTimeout(clear, 1000);
	} else if (board[0] == 2 && board[1] == 2 && board[2] == 2) {
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
	win = 1;
	userScore_Compute = parseInt(userScore.innerText) + 1;
	userScore.innerText = userScore_Compute;

	winSplash.style.display = 'inline';

	setTimeout(() => {
		winSplash.style.opacity = '100';
		winSplash.style.transform = 'rotate(-15deg)'
	}, 10)

	setTimeout(() => {
		winSplash.style.opacity = '0';
		winSplash.style.transform = 'rotate(0deg)'
		winSplash.style.display = 'none';
	}, 1000)
}

function draw() {
	drawSplash.style.display = 'inline';

	setTimeout(() => {
		drawSplash.style.opacity = '100';
		drawSplash.style.transform = 'rotate(-15deg)'
	}, 10)

	setTimeout(() => {
		drawSplash.style.opacity = '0';
		drawSplash.style.transform = 'rotate(0deg)'
		drawSplash.style.display = 'none';
	}, 1000)
}

function compWin() {
	compScore_Compute = parseInt(compScore.innerText) + 1
	compScore.innerText = compScore_Compute

	loseSplash.style.display = 'inline';

	setTimeout(() => {
		loseSplash.style.opacity = '100';
		loseSplash.style.transform = 'rotate(-15deg)'
	}, 350)
	
	setTimeout(() => {
		loseSplash.style.opacity = '0';
		loseSplash.style.transform = 'rotate(0deg)'
		loseSplash.style.display = 'none';
	}, 1000)
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
	let ntry = 1;

	for (let i = 0; i < board.length; i++) {
		if (board[i] == 0) {
			numberofZeros++;
		}
	}
	if (numberofZeros == 0) {
		return;
	}
	if (board[random_Play] === 0) {
		drawSplash.style.display = 'inline';
		setTimeout(() => {
			box[random_Play].innerHTML = o;
			drawSplash.style.display = 'none';
		},250)
		console.log('1st Try - Random Play: ' + random_Play);
	} else {
		while (board[random_Play] != 0) {
			console.log('Used Number: ' + random_Play);
			random_Play = Math.floor(Math.random() * 9);
			ntry++;
			console.log(ntry + ' Try - Random Play: ' + random_Play);
		}
		drawSplash.style.display = 'inline';
		setTimeout(() => {
			box[random_Play].innerHTML = o;
			drawSplash.style.display = 'none';
		},250)
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
const box = document.querySelectorAll('.box');
const winSplash = document.getElementById('win');
const loseSplash = document.getElementById('lose');
const drawSplash = document.getElementById('draw');

const x = '<span class="material-icons" id="x">close</span>';
const o = '<span class="material-icons" id="o">radio_button_unchecked</span>';

var win = 0;
var board = [0,0,0,0,0,0,0,0,0];
var numberofZeros = 9;

box.forEach((box, index) => {
box.addEventListener('click', () => {
	if (board[index] === 0) {
		box.innerHTML = x;
		boardCompute(index);
	}
})
})

title.addEventListener('click', () => {
	signature.style.opacity = '0.60';
	setTimeout(() => {
		signature.style.bottom = '2.4rem'
	}, 1);
	setTimeout(signatureEasterEgg, 2000)
})
