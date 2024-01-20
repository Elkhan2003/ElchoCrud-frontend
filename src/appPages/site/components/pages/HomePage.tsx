'use client';
import React, { FC } from 'react';
import scss from './Style.module.scss';
import TodoList from '@/appPages/site/components/todo/TodoList';
import { useGetMeQuery } from '@/redux/api/me';

const HomePage: FC = () => {
	const { data, isLoading, error } = useGetMeQuery();

	if (!isLoading) {
		console.log('Redux', data);
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
