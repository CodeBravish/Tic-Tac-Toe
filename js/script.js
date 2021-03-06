function boardCompute(x_Index) {
	win = 0;
	board[x_Index] = 1;
	
	boardCheck();

	// console.log('Board Array\n' 
	// 			+'['+ board[0] +']' +'['+ board[1] +']' +'['+ board[2] +']\n'
	// 			+'['+ board[3] +']' +'['+ board[4] +']' +'['+ board[5] +']\n'
	// 			+'['+ board[6] +']' +'['+ board[7] +']' +'['+ board[8] +']\n');

}

function boardCheck() {
	if (board[0] == 1 && board[1] == 1 && board[2] == 1) {
		// console.log('Top Horizontal');
		winType = 'TH';
		userWin();
		setTimeout(clear, 1000);
		
	} else if (board[3] == 1 && board[4] == 1 && board[5] == 1) {
		// console.log('Middle Horizontal');
		winType = 'MH';
		userWin();
		setTimeout(clear, 1000);

	} else if (board[6] == 1 && board[7] == 1 && board[8] == 1) {
		// console.log('Bottom Horizontal');
		winType = 'BH';
		userWin();
		setTimeout(clear, 1000);

	} else if (board[0] == 1 && board[3] == 1 && board[6] == 1) {
		// console.log('Left Vertical');
		winType = 'LV';
		userWin();
		setTimeout(clear, 1000);

	} else if (board[1] == 1 && board[4] == 1 && board[7] == 1) {
		// console.log('Middle Vertical');
		winType = 'MV';
		userWin();
		setTimeout(clear, 1000);

	} else if (board[2] == 1 && board[5] == 1 && board[8] == 1) {
		// console.log('Right Vertical');
		winType = 'RV';
		userWin();
		setTimeout(clear, 1000);

	} else if (board[0] == 1 && board[4] == 1 && board[8] == 1) {
		// console.log('Back Diagonal');
		winType = 'BD';
		userWin();
		setTimeout(clear, 1000);

	} else if (board[2] == 1 && board[4] == 1 && board[6] == 1) {
		// console.log('Forward Diagonal');
		winType = 'FD';
		userWin();
		setTimeout(clear, 1000);
	}

	if (win == 1) {
		return;
	}

	switch (mode) {
		case 1:
			minMax_Play();
			break;
		case 2:
			minMax_Play();
			break;
		case 3:
			random_Play();
			break;
	
		default:
			// console.log("Mode not selected");
			break;
	}

	if (numberofZeros == 0) {
		// console.log('Draw');
		winType = 'DRAW';
		draw();
		setTimeout(clear, 1000);
	} else if (board[0] == 2 && board[1] == 2 && board[2] == 2) {
		// console.log('Top Horizontal');
		winType = 'TH';
		compWin();
		setTimeout(clear, 1000);
		
	} else if (board[3] == 2 && board[4] == 2 && board[5] == 2) {
		// console.log('Middle Horizontal');
		winType = 'MH';
		compWin();
		setTimeout(clear, 1000);

	} else if (board[6] == 2 && board[7] == 2 && board[8] == 2) {
		// console.log('Bottom Horizontal');
		winType = 'BH';
		compWin();
		setTimeout(clear, 1000);

	} else if (board[0] == 2 && board[3] == 2 && board[6] == 2) {
		// console.log('Left Vertical');
		winType = 'LV';
		compWin();
		setTimeout(clear, 1000);

	} else if (board[1] == 2 && board[4] == 2 && board[7] == 2) {
		// console.log('Middle Vertical');
		winType = 'MV';
		compWin();
		setTimeout(clear, 1000);

	} else if (board[2] == 2 && board[5] == 2 && board[8] == 2) {
		// console.log('Right Vertical');
		winType = 'RV';
		compWin();
		setTimeout(clear, 1000);

	} else if (board[0] == 2 && board[4] == 2 && board[8] == 2) {
		// console.log('Back Diagonal');
		winType = 'BD';
		compWin();
		setTimeout(clear, 1000);

	} else if (board[2] == 2 && board[4] == 2 && board[6] == 2) {
		// console.log('Forward Diagonal');
		winType = 'FD';
		compWin();
		setTimeout(clear, 1000);
	}
}

