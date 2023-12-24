import React, { FC, ReactNode } from 'react';

interface LayoutRootType {
	children: ReactNode;
}

const LayoutRoot: FC<LayoutRootType> = ({ children }) => {
	return <>{children}</>;
};
export default LayoutRoot;
