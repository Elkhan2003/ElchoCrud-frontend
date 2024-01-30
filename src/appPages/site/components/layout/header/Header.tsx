'use client';
import React, { FC, useEffect, useState } from 'react';
import scss from './Header.module.scss';
// import { Permanent_Marker } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@mantine/core';
import logo from '@/assets/logo.png';
import UserProfile from '@/appPages/site/components/ui/userProfile/UserProfile';
import BurgerMenu from '@/appPages/site/components/ui/burgerMenu/BurgerMenu';
import { useGetMeQuery } from '@/redux/api/me';
import { usePathname } from 'next/navigation';
import { IconKey } from '@tabler/icons-react';
// const font = Permanent_Marker({ weight: '400', subsets: ['latin'] });

const links = [
	{
		label: 'Home',
		href: '/'
	},
	{
		label: 'Dashboard',
		href: '/dashboard'
	},
	{
		label: 'Statistics',
		href: '/statistics'
	},
	{
		label: 'Rating of users',
		href: '/rating'
	}
];

const Header: FC = () => {
	const pathname = usePathname();
	const [isMobile, setIsMobile] = useState(true);
	const { data, isLoading, error } = useGetMeQuery();

	// console.log(data?.user.isActive);
	// console.log(isLoading);
	// console.log(error);

	useEffect(() => {
		const changeIsMobile = () => {
			if (window.innerWidth < 768) {
				setIsMobile(true);
			} else {
				// ! testing
				setIsMobile(false);
			}
		};

		changeIsMobile();
		window.addEventListener('resize', changeIsMobile);

		return () => {
			window.removeEventListener('resize', changeIsMobile);
		};
	}, []);

	const logout = () => {
		window.open(
			`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/logout`,
			'_self'
		);
	};
	return (
		<>
			<header className={scss.header}>
				<div className={`${scss.scroll}`}>
					<div className="container">
						<div className={scss.content}>
							<div className={scss.left}>
								<div className={scss.logo}>
									<a href="#" className={`${scss.logo_link}`}>
										<Image
											className={scss.icon}
											src={logo}
											width={100}
											height={100}
											priority
											alt="logo"
										/>
										Elcho<span>Crud</span>
									</a>
								</div>
								{!isMobile && (
									<nav className={scss.nav}>
										<ul>
											{links.map((item, index) => (
												<li key={index}>
													<Link
														className={
															pathname === item.href
																? `${scss.link} ${scss.active}`
																: `${scss.link}`
														}
														href={item.href}
													>
														{item.label}
													</Link>
												</li>
											))}
										</ul>
									</nav>
								)}
							</div>
							<div className={scss.right}>
								{isMobile ? (
									<BurgerMenu
										image={data?.user.photo!}
										firstName={data?.user.firstName!}
										lastName={data?.user.lastName!}
										email={data?.user.login!}
										isActive={data?.user.isActive!}
										links={links}
										authLink="/login"
										logout={logout}
									/>
								) : data?.user ? (
									<UserProfile
										image={data?.user.photo}
										firstName={data?.user.firstName}
										lastName={data?.user.lastName}
										email={data?.user.login}
										logout={logout}
									/>
								) : (
									<Link href="/login">
										<Button className={scss.login_button}>
											<IconKey className={scss.icon} /> Login
										</Button>
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};
export default Header;
