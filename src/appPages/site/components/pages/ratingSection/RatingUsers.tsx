'use client';
import React from 'react';
import scss from './RatingUsers.module.scss';
import Image from 'next/image';
import { ScrollArea, Box, Table } from '@mantine/core';
import { useGetRatingQuery } from '@/redux/api/rating';
import AnimatedNumbers from '../../framerMotion/AnimatedNumbers';

const RatingUsers = () => {
	const { data } = useGetRatingQuery();

	const rows = data?.results.map((item, index) => (
		<Table.Tr key={index}>
			<Table.Td>
				{index === 0 ? (
					<span className={scss.firstPlaceNumber}>{index + 1}</span>
				) : index === 1 ? (
					<span className={scss.secondPlaceNumber}>{index + 1}</span>
				) : index === 2 ? (
					<span className={scss.thirdPlaceNumber}>{index + 1}</span>
				) : item.role === 'ADMIN' ? (
					<span className={scss.AdminPlaceNumber}>{index + 1}</span>
				) : (
					<span>{index + 1}</span>
				)}
			</Table.Td>
			<Table.Td>
				<div className={scss.flex_user}>
					<Image
						className={scss.photo}
						src={item.photo}
						width={30}
						height={30}
						alt={`${item.firstName} ${item.lastName}`}
					/>
					{index === 0 ? (
						<span className={scss.firstPlaceName}>
							{item.firstName} {item.lastName}
						</span>
					) : index === 1 ? (
						<span className={scss.secondPlaceName}>
							{item.firstName} {item.lastName}
						</span>
					) : index === 2 ? (
						<span className={scss.thirdPlaceName}>
							{item.firstName} {item.lastName}
						</span>
					) : item.role === 'ADMIN' ? (
						<span className={scss.AdminPlaceName}>
							{item.firstName} {item.lastName}
						</span>
					) : (
						<span>
							{item.firstName} {item.lastName}
						</span>
					)}
				</div>
			</Table.Td>
			<Table.Td>
				<AnimatedNumbers value={item.totalReq!} />
			</Table.Td>
			<Table.Td>
				{item.get! ? <AnimatedNumbers value={item.get!} /> : 0}
			</Table.Td>
			<Table.Td>
				{item.post! ? <AnimatedNumbers value={item.post!} /> : 0}
			</Table.Td>
			<Table.Td>
				{item.put! ? <AnimatedNumbers value={item.put!} /> : 0}
			</Table.Td>
			<Table.Td>
				{item.patch! ? <AnimatedNumbers value={item.patch!} /> : 0}
			</Table.Td>
			<Table.Td>
				{item.delete! ? <AnimatedNumbers value={item.delete!} /> : 0}
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
						<ScrollArea type="always" offsetScrollbars classNames={scss}>
							<Box w={1240} style={{ paddingBottom: 15 }}>
								<Table
									striped
									stripedColor="#181818"
									highlightOnHover
									highlightOnHoverColor="#6640d996"
									withTableBorder
									withColumnBorders
								>
									<Table.Thead>
										<Table.Tr>
											<Table.Th>№</Table.Th>
											<Table.Th>User</Table.Th>
											<Table.Th>
												Total R. <span style={{ color: 'red' }}>(Ex. GET)</span>
											</Table.Th>
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
							</Box>
						</ScrollArea>
					</div>
				</div>
			</section>
		</>
	);
};
export default RatingUsers;
