'use client';
import React, { FC } from 'react';
import scss from './Style.module.scss';
import TodoList from '@/appPages/site/components/todo/TodoList';
import { useGetMeQuery } from '@/redux/api/me';
import { useAppSelector } from '@/redux/store';

const HomePage: FC = () => {
	const { data: user, isLoading, error } = useGetMeQuery();

	if (!isLoading) {
		console.log('Redux', user);
	} else {
		console.log('Loading...');
	}

	return (
		<>
			<section className={scss.home_page}>
				<div className="container">
					<div className={scss.content}>
						<TodoList />
					</div>
				</div>
			</section>
		</>
	);
};
export default HomePage;
