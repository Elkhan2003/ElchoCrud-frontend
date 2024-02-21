'use client';
import React, { FC, useState } from 'react';
import scss from './RenderUserCrud.module.scss';
import axios from 'axios';
import {
	useDeleteUserCrudMutation,
	useGetAllUserCrudQuery
} from '@/redux/api/crud';
import { ScrollArea, Box, Button, Loader } from '@mantine/core';
import {
	IconCopy,
	IconDatabaseShare,
	IconRefresh,
	IconTrash
} from '@tabler/icons-react';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const RenderUserCrud: FC = () => {
	const [isLoadingButtonReset, setIsLoadingButtonReset] = useState<
		Record<string, boolean>
	>({});
	const [isLoadingButtonDelete, setIsLoadingButtonDelete] = useState<
		Record<string, boolean>
	>({});
	const { data, isLoading } = useGetAllUserCrudQuery();
	const [deleteCrud] = useDeleteUserCrudMutation();

	const handleCopyClick = async (url: string, resource: string) => {
		try {
			await navigator.clipboard.writeText(url);
			console.log('URL copied to clipboard');
			toast(`🦄 '${resource}' API copied!`, {
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

	const handleResetClick = async (
		id: number,
		url: string,
		resource: string
	) => {
		try {
			setIsLoadingButtonReset((prev) => ({ ...prev, [id]: true }));
			await axios.delete(
				`${process.env.NEXT_PUBLIC_API_URL}/api/v1/${url}/${resource}`
			);
			toast(`🔄 '${resource}' reset successful!`, {
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
			setIsLoadingButtonReset((prev) => ({ ...prev, [id]: false }));
		} catch (error) {
			console.error('Error reset CRUD:', error);
		}
	};

	const handleDeleteClick = async (id: string | number) => {
		try {
			setIsLoadingButtonDelete((prev) => ({ ...prev, [id]: true }));
			await deleteCrud({ id: id });
		} catch (error) {
			console.error('Error deleting CRUD:', error);
		}
	};

	return (
		<>
			<section className={scss.RenderUserCrud}>
				<div className="container">
					<div className={scss.content}>
						<h3 className={scss.title}>Your CRUD list:</h3>
						<ScrollArea type="always" offsetScrollbars classNames={scss}>
							<Box w={1225} style={{ paddingBottom: 15, paddingRight: 15 }}>
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
												{!isLoadingButtonReset[item.id] ? (
													<Button
														className={scss.button}
														onClick={() =>
															handleResetClick(item.id, item.url, item.resource)
														}
													>
														<IconRefresh className={scss.icon} />
														Reset
													</Button>
												) : (
													<Button
														variant="outline"
														disabled
														className={scss.button}
													>
														<Loader size="xs" className={scss.loading} />
														Reset
													</Button>
												)}
												{!isLoadingButtonDelete[item.id] ? (
													<Button
														className={scss.button}
														variant="light"
														onClick={() => handleDeleteClick(item.id)}
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
							</Box>
						</ScrollArea>
					</div>
				</div>
			</section>
			<ToastContainer />
		</>
	);
};

export default RenderUserCrud;
