import React from 'react';
import styles from './Score.module.css';

const Score = ({ moves, best }) => {

	return (
		<div className={ styles.wrapper }>
			<div className={ styles.score }>
				Your best<br/> score:
				<span className={ styles.output }>
					{ best }
				</span>
			</div>
			<div className={ styles.score }>
				Current<br/> moves:
				<span className={ styles.output }>
					{ moves }
				</span>
			</div>
		</div>
	);
};

export default Score;