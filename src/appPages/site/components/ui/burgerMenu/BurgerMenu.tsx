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
	IconTrash,
	IconChevronRight
} from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';

interface BurgerMenuType {
	image: string;
	firstName: string;
	lastName: string;
	email: string;
	isActive: boolean;
	links: { label: string; href: string }[];
	authLink: string;
	logout: () => void;
	handleLinkTrash: () => void;
}

const BurgerMenu: FC<BurgerMenuType> = ({
	image,
	firstName,
	lastName,
	email,
	isActive,
	links,
	authLink,
	handleLinkTrash,
	logout
}) => {
	const [_, { toggle }] = useDisclosure();
	const [opened, setOpened] = useState(false);

	return (
		<Menu
			opened={opened}
			onChange={setOpened}
			width={220}
			offset={20}
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
					leftSection={<IconTrash className={scss.svg_icon} />}
					onClick={handleLinkTrash}
				>
					Trash
				</Menu.Item>

				<Menu.Divider />
				<Menu.Label>Navigation</Menu.Label>
				{links.map((item, index) => (
					<Link key={index} href={item.href}>
						<Menu.Item
							leftSection={<IconChevronRight className={scss.svg_icon} />}
						>
							{item.label}
						</Menu.Item>
					</Link>
				))}

				{isActive && (
					<>
						<Menu.Divider />
						<Menu.Label>Danger zone</Menu.Label>
						<Menu.Item
							color="red"
							leftSection={<IconLogout className={scss.svg_icon} />}
							onClick={logout}
						>
							Log Out
						</Menu.Item>
					</>
				)}
			</Menu.Dropdown>
		</Menu>
	);
};

export default BurgerMenu;
