'use client';
import {
	FC,
	createContext,
	ReactNode,
	useMemo,
	useState,
	useEffect
} from 'react';
import axios from 'axios';

interface UserDataProviderProps {
	children: ReactNode;
}

interface getUserData {
	user: User | null;
}

export const UserDataContext = createContext<getUserData>({
	user: null
});

export const UserDataProvider: FC<UserDataProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const loadUserData = async () => {
			try {
				const response = await axios.get<getUserData>(
					`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/user`,
					{
						withCredentials: true
					}
				);
				setUser(response.data.user);
				console.log(response.data.user);
				// if (response.data.user) {
				// 	setUser(response.data.user);
				// 	console.log(response.data.user);
				// } else {
				// 	console.log(response.data.user);
				// 	console.log('User not found');
				// 	setTimeout(loadUserData, 500);
				// }
			} catch (error) {
				console.error(
					'Ошибка при получении информации о пользователе:',
					`${error}`
				);
			}
		};
		loadUserData();
	}, []);

	const value = useMemo(() => {
		return {
			user: user
		};
	}, [user]);

	return (
		<UserDataContext.Provider value={value}>
			{children}
		</UserDataContext.Provider>
	);
};
