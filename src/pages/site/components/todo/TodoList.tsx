'use client';
import React, { FC } from 'react';
import scss from './Todo.module.scss';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import axios from 'axios';
import TodoItem from '@/pages/site/components/todo/TodoItem';

const TodoList: FC = () => {
	const postRequest = async () => {
		const url = 'https://worried-tux-toad.cyclic.app/api/v1/send-movie';
		const addData = {
			title: 'Example',
			author: 'Example',
			image: 'https://avatars.githubusercontent.com/u/98739225?v=4s'
		};

		try {
			const response = await axios.post(url, addData);
			console.log(response.data);
		} catch (error) {
			console.error('Ошибка при выполнении POST-запроса:', error);
		}
	};

	return (
		<>
			<div className={scss.todo_page}>
				<div className={scss.content}>
					<div className={scss.todo_list}>
						<div className={scss.form}>
							<input
								className={scss.add_input}
								type="text"
								placeholder="What is the task today?"
							/>
							<button onClick={postRequest} className={scss.add_button}>
								Add Task
							</button>
						</div>
						<TodoItem />
					</div>
				</div>
			</div>
		</>
	);
};
export default TodoList;
