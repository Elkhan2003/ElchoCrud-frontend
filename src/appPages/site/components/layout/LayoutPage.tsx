'use client';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import scss from './LayoutPage.module.scss';
import Header from '@/appPages/site/components/layout/header/Header';
import Footer from '@/appPages/site/components/layout/footer/Footer';
import Preloader from '@/appPages/site/components/preLoader/Preloader';

interface LayoutPageType {
	children: ReactNode;
}

const LayoutPage: FC<LayoutPageType> = ({ children }) => {
	const [isPreLoader, setIsPreloader] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsPreloader(false);
		}, 1700);
	}, []);

	return (
		<>
			{isPreLoader ? (
				<Preloader />
			) : (
				<div className={scss.layout}>
					<Header />
					<main>{children}</main>
					<Footer />
				</div>
			)}
		</>
	);
};
export default LayoutPage;
