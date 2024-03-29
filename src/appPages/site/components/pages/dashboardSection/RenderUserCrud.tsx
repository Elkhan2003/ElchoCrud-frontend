'use client';
import React, { FC, useState } from 'react';
import scss from './RenderUserCrud.module.scss';
import axios from 'axios';
import { ScrollArea, Box, Button, Loader, Skeleton } from '@mantine/core';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import {
	IconCopy,
	IconDatabaseShare,
	IconRefresh,
	IconTrash
} from '@tabler/icons-react';
import {
	useGetAllUserDashboardCrudQuery,
	useTrashUserCrudMutation
} from '@/redux/api/crud';

const RenderUserCrud: FC = () => {
	const [isLoadingButtonReset, setIsLoadingButtonReset] = useState<
		Record<string, boolean>
	>({});
	const [isLoadingButtonTrash, setIsLoadingButtonTrash] = useState<
		Record<string, boolean>
	>({});
	const { data, isLoading } = useGetAllUserDashboardCrudQuery();
	const [trashCrud] = useTrashUserCrudMutation();

	const handleCopyClick = async (url: string, resource: string) => {
		try {
			await navigator.clipboard.writeText(url);
			console.log('URL copied to clipboard');
			notify(`🦄 '${resource}' API copied!`);
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
			notify(`🔄 '${resource}' reset successful!`);
			setIsLoadingButtonReset((prev) => ({ ...prev, [id]: false }));
		} catch (error) {
			console.error('Error reset CRUD:', error);
		}
	};

	const handleTrashClick = async (id: number) => {
		try {
			setIsLoadingButtonTrash((prev) => ({ ...prev, [id]: true }));
			await trashCrud({ id: id });
		} catch (error) {
			console.error('Error trash CRUD:', error);
		}
	};

	const notify = (message: string) => {
		toast(message, {
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
	};

	return (
		<>
			<section className={scss.RenderUserCrud}>
				<div className="container">
					<div className={scss.content}>
						{data?.results.length === 0 ? (
							<h3 className={scss.you_dont_have_endpoints}>
								You don’t have Endpoints
							</h3>
						) : (
							<>
								<h3 className={scss.title}>Your CRUD list:</h3>
								{isLoading ? (
									<>
										<div className={scss.skeleton}>
											<Skeleton height={30} />
											<Skeleton height={30} width="80%" />
											<Skeleton height={30} width="90%" />
										</div>
									</>
								) : (
									<ScrollArea type="always" offsetScrollbars classNames={scss}>
										<Box
											w={1225}
											style={{ paddingBottom: 15, paddingRight: 15 }}
										>
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
																{process.env.NEXT_PUBLIC_API_URL}/api/v1/
																{item.url}/{item.resource}
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
																		handleResetClick(
																			item.id,
																			item.url,
																			item.resource
																		)
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
															{!isLoadingButtonTrash[item.id] ? (
																<Button
																	className={scss.button}
																	variant="light"
																	onClick={() => handleTrashClick(item.id)}
																>
																	<IconTrash className={scss.icon} />
																	Trash
																</Button>
															) : (
																<Button
																	variant="outline"
																	disabled
																	className={scss.button}
																>
																	<Loader size="xs" className={scss.loading} />
																	Trash
																</Button>
															)}
														</div>
													</div>
												))}
											</div>
										</Box>
									</ScrollArea>
								)}
							</>
						)}
					</div>
				</div>
			</section>
			<ToastContainer />
		</>
	);
};

export default RenderUserCrud;
