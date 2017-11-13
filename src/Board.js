import React, { Component } from 'react';
import {Square} from './Square';
import {Scoreboard} from './Scoreboard';
import {checkWinner} from './winner';

export class Board extends Component {
	constructor(props){
		super(props);

		this.state = {
			xTurn: true,
			board: [
				[null, null, null],
				[null, null, null],
				[null, null, null],
			],
			xScore: 0,
			oScore: 0
		}
		this.handleClick = this.handleClick.bind(this);
		this.resetBoard = this.resetBoard.bind(this);
		this.resetScore = this.resetScore.bind(this);
	}

	resetBoard() {
		this.setState({
			board: [
				[null, null, null],
				[null, null, null],
				[null, null, null],
			]
		});
	}

	resetScore() {
		this.setState({
			xScore: 0,
			oScore: 0
		})
	}

	handleClick(x, y){
			const board = this.state.board.slice();
			board[x][y] = this.state.xTurn ? 'X' : 'O';

			this.setState({
				 board: board,
				 xTurn: !this.state.xTurn
				})

			if(checkWinner(this.state.board, this.state.xTurn)){
				if(this.state.xTurn) {
					this.setState({	xScore: this.state.xScore + 1 });
				}else {
					this.setState({ oScore: this.state.oScore + 1 });
				}
			}
		}

	
	render() {
		return(
			<div>
				<Scoreboard xScore={this.state.xScore} oScore={this.state.oScore}/>
				<button onClick={this.resetScore}>Reset Score</button>
				<div className='board'>
					<div className='row'>
						<Square value={this.state.board[0][0]} onClick={() => this.handleClick(0, 0)}/>
						<Square value={this.state.board[0][1]} onClick={() => this.handleClick(0, 1)}/>
						<Square value={this.state.board[0][2]} onClick={() => this.handleClick(0, 2)}/>
					</div>
					<div className='row'>
					  <Square value={this.state.board[1][0]} onClick={() => this.handleClick(1, 0)}/>
						<Square value={this.state.board[1][1]} onClick={() => this.handleClick(1, 1)}/>
						<Square value={this.state.board[1][2]} onClick={() => this.handleClick(1, 2)}/>
					</div>
					<div className='row'>
						<Square value={this.state.board[2][0]} onClick={() => this.handleClick(2, 0)}/>
						<Square value={this.state.board[2][1]} onClick={() => this.handleClick(2, 1)}/>
						<Square value={this.state.board[2][2]} onClick={() => this.handleClick(2, 2)}/>
					</div>
					<button id='reset' onClick={this.resetBoard}>Reset Board</button>
				</div>
			</div>
		)
	}
}
