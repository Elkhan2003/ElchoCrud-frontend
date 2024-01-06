import React, { FC, ReactNode } from 'react';
import { redirect, usePathname } from 'next/navigation';
import { useUserData } from '@/hooks/useUserData';

interface ProtectedRouteProps {
	children: ReactNode;
}

export const SessionProvider: FC<ProtectedRouteProps> = ({ children }) => {
	const userData = useUserData();
	const pathname = usePathname();

	switch (pathname) {
		case '/login':
			if (userData?.login) {
				redirect('/');
			}
			break;
		case '/about':
			if (!userData?.login) {
				redirect('/login');
			}
			break;
		case '/price':
			if (!userData?.login) {
				redirect('/login');
			}
			break;
		default:
			break;
	}

	return children;
};
