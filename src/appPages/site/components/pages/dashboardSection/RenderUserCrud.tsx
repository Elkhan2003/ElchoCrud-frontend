'use client';
import React, { FC, useState } from 'react';
import scss from './RenderUserCrud.module.scss';
import {
	useDeleteUserCrudMutation,
	useGetAllUserCrudQuery
} from '@/redux/api/crud';
import { Button, Loader } from '@mantine/core';
import { IconCopy, IconDatabaseShare, IconTrash } from '@tabler/icons-react';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const RenderUserCrud: FC = () => {
	const [isLoadingDelete, setIsLoadingDelete] = useState<
		Record<string, boolean>
	>({});
	const { data, isLoading } = useGetAllUserCrudQuery();
	const [deleteCrud] = useDeleteUserCrudMutation();

	const handleCopyClick = async (url: string, resource: string) => {
		try {
			await navigator.clipboard.writeText(url);
			console.log('URL copied to clipboard');
			toast(`🦄 "${resource}" API copied!`, {
				position: 'top-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
				transition: Bounce
			});
		} catch (err) {
			console.error('Unable to copy URL to clipboard', err);
		}
	};

	const handleOpenClick = (url: string) => {
		window.open(url, '_blank');
	};

	const handleDeleteClick = async (id: string | number) => {
		try {
			setIsLoadingDelete((prev) => ({ ...prev, [id]: true }));
			await deleteCrud({
				id: id
			});
		} catch (error) {
			console.error('Error deleting CRUD:', error);
		}
	};

	return (
		<>
			<section className={scss.RenderUserCrud}>
				<div className={scss.container}>
					<div className={scss.content}>
						<h3 className={scss.title}>Your CRUD list:</h3>
						<div className={scss.cruds_block}>
							{data?.results.map((item, index) => (
								<div key={index + 1} className={scss.crud}>
									<div className={scss.number_url}>
										<p className={scss.number}>{index + 1}</p>
										<p
											className={scss.url}
											onClick={() =>
												handleCopyClick(
													`${process.env.NEXT_PUBLIC_API_URL}/api/v1/${item.url}/${item.resource}`,
													item.resource
												)
											}
										>
											{process.env.NEXT_PUBLIC_API_URL}/api/v1/{item.url}/
											{item.resource}
										</p>
									</div>
									<div className={scss.buttons}>
										<Button
											className={scss.button}
											onClick={() =>
												handleCopyClick(
													`${process.env.NEXT_PUBLIC_API_URL}/api/v1/${item.url}/${item.resource}`,
													item.resource
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
										{!isLoadingDelete[item.id] ? (
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
										) : (
											<Button
												variant="outline"
												disabled
												className={scss.button}
											>
												<Loader size="xs" className={scss.loading} />
												Delete
											</Button>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<ToastContainer />
		</>
	);
};

export default RenderUserCrud;
