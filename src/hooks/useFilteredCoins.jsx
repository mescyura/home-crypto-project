import React, { useEffect, useState } from 'react';

export const useFilteredCoins = (coins, setFilteredCoins) => {
	const [value, setValue] = useState('');

	useEffect(() => {
		const filteredCoins = coins.filter(coin => {
			return coin.name.toLowerCase().includes(value.toLowerCase());
		});

		setFilteredCoins(filteredCoins);
	}, [value]);

	return { value, setValue };
};
