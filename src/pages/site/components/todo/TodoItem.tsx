import React, { FC } from 'react';
import scss from '@/pages/site/components/todo/Todo.module.scss';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { dataType } from './TodoList';

interface TodoItemProps {
	data: dataType[];
}

const TodoItem: FC<TodoItemProps> = ({ data }) => {
	if (!data) {
		return <div>No data available</div>;
	}

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
