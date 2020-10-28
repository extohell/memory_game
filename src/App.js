import React, { useCallback, useState } from 'react';
import Board from './components/Board';
import Score from './components/Score';
import styles from './App.module.css';

const board = [];

for (let i = 0; i < 36; i++) {
	board.push({ status: 'closed', id: i, content: `bg${ i < 18 ? i : i % 18 }` });
}

const shuffle = (array) => {
	let tmp = [ ...array ];
	for (let i = tmp.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[ tmp[i], tmp[j] ] = [ tmp[j], tmp[i] ];
	}
	return tmp;
};

function App() {
	const [ moves, setMoves ] = useState(0);
	const [ bestScore, setBestScore ] = useState(+localStorage.getItem('best-score') || 0);
	const [ gameStatus, setGameStatus ] = useState('ready');
	const [ cellsState, setCellsState ] = useState(shuffle(board));

	const incMoves = useCallback(() => {
		setMoves(moves => ++moves);
	}, []);

	const restart = useCallback(() => {
		setGameStatus('ready');
		setMoves(0);
		setCellsState(shuffle(board));
	}, []);

	return (
		<>
			<Board cellsState={ cellsState } setCellsState={ setCellsState } moves={ moves } incMoves={ incMoves }
				   gameStatus={ gameStatus } setGameStatus={ setGameStatus } setBestScore={ setBestScore }/>
			<Score moves={ moves } best={ bestScore }/>
			<button className={ styles.restart } onClick={ restart }/>
		</>
	);
}

export default App;
