'use client';
import React, { FC } from 'react';
import scss from './Buttons.module.scss';
import { FcGoogle } from 'react-icons/fc';

const GoogleButton: FC = () => {
	const login = () => {
		window.open(
			`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login/google`,
			'_self'
		);
	};

	return (
		<button className={`${scss.button} ${scss.GoogleButton}`} onClick={login}>
			<span className={scss.icon}>
				<FcGoogle />
			</span>
			Log in with Google
		</button>
	);
};
export default GoogleButton;
