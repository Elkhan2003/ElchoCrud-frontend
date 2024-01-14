import React, { FC, useEffect, useRef, useState } from 'react';
import { Avatar, Group, Text, UnstyledButton } from '@mantine/core';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Image from 'next/image';
import scss from '@/appPages/site/components/ui/userProfile/UserProfile.module.scss';
import Link from 'next/link';
import { FiLogOut } from 'react-icons/fi';

interface UserButtonType {
	image: string;
	name: string;
	email: string;
}

const UserButton: FC<UserButtonType> = ({ image, name, email }) => {
	const [isMenu, setIsMenu] = useState(false);
	const menuRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsMenu(false);
			}
		};
		document.addEventListener('mousedown', handleOutsideClick);
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, [menuRef]);

	const logout = () => {
		window.open(
			`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/logout`,
			'_self'
		);
	};
	const handleButtonClick = () => {
		setIsMenu(!isMenu);
	};
	return (
		<>
			<div className={scss.ButtonUserProfile} ref={menuRef}>
				<div className={scss.user_profile}>
					{email ? (
						<div
							className={scss.user}
							onMouseDown={(event) => {
								event.preventDefault();
								setIsMenu(!isMenu);
							}}
						>
							<Image
								className={scss.avatar}
								src={image}
								alt={name}
								width={40}
								height={40}
							/>
							<div className={scss.info}>
								<h1 className={scss.name}>{name}</h1>
								<p className={scss.email}>{email}</p>
							</div>
							<div
								className={
									isMenu ? `${scss.arrow} ${scss.active}` : `${scss.arrow}`
								}
							>
								<MdKeyboardArrowRight />
							</div>
						</div>
					) : (
						<div className={scss.login}>
							<Link href="/login">Log In</Link>
						</div>
					)}
				</div>

				<div
					className={
						isMenu ? `${scss.user_menu} ${scss.active}` : `${scss.user_menu}`
					}
				>
					<button
						onClick={() => {
							handleButtonClick();
							console.log(`Hello, ${name}!`);
						}}
					>
						Hello, FocusHub!
					</button>
					<button
						className={scss.logout}
						onClick={() => {
							handleButtonClick();
							logout();
						}}
					>
						<FiLogOut /> Log Out
					</button>
				</div>
			</div>
		</>
	);
};

export default UserButton;
