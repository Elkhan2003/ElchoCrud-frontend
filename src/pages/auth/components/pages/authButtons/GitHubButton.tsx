'use client';
import React, { FC } from 'react';
import scss from './Buttons.module.scss';
import { FaGithub } from 'react-icons/fa';

const GitHubButton: FC = () => {
	const login = () => {
		window.open(
			`${process.env.NEXT_PUBLIC_API_URL}/api/v1/login/github`,
			'_self'
		);
	};

	return (
		<button className={`${scss.button} ${scss.GitHubButton}`} onClick={login}>
			<span className={scss.icon}>
				<FaGithub />
			</span>
			Log in with GitHub
		</button>
	);
};
export default GitHubButton;
