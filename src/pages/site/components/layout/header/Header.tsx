import React, { FC } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import scss from './Style.module.scss';
import logo from '@/assets/logo.svg';

const Header: FC = () => {
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
						</div>
					</div>
				</div>
			</header>
		</>
	);
};
export default Header;
