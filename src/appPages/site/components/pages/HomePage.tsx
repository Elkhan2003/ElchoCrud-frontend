'use client';
import React, { FC } from 'react';
import scss from './Style.module.scss';
import { useGetMeQuery } from '@/redux/api/me';
import TodoList from '@/appPages/site/components/todo/TodoList';
import Welcome from '@/appPages/site/components/pages/homeSection/Welcome';

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
						<Welcome />
						<TodoList />
					</div>
				</div>
			</section>
		</>
	);
};
export default HomePage;
