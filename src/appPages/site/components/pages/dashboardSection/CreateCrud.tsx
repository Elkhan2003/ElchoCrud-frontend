'use client';
import React, { FC, useState } from 'react';
import scss from './CreateCrud.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Loader, TextInput } from '@mantine/core';
import { IconDatabasePlus } from '@tabler/icons-react';
import { useCreateUserCrudMutation } from '@/redux/api/crud';

type Inputs = {
	url: string;
	resource: string;
};

const CreateCrud: FC = () => {
	const [isLoadingButton, setIsLoadingButton] = useState(false);
	const [createCrud, { error }] = useCreateUserCrudMutation();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			setIsLoadingButton(true);
			const responseData = await createCrud({
				resource: data.resource
			});
			if ('error' in responseData) {
				// @ts-ignore
				console.error(responseData.error.data.results);
			}
			setTimeout(() => {
				setIsLoadingButton(false);
				reset();
			}, 500);
		} catch (e) {
			console.error(e);
		}
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
							{!isLoadingButton ? (
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
						</form>
					</div>
				</div>
			</section>
		</>
	);
};
export default CreateCrud;
