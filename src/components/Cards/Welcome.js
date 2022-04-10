import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { participantsActions } from '../../store/participants-slice';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

import classes from './Welcome.module.css';

const Welcome = () => {
	const [usesFile, setUsersFile] = useState();
	const [prizesFile, setPrizesFile] = useState();
	const hasError = useSelector((state) => state.participants.hasError);
	const dispatch = useDispatch();

	const prizeFileReader = new FileReader();
	const usersFileReader = new FileReader();

	const filesChangeHandler = (event) => setPrizesFile(event.target.files[0]);
	const usersChangeHandler = (event) => setUsersFile(event.target.files[0]);

	const formHandler = (event) => {
		event.preventDefault();

		if (prizesFile) {
			prizeFileReader.onload = (event) => {
				event.preventDefault();
				const text = event.target.result;
				dispatch(participantsActions.csvPrizesToArray(text));
			};
			prizeFileReader.readAsText(prizesFile);
		}

		if (usesFile) {
			usersFileReader.onload = (event) => {
				event.preventDefault();
				const text = event.target.result;
				dispatch(participantsActions.csvUsersToArray(text));
			};
			usersFileReader.readAsText(usesFile);
		}

		dispatch(participantsActions.checkForErrors());
	};

	return (
		<Card>
			<form className={classes.inner} onSubmit={formHandler}>
				<h1 className={classes.title}>Welcome to the Raffle</h1>
				<p className={classes.description}>
					Just insert the prizes and the partipants urls, click the button and the winners will be
					generated for you in a flash. Please ensure that you are using a Google Spreadsheet Url
					and that you have given access to others to read and write.
				</p>
				<div className={classes.inputs}>
					<div className={classes.input}>
						<label htmlFor='prizes'>Prizes Url:</label>
						<input
							type='file'
							name='prizes'
							id='prizes'
							accept='.csv'
							onChange={filesChangeHandler}
						/>
					</div>
					<div className={classes.input}>
						<label htmlFor='participants'>Participants Url:</label>
						<input
							type='file'
							name='participants'
							id='participants'
							accept='.csv'
							onChange={usersChangeHandler}
						/>
					</div>
				</div>
				<Button className={classes.button}>Submit For Results</Button>
				{hasError && (
					<p className={classes.error}>
						One of the files you imported is not formatted correctly. Please read the README to
						understand the requirements.
					</p>
				)}
			</form>
		</Card>
	);
};

export default Welcome;
