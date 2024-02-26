'use client';
import React, { FC, useState } from 'react';
import scss from './UserProfile.module.scss';
import {
	Avatar,
	Group,
	Indicator,
	Menu,
	Text,
	UnstyledButton
} from '@mantine/core';
import {
	IconChevronRight,
	IconLogout,
	IconSettings,
	IconTrash
} from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

interface UserProfileType {
	image: string;
	firstName: string;
	lastName: string;
	email: string;
	logout: () => void;
	handleLinkTrash: () => void;
}

const UserProfile: FC<UserProfileType> = ({
	image,
	firstName,
	lastName,
	email,
	logout,
	handleLinkTrash
}) => {
	const [opened, setOpened] = useState(false);
	const router = useRouter();
	return (
		<Menu
			opened={opened}
			onChange={setOpened}
			width={220}
			offset={3}
			withArrow={true}
			shadow="md"
			transitionProps={{ transition: 'pop-top-right', duration: 150 }}
		>
			<Menu.Target>
				<UnstyledButton
					style={{
						padding: 'var(--mantine-spacing-md)',
						color: 'var(--mantine-color-text)',
						borderRadius: 'var(--mantine-radius-sm)'
					}}
				>
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

						<IconChevronRight
							className={
								opened ? `${scss.arrow} ${scss.active}` : `${scss.arrow}`
							}
						/>
					</Group>
				</UnstyledButton>
			</Menu.Target>
			<Menu.Dropdown className={scss.dropdown_menu}>
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

				<Menu.Label>Danger zone</Menu.Label>
				<Menu.Item
					color="red"
					leftSection={<IconLogout className={scss.svg_icon} />}
					onClick={logout}
				>
					Log Out
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	);
};

export default UserProfile;
