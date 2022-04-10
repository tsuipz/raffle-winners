import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	users: [],
	prizes: [],
	receivedUsers: false,
	receivedPrizes: false,
	hasError: false,
};

const participantsSlice = createSlice({
	name: 'participants',
	initialState,
	reducers: {
		csvUsersToArray(state, action) {
			const maxParticipants = [];
			const csvHeader = action.payload.slice(0, action.payload.indexOf('\n')).split(',');
			const csvRows = action.payload.slice(action.payload.indexOf('\n') + 1).split('\n');

			const array = csvRows.map((i) => {
				const titles = {
					Amount: true,
					Email: true,
					'Employee name': true,
				};
				const values = i.split(',');
				const obj = csvHeader.reduce((object, header, index) => {
					// This is to handle end cases of \r when spliting csv files
					const title = header.replace('\r', '');
					if (title in titles) {
						if (title === 'Amount') {
							object[title] = parseInt(values[index].replace('$', ''));
						} else {
							object[title] = values[index];
						}
						state.receivedUsers = true;
					}
					return object;
				}, {});
				return obj;
			});

			// Creates tickets for participants
			for (let idx = 0; idx < array.length; idx++) {
				const { Amount: amount, Email: email, 'Employee name': name } = array[idx];
				let length = Math.floor(amount / 5);
				while (length > 0) {
					maxParticipants.push({ name, email });
					length--;
				}
			}

			// Shuffles the array to be random
			for (var i = maxParticipants.length - 1; i > 0; i--) {
				// Grabs a random index and swaps with the current idx;
				var j = Math.floor(Math.random() * (i + 1));
				var temp = maxParticipants[i];
				maxParticipants[i] = maxParticipants[j];
				maxParticipants[j] = temp;
			}

			state.users = maxParticipants;
		},
		csvPrizesToArray(state, action) {
			const csvHeader = action.payload.slice(0, action.payload.indexOf('\n')).split(',');
			const csvRows = action.payload.slice(action.payload.indexOf('\n') + 1).split('\n');

			const array = csvRows.map((i) => {
				const values = i.split(',');
				const obj = csvHeader.reduce((object, header, index) => {
					if (header === 'Prize') {
						state.receivedPrizes = true;
						return values[index];
					}

					return object;
				}, []);
				return obj;
			});

			state.prizes = array;
		},
		checkForErrors(state) {
			state.hasError = !state.receivedPrizes || !state.receivedUsers;
		},
	},
});

export const participantsActions = participantsSlice.actions;

export default participantsSlice;
