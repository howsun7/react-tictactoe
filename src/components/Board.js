import { useState } from 'react';
import Square from './Square';

const initialBoard = [
	['_', '_', '_'],
	['_', '_', '_'],
	['_', '_', '_'],
]

const markTypes = ['X', 'O'];
const firstMoverMark = markTypes[0];

function Board() {
	const [boardState, setBoardState] = useState(initialBoard);
	const [isFirstMoveTurn, setIsFirstMoverTurn] = useState(true);

	const board = boardState.map((row, rowIdx) => 
		<div className="row" data-row={rowIdx}>
		{ row.map((col, colIdx) => 			
			<Square rowIdx={rowIdx} colIdx={colIdx} value={col} />
		)}
		</div>
	);

	return (
		<div>
		{ board }
		</div>
	)
}

export default Board;