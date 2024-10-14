import React, { useContext } from 'react';
import classes from './CoinsList.module.css';
import { CoinsContext } from '../../context/CoinsContext';

function CoinsList() {
	const { filteredCoins } = useContext(CoinsContext);

	return (
		<ul className={classes.coinsList}>
			{filteredCoins.map(coin => (
				<li key={coin.uuid} className={classes.coinItem}>
					<div className={classes.coinItemInfo}>
						<img
							className={classes.coinItemLogo}
							src={coin.iconUrl}
							alt={coin.name}
						/>
						<p className={classes.brandColor} style={{ '--color': coin.color }}>
							{coin.name}/USD
						</p>
					</div>
					<div className={classes.coinItemPrice}>
						<p>{(+coin.price).toFixed(3)} USD</p>
						<p>{(+coin.btcPrice).toFixed(3)} BTC</p>
					</div>
				</li>
			))}
		</ul>
	);
}

export default CoinsList;
