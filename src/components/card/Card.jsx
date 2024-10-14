import React from 'react';
import classes from './Card.module.css';
import { WithUABalance } from '../../helpers/hoc/WithUABalance';

function Card({ balance, setBalance, uaBalance }) {
	const handleBalanceClick = () => {
		setBalance(prev => prev + 10);
	};

	return (
		<div className={classes.card}>
			<h3>Crypto finance</h3>
			<div className={classes.cardBContainer}>
				<p className={classes.cardUser}>&#64;mescyura</p>
				<p onClick={handleBalanceClick} className={classes.cardBalance}>
					{balance}$/{uaBalance} UAH
				</p>
			</div>
		</div>
	);
}

export default WithUABalance(Card);
