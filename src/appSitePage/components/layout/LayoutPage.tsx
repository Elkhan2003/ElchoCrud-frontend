'use client';
import React, { FC, ReactNode } from 'react';
import scss from './LayoutPage.module.scss';
import Header from '@/appSitePage/components/layout/header/Header';
import Footer from '@/appSitePage/components/layout/footer/Footer';

interface LayoutPageType {
	children: ReactNode;
}

const LayoutPage: FC<LayoutPageType> = ({ children }) => {
	return (
		<>
			<div className={scss.layout}>
				<Header />
				<main>{children}</main>
				<Footer />
			</div>
		</>
	);
};
export default LayoutPage;
