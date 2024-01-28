'use client';
import React, { FC } from 'react';
import scss from './GetAllUserCrud.module.scss';
import { useGetAllUserCrudQuery } from '@/redux/api/crud';

const GetAllUserCrud: FC = () => {
	const { data: getAllUserCrud, isLoading, error } = useGetAllUserCrudQuery();

	console.log(getAllUserCrud);

	return (
		<>
			<section className={scss.GetAllUserCrud}>
				<div className="container">
					<div className={scss.content}>
						<h3>GetAllUserCrud</h3>
					</div>
				</div>
			</section>
		</>
	);
};
export default GetAllUserCrud;
