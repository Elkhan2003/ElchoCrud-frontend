import React, { FC } from 'react';
import scss from '@/pages/site/components/todo/Todo.module.scss';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import axios from 'axios';

interface dataType {
	name: string;
	data: string;
	deadline: string;
	createdAt: string;
	updatedAt: string;
}

const TodoItem: FC = () => {
	const data: dataType[] = [
		{
			name: 'Example',
			data: '2003/10/14',
			deadline: '2023/12/25',
			createdAt: '15:30',
			updatedAt: '16:00'
		},
		{
			name: 'Example',
			data: '2003/10/14',
			deadline: '2023/12/25',
			createdAt: '15:30',
			updatedAt: '16:00'
		},
		{
			name: 'Example',
			data: '2003/10/14',
			deadline: '2023/12/25',
			createdAt: '15:30',
			updatedAt: '16:00'
		}
	];
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
			<div className={scss.tasks}>
				{data.map((item, index) => (
					<div key={index} className={scss.task}>
						<div className={scss.task_details}>
							<h2 className={scss.task_name}>{item.name}</h2>
							<div className={scss.task_time_info}>
								<p className={scss.task_date}>deadline: {item.deadline}</p>
								<span>-</span>
								<p className={scss.task_date}>createdAt: {item.createdAt}</p>
								<span>-</span>
								<p className={scss.task_date}>updatedAt: {item.updatedAt}</p>
							</div>
						</div>
						<div className={scss.task_buttons}>
							<button className={scss.edit_button}>
								<FaEdit />
							</button>
							<button className={scss.delete_button}>
								<RiDeleteBin6Line />
							</button>
						</div>
					</div>
				))}
			</div>
		</>
	);
};
export default TodoItem;
