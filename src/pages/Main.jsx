import React, { useContext } from 'react';
import Card from '../components/card/Card';
import classes from './Main.module.css';
import CoinsList from '../components/coinsList/CoinsList';
import Filter from '../components/filter/Filter';
import { CoinsContext } from '../context/CoinsContext';

function Main({ balance, setBalance, setFilteredCoins }) {
	const { coins } = useContext(CoinsContext);

	return (
		<section className={classes.main}>
			<Card balance={balance} setBalance={setBalance} />
			<Filter setFilteredCoins={setFilteredCoins} />
			{coins.length != 0 ? <CoinsList /> : 'Loading..'}
		</section>
	);
}

export default Main;