function userWin() {
	win = 1;
	userScore_Compute = parseInt(userScore.innerText) + 1;
	userScore.innerText = userScore_Compute;

	winSplash.style.display = 'inline';

	winType_Reveal();

	setTimeout(() => {
		winSplash.style.opacity = '100';
		winSplash.style.transform = 'rotate(-10deg)'
	}, 10)

	setTimeout(() => {
		winSplash.style.opacity = '0';
		winSplash.style.transform = 'rotate(0deg)'
		winSplash.style.display = 'none';
	}, 1000)
}

function draw() {
	drawSplash.style.display = 'inline';

	winType_Reveal();

	setTimeout(() => {
		drawSplash.style.opacity = '100';
		drawSplash.style.transform = 'rotate(-10deg)'
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

	winType_Reveal();

	setTimeout(() => {
		loseSplash.style.opacity = '100';
		loseSplash.style.transform = 'rotate(-10deg)'
	}, 350)

	setTimeout(() => {
		loseSplash.style.opacity = '0';
		loseSplash.style.transform = 'rotate(0deg)'
		loseSplash.style.display = 'none';
	}, 1000)
}

function winType_Reveal() {
	switch (winType) {
		case 'TH':
			box.forEach((box, index) => {
				box.style.opacity = '0.3';
			})

			setTimeout(() => {
				box[0].style.opacity = '1';
				box[1].style.opacity = '1';
				box[2].style.opacity = '1';
			}, 10);

			setTimeout(() => {
				box.forEach((box, index) => {
					box.style.opacity = '1';
				})
			}, 1000);
				
			break;

		case 'MH':
			box.forEach((box, index) => {
				box.style.opacity = '0.3';
			})

			setTimeout(() => {
				box[3].style.opacity = '1';
				box[4].style.opacity = '1';
				box[5].style.opacity = '1';
			}, 10);

			setTimeout(() => {
				box.forEach((box, index) => {
					box.style.opacity = '1';
				})
			}, 1000);

			break;

		case 'BH':
			box.forEach((box, index) => {
				box.style.opacity = '0.3';
			})

			setTimeout(() => {
				box[6].style.opacity = '1';
				box[7].style.opacity = '1';
				box[8].style.opacity = '1';
			}, 10);

			setTimeout(() => {
				box.forEach((box, index) => {
					box.style.opacity = '1';
				})
			}, 1000);

			break;		

		case 'LV':
			box.forEach((box, index) => {
				box.style.opacity = '0.3';
			})

			setTimeout(() => {
				box[0].style.opacity = '1';
				box[3].style.opacity = '1';
				box[6].style.opacity = '1';
			}, 10);

			setTimeout(() => {
				box.forEach((box, index) => {
					box.style.opacity = '1';
				})
			}, 1000);

			break;

		case 'MV':
			box.forEach((box, index) => {
				box.style.opacity = '0.3';
			})

			setTimeout(() => {
				box[1].style.opacity = '1';
				box[4].style.opacity = '1';
				box[7].style.opacity = '1';
			}, 10);

			setTimeout(() => {
				box.forEach((box, index) => {
					box.style.opacity = '1';
				})
			}, 1000);

			break;

		case 'RV':
			box.forEach((box, index) => {
				box.style.opacity = '0.3';
			})

			setTimeout(() => {
				box[2].style.opacity = '1';
				box[5].style.opacity = '1';
				box[8].style.opacity = '1';
			}, 10);

			setTimeout(() => {
				box.forEach((box, index) => {
					box.style.opacity = '1';
				})
			}, 1000);

			break;
		
		case 'BD':
			box.forEach((box, index) => {
				box.style.opacity = '0.3';
			})

			setTimeout(() => {
				box[0].style.opacity = '1';
				box[4].style.opacity = '1';
				box[8].style.opacity = '1';
			}, 10);

			setTimeout(() => {
				box.forEach((box, index) => {
					box.style.opacity = '1';
				})
			}, 1000);

			break;

		case 'FD':
			box.forEach((box, index) => {
				box.style.opacity = '0.3';
			})

			setTimeout(() => {
				box[2].style.opacity = '1';
				box[4].style.opacity = '1';
				box[6].style.opacity = '1';
			}, 10);

			setTimeout(() => {
				box.forEach((box, index) => {
					box.style.opacity = '1';
				})
			}, 1000);

			break;
		default:
			box.forEach((box, index) => {
				box.style.opacity = '0.3';
			})

			setTimeout(() => {
				box.forEach((box, index) => {
					box.style.opacity = '1';
				})
			}, 1000);
			break;
	}
}

function clear() {
	box.forEach(box => {
		box.innerHTML = ''

	});
	board = [0,0,0,0,0,0,0,0,0]
}










// SECOND PLAYER

// Random Computer Algoritm

function random_Play() {
	// console.log('Easy Mode Choice');
	var randomPlay = Math.floor(Math.random() * 9);
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
	if (board[randomPlay] === 0) {
		drawSplash.style.display = 'inline';
		setTimeout(() => {
			box[randomPlay].innerHTML = o;
			setTimeout (() => {
				drawSplash.style.display = 'none';
				box[randomPlay].children[0].style.transform = 'scale(5)';
			}, 20)
		},100)
		// console.log('1st Try - Random Play: ' + randomPlay);
	} else {
		while (board[randomPlay] != 0) {
			// console.log('Used Number: ' + randomPlay);
			randomPlay = Math.floor(Math.random() * 9);
			ntry++;
			// console.log(ntry + ' Try - Random Play: ' + randomPlay);
		}
		drawSplash.style.display = 'inline';
		setTimeout(() => {
			box[randomPlay].innerHTML = o;
			setTimeout (() => {
				box[randomPlay].children[0].style.transform = 'scale(5)';
				drawSplash.style.display = 'none';
			}, 20)
		},100)
	}
	board[randomPlay] = 2;
}


// Mini-Max Computer Algorithm

function minMax_Play() {
	numberofZeros = 0;

	for (let i = 0; i < 9; i++) {
		if (board[i] == 0) {
			numberofZeros++;
		}
	}
	if (numberofZeros == 0) {
		return;
	}
	let bestScore = -Infinity;
	let move;
	for (let i = 0; i < 9; i++) {
		if (board[i] == 0) {
			board[i] = 2;
			let score = minimax(board, 0, false);
			board[i] = 0;
			if (score > bestScore) {
				bestScore = score;
				move = i;
			}
		}
	}
	if(mode == 2) {
		// console.log('Normal Mode Choice');
		let randomChance = Math.floor(Math.random() * 9)
		if (randomChance == Math.floor(Math.random() * 9) || randomChance == Math.floor(Math.random() * 9) || randomChance == Math.floor(Math.random() * 9) || randomChance == Math.floor(Math.random() * 9) || randomChance == Math.floor(Math.random() * 9))  {
			while (board[randomChance] != 0) {
				randomChance = Math.floor(Math.random() * 9);
			}
			// console.log('Normal Mode Random');
			move = randomChance;
		}
	}
	drawSplash.style.display = 'inline';
	setTimeout(() => {
		box[move].innerHTML = o;
		setTimeout (() => {
			box[move].children[0].style.transform = 'scale(5)';
			drawSplash.style.display = 'none';
		}, 20)
	},100)
	board[move] = 2;
}

function minimax(vboard, depth, isMaximizing) {
	let result = checkWinner();
	if (result !== null) {
		return result;
	}

	if (isMaximizing) {
		let bestScore = -Infinity
		for (let i = 0; i < 9; i++) {
			if (vboard[i] == 0) {
				vboard[i] = 2;
				let score = minimax(vboard, depth + 1, false);
				vboard[i] = 0;
				score = score - depth;
				bestScore = Math.max(score, bestScore);
				// if (score > bestScore) {
				// 	bestScore = score + depth;
				// }
			}
		}
		return bestScore;
	} else if (!isMaximizing) {
		let bestScore = Infinity
		for (let i = 0; i < 9; i++) {
			if (vboard[i] == 0) {
				vboard[i] = 1;
				let score = minimax(vboard, depth + 1, true);
				vboard[i] = 0;
				score = score + depth;
				bestScore = Math.min(score, bestScore);
				// if (score < bestScore) {
				// 	bestScore = score + depth;
				// }
			}
		}
		return bestScore;
	}
}

function checkWinner() {
	numberofVirtualZeros = 0;

	for (let i = 0; i < 9; i++) {
		if (board[i] == 0) {
			numberofVirtualZeros++;
		}
	}

	if (board[0] == 2 && board[1] == 2 && board[2] == 2) {
		return 10;	

	} else if (board[3] == 2 && board[4] == 2 && board[5] == 2) {
		return 10;

	} else if (board[6] == 2 && board[7] == 2 && board[8] == 2) {
		return 10;

	} else if (board[0] == 2 && board[3] == 2 && board[6] == 2) {
		return 10;

	} else if (board[1] == 2 && board[4] == 2 && board[7] == 2) {
		return 10;

	} else if (board[2] == 2 && board[5] == 2 && board[8] == 2) {
		return 10;

	} else if (board[0] == 2 && board[4] == 2 && board[8] == 2) {
		return 10;

	} else if (board[2] == 2 && board[4] == 2 && board[6] == 2) {
		return 10;

	} else if (board[0] == 1 && board[1] == 1 && board[2] == 1) {
		return -10;

	} else if (board[3] == 1 && board[4] == 1 && board[5] == 1) {
		return -10;

	} else if (board[6] == 1 && board[7] == 1 && board[8] == 1) {
		return -10;

	} else if (board[0] == 1 && board[3] == 1 && board[6] == 1) {
		return -10;

	} else if (board[1] == 1 && board[4] == 1 && board[7] == 1) {
		return -10;

	} else if (board[2] == 1 && board[5] == 1 && board[8] == 1) {
		return -10;

	} else if (board[0] == 1 && board[4] == 1 && board[8] == 1) {
		return -10;

	} else if (board[2] == 1 && board[4] == 1 && board[6] == 1) {
		return -10;

	} else if (numberofVirtualZeros == 0) {
		return 0;
	}

	return null;
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
var winType = 'NA';
// const xStyle = document.getElementById('x');
// const oStyle = document.getElementById('o');

const easyMode = document.getElementById('easy-mode');
const hardMode = document.getElementById('hard-mode');
const normalMode = document.getElementById('normal-mode');

const x = '<span class="material-icons" id="x">close</span>';
const o = '<span class="material-icons" id="o">radio_button_unchecked</span>';

var win = 0;
var board = [0,0,0,0,0,0,0,0,0];
var numberofZeros = 9;
var mode = 2;

box[3].innerHTML = x;
box[5].innerHTML = o;

box[3].children[0].style.opacity = '0'
box[5].children[0].style.opacity = '0'

setTimeout (() => {
	box[3].children[0].style.opacity = '1'
	box[5].children[0].style.opacity = '1'
	box[3].innerHTML = '';
	box[5].innerHTML = '';
}, 100)

normalMode.classList.add('active-mode');

box.forEach((box, index) => {
box.addEventListener('click', () => {
	if (board[index] === 0) {
		box.innerHTML = x;
		setTimeout (() => {
			box.children[0].style.transform = 'scale(6.2)';
		}, 20)
		boardCompute(index);
	}
})
})

easyMode.addEventListener('click', () => {
	easyMode.classList.add('active-mode');
	hardMode.classList.remove('active-mode');
	normalMode.classList.remove('active-mode');
	mode = 3;
	// console.log('Mode Switched: ' + mode);
	clear()
	userScore.innerText = 0
	compScore.innerText = 0
})

normalMode.addEventListener('click', () => {
	easyMode.classList.remove('active-mode');
	hardMode.classList.remove('active-mode');
	normalMode.classList.add('active-mode');
	mode = 2;
	// console.log('Mode Switched: ' + mode);
	clear()
	userScore.innerText = 0
	compScore.innerText = 0
})

hardMode.addEventListener('click', () => {
	easyMode.classList.remove('active-mode');
	hardMode.classList.add('active-mode');
	normalMode.classList.remove('active-mode');
	mode = 1;
	// console.log('Mode Switched: ' + mode);
	clear()
	userScore.innerText = 0
	compScore.innerText = 0
})

title.addEventListener('click', () => {
	signature.style.opacity = '0.60';
	setTimeout(() => {
		signature.style.bottom = '2.4rem'
	}, 1);
	setTimeout(signatureEasterEgg, 2000)
})
