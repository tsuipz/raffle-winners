import React from 'react';
import { useSelector } from 'react-redux';

import classes from './Winners.module.css';

const Winners = () => {
	const usersArr = useSelector((state) => state.participants.users);
	const prizesArr = useSelector((state) => state.participants.prizes);

	const pickWinners = () => {
		const winners = [];
		for (let i = 0; i < prizesArr.length; i++) {
			const currentUser = usersArr[i];
			const currentPrize = prizesArr[i];

			winners.push({
				...currentUser,
				id: Math.random(),
				prize: currentPrize,
			});
		}

		console.log(winners);

		return winners;
	};

	return (
		<section className={classes.winners}>
			{pickWinners().map((item, idx) => (
				<article key={item.id}>
					<div>{idx + 1}.</div>
					<div>{item.name}</div>
					<div>{item.email}</div>
					<div>{item.prize}</div>
				</article>
			))}
		</section>
	);
};

export default Winners;
