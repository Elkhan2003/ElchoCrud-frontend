import { FC, ReactNode } from 'react';
import { redirect, usePathname } from 'next/navigation';
import { useGetMeQuery } from '@/redux/api/me';

interface ProtectedRouteProps {
	children: ReactNode;
}

export const SessionProvider: FC<ProtectedRouteProps> = ({ children }) => {
	const { data } = useGetMeQuery();
	const pathname = usePathname();

	switch (pathname) {
		case '/login':
			if (data?.user) {
				redirect('/');
			}
			break;
		// case '/dashboard':
		// 	if (!data?.user) {
		// 		redirect('/login');
		// 	}
		// 	break;
		default:
			break;
	}

	return children;
};
