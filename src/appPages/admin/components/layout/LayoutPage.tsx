import React, { FC, ReactNode } from 'react';
import scss from './LayoutPage.module.scss';
import Header from '@/appPages/admin/components/layout/header/Header';
import Footer from '@/appPages/admin/components/layout/footer/Footer';

interface LayoutPageType {
	children: ReactNode;
}

const LayoutPage: FC<LayoutPageType> = ({ children }) => {
	return (
		<>
			<div className={scss.layout}>
				<header>
					<Header />
				</header>
				<main>{children}</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</>
	);
};
export default LayoutPage;
