'use client';
import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import scss from './Style.module.scss';
import { useUserData } from '@/hooks/useUserData';
import logo from '@/assets/logo.svg';

const Header: FC = () => {
	const userData = useUserData();
	const logout = () => {
		window.open(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/logout`, '_self');
	};
	return (
		<>
			<header className={scss.header}>
				<div className={`${scss.scroll}`}>
					<div className="container">
						<div className={scss.content}>
							<div className={scss.logo}>
								<a href="#" className={scss.logo_link}>
									<Image className={scss.icon} src={logo} priority alt="logo" />
									<span className={scss.text}>FocusHub</span>
								</a>
							</div>
							<nav className={scss.nav}>
								<ul>
									<li>
										<a
											href="https://www.linkedin.com/in/elcho/"
											target="_blank"
										>
											<FaLinkedin />
										</a>
									</li>
									<li>
										<a href="https://github.com/Elkhan2003" target="_blank">
											<FaGithub />
										</a>
									</li>
								</ul>
							</nav>
							<div className={scss.user_profile}>
								{userData?.isActive ? (
									<div className={scss.user}>
										<h5>{userData.login}</h5>
										<button onClick={logout}>logout</button>
									</div>
								) : (
									<div className={scss.user}>
										<Link href="/login">Log In</Link>
									</div>
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
