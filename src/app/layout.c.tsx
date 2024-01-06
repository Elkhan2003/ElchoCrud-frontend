'use client';
import React, { FC, ReactNode } from 'react';
import Snowfall from 'react-snowfall';
import { ReduxProvider } from '@/redux/provider';
import { SessionProvider } from '@/providers/SessionProvider';
import { UserDataProvider } from '@/providers/UserDataProvider';

interface LayoutRootType {
	children: ReactNode;
}

const LayoutRoot: FC<LayoutRootType> = ({ children }) => {
	return (
		<>
			<Snowfall snowflakeCount={100} />
			<UserDataProvider>
				<ReduxProvider>
					<SessionProvider>{children}</SessionProvider>
				</ReduxProvider>
			</UserDataProvider>
		</>
	);
};
export default LayoutRoot;
