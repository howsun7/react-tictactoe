import { useState } from 'react';
import Square from './Square';
import { checkWinner } from '../helpers';

const initialBoard = [
	['_', '_', '_'],
	['_', '_', '_'],
	['_', '_', '_'],
]

const markTypes = ['X', 'O'];
const firstMoverMark = markTypes[0];
const otherMoverMark = markTypes[1];

function Board() {
	const [boardState, setBoardState] = useState(initialBoard);
	const [isFirstMoverTurn, setIsFirstMoverTurn] = useState(true);

	const startFreshBoard = () => {
		setBoardState(initialBoard);
		return;
	}

	const addPlayerMove = (rowIdx, colIdx) => {
		// copy current state
		let currentState = [...boardState];
		let mark = isFirstMoverTurn ? firstMoverMark : otherMoverMark;
		currentState[rowIdx][colIdx] = mark;
		setBoardState(currentState);

		// check if anybody wins
		const winnerIsBorn = checkWinner(currentState);

		// if somebody wins, congradulate winner and ask if play wants another game
		if (winnerIsBorn) {
			alert("you win!!! want another game?");
			return;
		}

		// if nobody wins, keep going and change turn 
		// 1. display new board state

		// 2. change turn
		setIsFirstMoverTurn(isFirstMoverTurn ? false : true);

	}

	const board = boardState.map((row, rowIdx) => 
		<div className="row" data-row={rowIdx}>
		{ row.map((col, colIdx) => 			
			<Square rowIdx={rowIdx} colIdx={colIdx} value={col} addPlayerMove={addPlayerMove} />
		)}
		</div>
	);

	return (
		<div className='board'>
		{ board }
		</div>
	)
}

export default Board;