'use client';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { MantineProvider, ColorSchemeScript, createTheme } from '@mantine/core';
import Snowfall from 'react-snowfall';
import { ReduxProvider } from '@/redux/provider';
import { SessionProvider } from '@/providers/SessionProvider';

interface LayoutRootType {
	children: ReactNode;
}

const LayoutRoot: FC<LayoutRootType> = ({ children }) => {
	const [snowCount, setSnowCount] = useState<number>();

	const theme = createTheme({
		primaryColor: 'violet'
	});

	useEffect(() => {
		const changeSnowCount = () => {
			if (window.innerWidth < 768) {
				setSnowCount(15);
			} else {
				setSnowCount(50);
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
			<Snowfall style={{ position: 'fixed' }} snowflakeCount={snowCount} />
			<ColorSchemeScript defaultColorScheme="dark" />
			<MantineProvider defaultColorScheme="dark" theme={theme}>
				<ReduxProvider>
					<SessionProvider>{children}</SessionProvider>
				</ReduxProvider>
			</MantineProvider>
		</>
	);
};
export default LayoutRoot;
