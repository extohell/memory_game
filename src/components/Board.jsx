import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Board.module.css';
import cn from 'classnames';
import Cell from './Cell';

const changeCellStatus = (state, newStatus, ...id) => {
	return state.map(cell => id.includes(cell.id) ? { ...cell, status: newStatus } : cell);
};

const Board = ({ cellsState, setCellsState, incMoves, gameStatus, setGameStatus, moves, setBestScore }) => {
	const openedCells = useRef([]);

	useEffect(() => {
		if (openedCells.current.length === 2 && !cellsState.find(cell => cell.status === 'fail')) {
			const opened = cellsState.filter(cell => openedCells.current.includes(cell.id));
			if (opened[0].content === opened[1].content) {
				setTimeout(() => {
					setCellsState(cellsState => changeCellStatus(cellsState, 'done', opened[0].id, opened[1].id));
				}, 300);
				openedCells.current = [];
			} else {
				setTimeout(() => {
					setCellsState(cellsState => cellsState.map(cell => {
						return cell.status === 'opened' ? { ...cell, status: 'fail' } : cell;
					}));
				}, 500);
				setTimeout(() => {
					setCellsState(cellsState => changeCellStatus(cellsState, 'closed', opened[0].id, opened[1].id));
					openedCells.current = [];
				}, 1500);
			}
			incMoves();
		}
	}, [ cellsState, incMoves, setCellsState ]);

	useEffect(() => {
		if (cellsState.every(cell => cell.status === 'done')) {
			setTimeout(() => {
				setGameStatus('success');
				setBestScore(moves);
				localStorage.setItem('best-score', moves);
			}, 500);
		}
	}, [ cellsState, setGameStatus, moves, setBestScore ]);

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
			<div className={ cn(styles.start, {
				[styles.hidden]: gameStatus === 'started',
				[styles.success]: gameStatus === 'success'
			}) }>
				<span className={ cn(styles.start__text, {
					[styles.hidden]: gameStatus !== 'ready'
				}) } onClick={ () => setGameStatus('started') }>
					Press to start
				</span>
				<span className={ cn(styles.success, {
					[styles.hidden]: gameStatus !== 'success',
				}) }>
					Success<br/>
					Moves: { moves }
				</span>
			</div>
		</div>
	);
};

export default Board;