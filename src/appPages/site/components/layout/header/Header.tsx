'use client';
import React, { FC, useEffect, useState } from 'react';
import scss from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@mantine/core';
import logo from '@/assets/logo.svg';
import UserProfile from '@/appPages/site/components/ui/userProfile/UserProfile';
import BurgerMenu from '@/appPages/site/components/ui/burgerMenu/BurgerMenu';
import { useGetMeQuery } from '@/redux/api/me';

const Header: FC = () => {
	const [isMobile, setIsMobile] = useState(true);
	const { data, isLoading, error } = useGetMeQuery();

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
									<a href="#" className={scss.logo_link}>
										<Image
											className={scss.icon}
											src={logo}
											priority
											alt="logo"
										/>
										<span className={scss.text}>FocusHub</span>
									</a>
								</div>
							</div>
							<div className={scss.right}>
								{/*<nav className={scss.nav}>*/}
								{/*	<ul>*/}
								{/*		<li>*/}
								{/*			<a*/}
								{/*				href="https://www.linkedin.com/in/elcho/"*/}
								{/*				target="_blank"*/}
								{/*			>*/}
								{/*				<FaLinkedin />*/}
								{/*			</a>*/}
								{/*		</li>*/}
								{/*		<li>*/}
								{/*			<a href="https://github.com/Elkhan2003" target="_blank">*/}
								{/*				<FaGithub />*/}
								{/*			</a>*/}
								{/*		</li>*/}
								{/*	</ul>*/}
								{/*</nav>*/}
								{isMobile ? (
									<BurgerMenu
										image={data?.user.photo!}
										firstName={data?.user.firstName!}
										lastName={data?.user.lastName!}
										email={data?.user.login!}
										isActive={data?.user.isActive!}
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
										<Button variant="outline">Login</Button>
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
