

function Square({ value, rowIdx, colIdx }) {
	return (
		<div className="col" data-row={rowIdx} data-col={colIdx}>
			col
		</div>
	)
}
export default Square;