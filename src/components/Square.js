function Square({ value, rowIdx, colIdx, addPlayerMove }) {

	return (
		<div className="col" data-row={rowIdx} data-col={colIdx} onClick={
			() => addPlayerMove(rowIdx, colIdx)}>
			{ value == "_" ? "-" : value }
		</div>
	)
}
export default Square;