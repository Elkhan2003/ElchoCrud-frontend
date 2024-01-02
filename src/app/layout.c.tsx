'use client';
import React, { FC, ReactNode } from 'react';
import Snowfall from 'react-snowfall';

interface LayoutRootType {
	children: ReactNode;
}

const LayoutRoot: FC<LayoutRootType> = ({ children }) => {
	return (
		<>
			<Snowfall snowflakeCount={100} />
			{children}
		</>
	);
};
export default LayoutRoot;
