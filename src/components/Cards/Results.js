import Card from '../UI/Card/Card';
import Winners from '../Winners/Winners';

import classes from './Results.module.css';

const Results = () => {
	return (
		<Card>
			<main className={classes.inner}>
				<h2 className={classes.title}>Here are the winners</h2>
				<p className={classes.description}>
					Just insert the prizes and the partipants urls, click the button and the winners will be
					generated for you in a flash.
				</p>
			</main>
			<Winners />
		</Card>
	);
};

export default Results;
