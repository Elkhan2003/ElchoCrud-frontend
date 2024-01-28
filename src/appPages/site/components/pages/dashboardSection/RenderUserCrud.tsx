'use client';
import React, { FC } from 'react';
import scss from './RenderUserCrud.module.scss';
import {
	useDeleteUserCrudMutation,
	useGetAllUserCrudQuery
} from '@/redux/api/crud';
import { Button } from '@mantine/core';
import { IconCopy, IconDatabaseShare, IconTrash } from '@tabler/icons-react';

const RenderUserCrud: FC = () => {
	const { data, isLoading } = useGetAllUserCrudQuery();
	const [deleteCrud] = useDeleteUserCrudMutation();

	const handleCopyClick = async (url: string) => {
		try {
			await navigator.clipboard.writeText(url);
			console.log('URL copied to clipboard');
		} catch (err) {
			console.error('Unable to copy URL to clipboard', err);
		}
	};

	const handleOpenClick = (url: string) => {
		window.open(url, '_blank');
	};

	const handleDeleteClick = async (id: string | number) => {
		await deleteCrud({
			id: id
		});
		// const responseData = await deleteCrud({
		// 	id: id
		// });
		// if ('data' in responseData) {
		// 	console.log(responseData.data);
		// } else {
		// 	console.error('Ошибка в ответе API:', responseData.error);
		// }
	};

	return (
		<>
			<section className={scss.RenderUserCrud}>
				<div className={scss.container}>
					<div className={scss.content}>
						<h3>Your CRUD list:</h3>
						<div className={scss.cruds_block}>
							{data?.results.map((item, index) => (
								<div key={index + 1} className={scss.crud}>
									<div className={scss.number_url}>
										<p className={scss.number}>{index + 1}</p>
										<p className={scss.url}>
											{process.env.NEXT_PUBLIC_API_URL}/api/v1/{item.url}/
											{item.resource}
										</p>
									</div>
									<div className={scss.buttons}>
										<Button
											className={scss.button}
											onClick={() =>
												handleCopyClick(
													`${process.env.NEXT_PUBLIC_API_URL}/api/v1/${item.url}/${item.resource}`
												)
											}
										>
											<IconCopy className={scss.icon} />
											Copy
										</Button>
										<Button
											className={scss.button}
											variant="outline"
											onClick={() =>
												handleOpenClick(
													`${process.env.NEXT_PUBLIC_API_URL}/api/v1/${item.url}/${item.resource}`
												)
											}
										>
											<IconDatabaseShare className={scss.icon} />
											Open
										</Button>
										<Button
											className={scss.button}
											variant="light"
											onClick={() => {
												handleDeleteClick(item.id);
											}}
										>
											<IconTrash className={scss.icon} />
											Delete
										</Button>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default RenderUserCrud;
