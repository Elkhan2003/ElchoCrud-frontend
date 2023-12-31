'use client';
import React, { FC } from 'react';
import scss from './Style.module.scss';
import TodoList from '@/pages/site/components/todo/TodoList';

const HomePage: FC = () => {
	return (
		<>
			<div className={scss.home_page}>
				<div className="container">
					<div className={scss.content}>
						<TodoList />
					</div>
				</div>
			</div>
		</>
	);
};
export default HomePage;
