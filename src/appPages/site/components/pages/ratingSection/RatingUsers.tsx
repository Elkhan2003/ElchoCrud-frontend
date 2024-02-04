'use client';
import React from 'react';
import scss from './RatingUsers.module.scss';
import Image from 'next/image';
import { Table } from '@mantine/core';
import { useGetRatingQuery } from '@/redux/api/rating';
import AnimatedNumbers from '../../framerMotion/AnimatedNumbers';

const RatingUsers = () => {
	const { data } = useGetRatingQuery();
	console.log(data?.results);

	const rows = data?.results.map((item, index) => (
		<Table.Tr key={index}>
			<Table.Td>{index + 1}</Table.Td>
			<Table.Td>
				<div className={scss.flex_user}>
					<Image
						className={scss.photo}
						src={item.photo}
						width={25}
						height={25}
						alt={`${item.firstName} ${item.lastName}`}
					/>
					<span>
						{item.firstName} {item.lastName}
					</span>
				</div>
			</Table.Td>
			<Table.Td>
				<AnimatedNumbers value={item.totalReq} />
			</Table.Td>
			<Table.Td>
				<AnimatedNumbers value={item.get!} />
			</Table.Td>
			<Table.Td>
				<AnimatedNumbers value={item.post!} />
			</Table.Td>
			<Table.Td>
				<AnimatedNumbers value={item.put!} />
			</Table.Td>
			<Table.Td>
				<AnimatedNumbers value={item.patch!} />
			</Table.Td>
			<Table.Td>
				<AnimatedNumbers value={item.delete!} />
			</Table.Td>
			<Table.Td>{item.updatedAt}</Table.Td>
		</Table.Tr>
	));

	return (
		<>
			<section className={scss.RatingUsers}>
				<div className="container">
					<div className={scss.content}>
						<h1 className={scss.title}>
							Rating of <span>Users</span>
						</h1>
						<Table
							striped
							stripedColor="#181818"
							withTableBorder
							withColumnBorders
						>
							<Table.Thead>
								<Table.Tr>
									<Table.Th>№</Table.Th>
									<Table.Th>User</Table.Th>
									<Table.Th>Total Request</Table.Th>
									<Table.Th>GET</Table.Th>
									<Table.Th>POST</Table.Th>
									<Table.Th>PUT</Table.Th>
									<Table.Th>PATCH</Table.Th>
									<Table.Th>DELETE</Table.Th>
									<Table.Th>Last Active</Table.Th>
								</Table.Tr>
							</Table.Thead>
							<Table.Tbody>{rows}</Table.Tbody>
						</Table>
					</div>
				</div>
			</section>
		</>
	);
};
export default RatingUsers;
