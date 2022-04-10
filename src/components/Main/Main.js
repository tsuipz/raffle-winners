import { useSelector } from 'react-redux';
import Results from '../Cards/Results';
import Welcome from '../Cards/Welcome';

import classes from './Main.module.css';

const Main = () => {
	const receivedUsers = useSelector((state) => state.participants.receivedUsers);
	const receivedPrizes = useSelector((state) => state.participants.receivedPrizes);

	return (
		<div className={`${classes.main} center`}>
			{(!receivedUsers || !receivedPrizes) && <Welcome />}
			{receivedUsers && receivedPrizes && <Results />}
		</div>
	);
};

export default Main;
