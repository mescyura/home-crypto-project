import React, { useContext, useEffect, useState } from 'react';
import classes from './Filter.module.css';
import { CoinsContext } from '../../context/CoinsContext';
import { useFilteredCoins } from '../../hooks/useFilteredCoins';

function Filter({ setFilteredCoins }) {
	const { coins } = useContext(CoinsContext);

	const { value, setValue } = useFilteredCoins(coins, setFilteredCoins);

	return (
		<input
			className={classes.filter}
			type='text'
			placeholder='Search...'
			value={value}
			onChange={e => setValue(e.target.value)}
		/>
	);
}

export default React.memo(Filter);
