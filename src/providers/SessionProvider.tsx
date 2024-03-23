import { FC, ReactNode, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useGetMeQuery } from '@/redux/api/me';

interface ProtectedRouteProps {
	children: ReactNode;
}

export const SessionProvider: FC<ProtectedRouteProps> = ({ children }) => {
	const { status } = useGetMeQuery();
	const pathname = usePathname();
	const router = useRouter();

	useEffect(() => {
		switch (pathname) {
			case '/login':
				if (status === 'fulfilled') {
					router.push('/dashboard');
				}
				break;
			case '/dashboard':
			case '/statistics':
			case '/rating':
				if (status === 'rejected') {
					router.push('/login');
				}
				break;
			default:
				break;
		}
	}, [status, pathname, router]);

	return children;
};
