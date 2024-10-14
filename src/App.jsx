import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Main from './pages/Main';
import { getCoins } from './api/api';
import { CoinsContext } from './context/CoinsContext';

function App() {
	const [balance, setBalance] = useState(5000);
	const [coins, setCoins] = useState([]);
	const [filteredCoins, setFilteredCoins] = useState([]);

	useEffect(() => {
		const fetchCoins = async () => {
			const data = await getCoins();

			setCoins(data.coins);
			setFilteredCoins(data.coins);
		};

		fetchCoins();
	}, []);

	// console.log(coins);

	return (
		<>
			<CoinsContext.Provider value={{ coins, filteredCoins }}>
				<Header />
				<Main
					balance={balance}
					setBalance={setBalance}
					setFilteredCoins={setFilteredCoins}
				/>
			</CoinsContext.Provider>
		</>
	);
}

export default App;
