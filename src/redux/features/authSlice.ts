'use client';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface AuthState {
	user: User | null;
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
}

const initialState: AuthState = {
	user: null,
	status: 'idle',
	error: null
};

const fetcher = async (url: string) => {
	const response = await fetch(url, { credentials: 'include' });
	if (!response.ok) {
		throw new Error('Failed to fetch');
	}
	return response.json();
};

export const fetchUserData = createAsyncThunk(
	'auth/fetchUserData',
	async () => {
		try {
			const response = await axios.get<AuthState>(
				`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/user`,
				{ withCredentials: true }
			);
			return response.data.user;
		} catch (error) {
			throw error;
		}
	}
);

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUserData.pending, (state) => {
				state.status = 'loading';
				console.log('loading');
			})
			.addCase(
				fetchUserData.fulfilled,
				(state, action: PayloadAction<User | null>) => {
					state.status = 'succeeded';
					state.user = action.payload;
					state.error = null;
				}
			)
			.addCase(fetchUserData.rejected, (state, action) => {
				state.status = 'failed';
				state.error =
					action.error.message || 'Не удалось получить данные пользователя';
			});
	}
});

export default authSlice.reducer;
