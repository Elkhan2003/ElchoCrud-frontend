'use client';
import { FC, ReactNode } from 'react';
import { store } from './store';
import { Provider } from 'react-redux';

interface ReduxProviderType {
	children: ReactNode;
}

export const ReduxProvider: FC<ReduxProviderType> = ({ children }) => {
	return (
		<>
			<Provider store={store}>{children}</Provider>
		</>
	);
};
