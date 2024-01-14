'use client';
import React, { FC, useState } from 'react';
import scss from './BurgerMenu.module.scss';
import { Avatar, Burger, Group, Indicator, Menu, Text } from '@mantine/core';
import {
	IconLogout,
	IconMessageCircle,
	IconPhoto,
	IconSearch,
	IconSettings,
	IconTrash
} from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';

interface BurgerMenuType {
	image: string;
	firstName: string;
	lastName: string;
	email: string;
	isActive: boolean;
	authLink: string;
	logout: () => void;
}

const BurgerMenu: FC<BurgerMenuType> = ({
	image,
	firstName,
	lastName,
	email,
	isActive,
	authLink,
	logout
}) => {
	const [_, { toggle }] = useDisclosure();
	const [opened, setOpened] = useState(false);

	return (
		<Menu
			opened={opened}
			onChange={setOpened}
			width={220}
			offset={15}
			withArrow={false}
			position="bottom-end"
			shadow="md"
			transitionProps={{ transition: 'pop-top-right', duration: 150 }}
		>
			<Menu.Target>
				<Burger
					opened={opened}
					onClick={toggle}
					aria-label="Toggle navigation"
				/>
			</Menu.Target>
			{/*! menu*/}
			<Menu.Dropdown className={scss.dropdown_menu}>
				{isActive ? (
					<Group>
						<Indicator offset={4} size={14} withBorder processing>
							<Avatar src={image} radius="xl" />
						</Indicator>

						<div style={{ flex: 1 }}>
							<Text size="sm" fw={500}>
								{firstName} {lastName}
							</Text>

							<Text c="dimmed" size="xs">
								{email}
							</Text>
						</div>
					</Group>
				) : (
					<Link href={authLink}>
						<Menu.Item leftSection={<IconLogout className={scss.svg_icon} />}>
							Login
						</Menu.Item>
					</Link>
				)}
				<Menu.Divider />
				<Menu.Label>Application</Menu.Label>
				<Menu.Item leftSection={<IconSettings className={scss.svg_icon} />}>
					Settings
				</Menu.Item>
				<Menu.Item
					leftSection={<IconMessageCircle className={scss.svg_icon} />}
				>
					Messages
				</Menu.Item>
				<Menu.Item leftSection={<IconPhoto className={scss.svg_icon} />}>
					Gallery
				</Menu.Item>
				<Menu.Item
					leftSection={<IconSearch className={scss.svg_icon} />}
					rightSection={
						<Text size="xs" c="dimmed">
							⌘K
						</Text>
					}
				>
					Search
				</Menu.Item>

				{isActive && (
					<>
						<Menu.Divider />
						<Menu.Label>Danger zone</Menu.Label>
						<Menu.Item
							leftSection={<IconLogout className={scss.svg_icon} />}
							onClick={logout}
						>
							Log Out
						</Menu.Item>
						<Menu.Item
							color="red"
							leftSection={<IconTrash className={scss.svg_icon} />}
						>
							Delete my account
						</Menu.Item>
					</>
				)}
			</Menu.Dropdown>
		</Menu>
	);
};

export default BurgerMenu;
