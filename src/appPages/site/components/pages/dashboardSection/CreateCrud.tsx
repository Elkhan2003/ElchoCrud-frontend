'use client';
import React, { FC, useState } from 'react';
import scss from './CreateCrud.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Loader, TextInput } from '@mantine/core';
import { IconDatabasePlus, IconTrash } from '@tabler/icons-react';
import {
	useCreateUserCrudMutation,
	useDeleteAllUserCrudMutation
} from '@/redux/api/crud';
import { Bounce, toast, ToastContainer } from 'react-toastify';

type Inputs = {
	url: string;
	resource: string;
};

const CreateCrud: FC = () => {
	const [isLoadingCreate, setIsLoadingCreate] = useState(false);
	const [isLoadingDeleteAll, setIsLoadingDeleteAll] = useState(false);
	const [createCrud, { error }] = useCreateUserCrudMutation();
	const [deleteAllCrud] = useDeleteAllUserCrudMutation();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			setIsLoadingCreate(true);
			const responseData = await createCrud({
				resource: data.resource
			});
			if ('error' in responseData) {
				// @ts-ignore
				console.error(responseData.error.data.results);
			}
			setTimeout(() => {
				setIsLoadingCreate(false);
				reset();
			}, 500);
		} catch (e) {
			console.error(e);
		}
	};

	const handleDeleteAllCrud = async () => {
		setIsLoadingDeleteAll(true);
		await deleteAllCrud();
		setTimeout(() => {
			setIsLoadingDeleteAll(false);
		}, 500);
	};

	return (
		<>
			<section className={scss.CreateCrud}>
				<div className="container">
					<div className={scss.content}>
						<h1 className={scss.title}>Create an Endpoint</h1>
						<form className={scss.create_url} onSubmit={handleSubmit(onSubmit)}>
							<p className={scss.url}>
								{process.env.NEXT_PUBLIC_API_URL}/api/v1/generateRandomToken/
							</p>
							<TextInput
								className={scss.resource_input}
								placeholder="your resource"
								error={!!errors.resource}
								{...register('resource', { required: true })}
							/>
							{!isLoadingCreate ? (
								<Button type="submit" className={scss.button}>
									<IconDatabasePlus className={scss.icon} />
									Create
								</Button>
							) : (
								<Button variant="outline" disabled className={scss.button}>
									<Loader size="sm" className={scss.loading} />
									Loading
								</Button>
							)}
							{!isLoadingDeleteAll ? (
								<Button
									className={scss.button}
									variant="light"
									onClick={() => {
										handleDeleteAllCrud();
									}}
								>
									<IconTrash className={scss.icon} />
									DeleteAll
								</Button>
							) : (
								<Button variant="outline" disabled className={scss.button}>
									<Loader size="sm" className={scss.loading} />
									Loading
								</Button>
							)}
						</form>
					</div>
				</div>
			</section>
		</>
	);
};
export default CreateCrud;
