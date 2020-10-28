import React from 'react';
import cn from 'classnames';
import styles from './Cell.module.css';

const Cell = React.memo(({ status, id, onClick, content }) => {
	console.log('render' + id);
	return (
		<div className={ cn(styles.cell, styles[content], styles[status]) } onClick={ () => onClick(id) }/>
	);
});

export default Cell;