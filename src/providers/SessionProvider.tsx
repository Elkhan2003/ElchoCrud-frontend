import { FC, ReactNode } from 'react';
import { redirect, usePathname } from 'next/navigation';
import { useGetMeQuery } from '@/redux/api/me';

interface ProtectedRouteProps {
	children: ReactNode;
}

export const SessionProvider: FC<ProtectedRouteProps> = ({ children }) => {
	const { data, isLoading, error } = useGetMeQuery();
	const pathname = usePathname();

	switch (pathname) {
		case '/login':
			if (data?.user) {
				redirect('/');
			}
			break;
		case '/about':
			if (!data?.user) {
				redirect('/login');
			}
			break;
		case '/price':
			if (!data?.user) {
				redirect('/login');
			}
			break;
		default:
			break;
	}

	return children;
};
