import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Board.module.css';
import Cell from './Cell';

const changeCellStatus = (state, newStatus, ...id) => {
	return state.map(cell => id.includes(cell.id) ? { ...cell, status: newStatus } : cell);
};

const Board = ({ layout }) => {
	const [ cellsState, setCellsState ] = useState(layout);
	const openedCells = useRef([]);

	useEffect(() => {
		if (openedCells.current.length === 2 && !cellsState.find(cell => cell.status === 'fail')) {
			const opened = cellsState.filter(cell => openedCells.current.includes(cell.id));
			if (opened[0].content === opened[1].content) {
				setCellsState(cellsState => changeCellStatus(cellsState, 'done', opened[0].id, opened[1].id));
				openedCells.current = [];
			} else {
				setCellsState(cellsState => cellsState.map(cell => {
					return cell.status === 'opened' ? { ...cell, status: 'fail' } : cell;
				}));
				setTimeout(() => {
					setCellsState(cellsState => changeCellStatus(cellsState, 'closed', opened[0].id, opened[1].id));
					openedCells.current = [];
				}, 1000);
			}
		}
	}, [ cellsState ]);

	const onCLick = useCallback((id) => {
		if (openedCells.current.length === 2) return;
		openedCells.current.push(id);
		setCellsState((cellsState) => changeCellStatus(cellsState, 'opened', id));
	}, []);

	return (
		<div className={ styles.wrapper }>
			{
				cellsState.map((cell) => {
					return <Cell key={ cell.id } status={ cell.status } id={ cell.id } content={ cell.content }
								 onClick={ onCLick }/>;
				})
			}
		</div>
	);
};

export default Board;