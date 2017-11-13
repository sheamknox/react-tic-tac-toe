
export function checkWinner(board, xTurn) {

		for(let i = 0; i < board.length; i++) {
			for(let j = 0; j < board[i].length; j++) {
				if(board[i][j] != null){
					if(board[i][j] === board[i][j+1] && board[i][j] === board[i][j+2]){
						if(xTurn) {
							alert('X wins');
							return true
						} else {
							alert('O wins');
							return true
						}
				  }
			  }
			}
		}

		for(let i = 0; i < board.length; i++) {
			for(let j = 0; j < board[i].length; j++) {
				if(board[i][j] != null){
					if(board[0][j] === board[1][j] && board[0][j] === board[2][j]){
						if(xTurn) {
							alert('X wins');
							return true
						} else {
							alert('O wins');
							return true
						}
				  }
			  }
			}
		}

		for(let i = 0; i < board.length; i++) {
			for(let j = 0; j < board[i].length; j++) {
				if(board[1][1] != null){
					if(board[0][0] === board[1][1] && board[0][0] === board[2][2])
						if(xTurn) {
							alert('X wins');
							return true
						} else {
							alert('O wins');
							return true
						}

					if(board[0][2] === board[1][1] && board[0][2] === board[2][0])
						if(xTurn) {
							alert('X wins');
							return true
						} else {
							alert('O wins');
							return true
						}
			  }
			}
		}
	}



