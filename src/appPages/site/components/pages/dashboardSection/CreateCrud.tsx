import React, { FC } from 'react';
import scss from './CreateCrud.module.scss';
import { Button, TextInput } from '@mantine/core';
import { IconDatabasePlus } from '@tabler/icons-react';

const CreateCrud: FC = () => {
	return (
		<>
			<section className={scss.CreateCrud}>
				<div className="container">
					<div className={scss.content}>
						<h1 className={scss.title}>Endpoint Information</h1>
						<div className={scss.create_url}>
							<p className={scss.url}>
								{process.env.NEXT_PUBLIC_API_URL}/api/v1/generateRandomToken/
							</p>
							<TextInput
								className={scss.resource_input}
								leftSectionPointerEvents="none"
								placeholder="your resource"
							/>
							<Button className={scss.button}>
								<IconDatabasePlus className={scss.icon} />
								Create
							</Button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default CreateCrud;
