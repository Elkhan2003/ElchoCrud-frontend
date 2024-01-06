import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface initialStateType {
	value: AuthState;
}

interface AuthState {
	isAuth: boolean;
	userName: string;
	uid: string;
	isModerator: boolean;
}

const initialState = {
	value: {
		isAuth: false,
		userName: '',
		uid: '',
		isModerator: false
	} as AuthState
} as initialStateType;
export const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logOut: () => {
			return initialState;
		},
		logIn: (state, action: PayloadAction<string>) => {
			return {
				value: {
					isAuth: true,
					userName: action.payload,
					uid: 'uiijiofegert34t34f34t',
					isModerator: false
				}
			};
		},
		toggleModerator: (state) => {
			state.value.isModerator = !state.value.isModerator;
		}
	}
});
export const { logIn, logOut, toggleModerator } = auth.actions;
export default auth.reducer;
