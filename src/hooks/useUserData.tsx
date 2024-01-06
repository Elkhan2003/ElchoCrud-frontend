'use client';
import { useContext } from 'react';
import { UserDataContext } from '@/providers/UserDataProvider';

export const useUserData = () => {
	const value = useContext(UserDataContext);

	return value.user;
};
