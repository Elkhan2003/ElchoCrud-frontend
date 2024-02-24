import React, { FC, useState } from 'react';
import scss from './CreateCrud.module.scss';
import { useForm } from 'react-hook-form';
import { Button, Loader, TextInput } from '@mantine/core';
import { IconDatabasePlus, IconTrash } from '@tabler/icons-react';
import {
	useCreateUserCrudMutation,
	useDeleteAllUserCrudMutation
} from '@/redux/api/crud';

type Inputs = {
	resource: string;
};

const CreateCrud: FC = () => {
	const [isLoadingCreate, setIsLoadingCreate] = useState(false);
	const [isLoadingDeleteAll, setIsLoadingDeleteAll] = useState(false);
	const [createCrud] = useCreateUserCrudMutation();
	const [deleteAllCrud] = useDeleteAllUserCrudMutation();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<Inputs>();

	const onSubmit = async (data: Inputs) => {
		try {
			setIsLoadingCreate(true);
			await createCrud({ resource: data.resource });
			setTimeout(() => {
				setIsLoadingCreate(false);
				reset();
			}, 700);
		} catch (error) {
			console.error(error);
		}
	};

	const handleDeleteAllCrud = async () => {
		setIsLoadingDeleteAll(true);
		await deleteAllCrud();
		setTimeout(() => {
			setIsLoadingDeleteAll(false);
		}, 700);
	};

	return (
		<section className={scss.CreateCrud}>
			<div className="container">
				<div className={scss.content}>
					<h1 className={scss.title}>
						Create an <span>Endpoint</span>
					</h1>
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
						<Button
							type="submit"
							className={scss.button}
							disabled={isLoadingCreate}
							variant={isLoadingCreate ? 'outline' : 'filled'}
						>
							{isLoadingCreate ? (
								<Loader size="xs" className={scss.loading} />
							) : (
								<>
									<IconDatabasePlus className={scss.icon} />
									<span className={scss.text}>Create</span>
								</>
							)}
						</Button>
						<Button
							className={scss.button}
							variant="light"
							onClick={handleDeleteAllCrud}
							disabled={isLoadingDeleteAll}
						>
							{isLoadingDeleteAll ? (
								<Loader size="xs" className={scss.loading} />
							) : (
								<>
									<IconTrash className={scss.icon} />
									<span className={scss.text}>DeleteAll</span>
								</>
							)}
						</Button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default CreateCrud;
