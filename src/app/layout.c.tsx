'use client';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';
import { ReduxProvider } from '@/redux/provider';
import { SessionProvider } from '@/providers/SessionProvider';
import { UserDataProvider } from '@/providers/UserDataProvider';

interface LayoutRootType {
	children: ReactNode;
}

const LayoutRoot: FC<LayoutRootType> = ({ children }) => {
	const [snowCount, setSnowCount] = useState<number>();

	useEffect(() => {
		const changeSnowCount = () => {
			if (window.innerWidth < 768) {
				setSnowCount(15);
			} else {
				setSnowCount(100);
			}
		};

		changeSnowCount();
		window.addEventListener('resize', changeSnowCount);

		return () => {
			window.removeEventListener('resize', changeSnowCount);
		};
	}, []);

	return (
		<>
			<Snowfall snowflakeCount={snowCount} />
			<UserDataProvider>
				<ReduxProvider>
					<SessionProvider>{children}</SessionProvider>
				</ReduxProvider>
			</UserDataProvider>
		</>
	);
};
export default LayoutRoot;
