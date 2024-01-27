'use client';
import React, { FC } from 'react';
import scss from './CreateCrud.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, TextInput } from '@mantine/core';
import { IconDatabasePlus } from '@tabler/icons-react';

type Inputs = {
	url: string;
	resource: string;
};

const CreateCrud: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data);
	};

	return (
		<>
			<section className={scss.CreateCrud}>
				<div className="container">
					<div className={scss.content}>
						<h1 className={scss.title}>Endpoint Information</h1>
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
							<Button type="submit" className={scss.button}>
								<IconDatabasePlus className={scss.icon} />
								Create
							</Button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};
export default CreateCrud;
