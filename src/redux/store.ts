import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './features/authSlice';
// import counterReducer from './features/counterSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { api } from './api';

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
