import React, { FC, ReactNode } from "react";
interface LayoutType {
	children: ReactNode;
}

const Layout: FC<LayoutType> = ({ children }) => {
	return <>{children}</>;
};
export default Layout;
