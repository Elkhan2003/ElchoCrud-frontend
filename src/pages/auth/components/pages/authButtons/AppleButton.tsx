'use client';
import React, { FC } from 'react';
import scss from './Buttons.module.scss';
import { FaApple } from 'react-icons/fa';

const AppleButton: FC = () => {
	const login = () => {
		// window.open(
		// 	`${process.env.NEXT_PUBLIC_API_URL}/api/v1/login-apple`,
		// 	"_self"
		// );
		console.error('Error login with Apple');
	};

	return (
		<button className={`${scss.button} ${scss.AppleButton}`} onClick={login}>
			<span className={scss.icon}>
				<FaApple />
			</span>
			Log in with Apple
		</button>
	);
};
export default AppleButton;
