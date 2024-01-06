type DateTime = string;

type User = {
	id: number;
	firstName: string;
	lastName: string;
	role: UserRole;
	auth: string;
	login: string;
	password: string;
	isActive: boolean;
	photo: string;
	phone: string;
	isPhoneVerified: boolean;
	traffic: string;
	createdAt: DateTime;
	updatedAt: DateTime;
};

type UserRole = 'ADMIN' | 'USER';

type NotificationObject = {
	id: number;
	content: string;
	createdAt: DateTime;
	updatedAt: DateTime;
};
