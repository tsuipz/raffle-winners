import { configureStore } from '@reduxjs/toolkit';
import participantsSlice from './participants-slice';

const store = configureStore({
	reducer: {
		participants: participantsSlice.reducer,
	},
});

export default store;
