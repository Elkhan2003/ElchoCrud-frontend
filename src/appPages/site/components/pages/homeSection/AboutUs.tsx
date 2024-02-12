'use client';
import React, { FC } from 'react';
import scss from './AboutUs.module.scss';
import { ScrollArea, Box, Table } from '@mantine/core';

const elements = [
	{
		action: 'Create',
		http: 'POST',
		payload: 'json',
		url: '/<resource>',
		description: 'Create an entity represented by the JSON payload.'
	},
	{
		action: 'Read',
		http: 'GET',
		payload: '-',
		url: '/<resource>',
		description: 'Get all entities from the resource.'
	},
	{
		action: 'Read',
		http: 'GET',
		payload: '-',
		url: '/<resource>/<id>',
		description: 'Get a single entity.'
	},
	{
		action: 'Update',
		http: 'PUT',
		payload: 'json',
		url: '/<resource>/<id>',
		description: 'Update an entity with the JSON payload.'
	},
	{
		action: 'Update',
		http: 'PATCH',
		payload: 'json',
		url: '/<resource>/<id>',
		description: 'Partially update an entity with the JSON payload.'
	},
	{
		action: 'Delete',
		http: 'DELETE',
		payload: '-',
		url: '/<resource>/<id>',
		description: 'Delete an entity.'
	},
	{
		action: 'DeleteAll',
		http: 'DELETE',
		payload: '-',
		url: '/<resource>',
		description: 'Delete all entities from the resource.'
	}
];

const AboutUs: FC = () => {
	const rows = elements.map((element, index) => (
		<Table.Tr key={index}>
			<Table.Td>{element.action}</Table.Td>
			<Table.Td>{element.http}</Table.Td>
			<Table.Td>{element.payload}</Table.Td>
			<Table.Td>{element.url}</Table.Td>
			<Table.Td>{element.description}</Table.Td>
		</Table.Tr>
	));

	return (
		<>
			<section className={scss.AboutUs}>
				<div className="container">
					<div className={scss.content}>
						<h1 className={scss.title}>
							What is <span>ElchoCrud</span>
						</h1>

						<ScrollArea type="always" offsetScrollbars classNames={scss}>
							<Box w={1225} style={{ paddingBottom: 15 }}>
								<Table striped stripedColor="#181818">
									<Table.Thead>
										<Table.Tr>
											<Table.Th>Action</Table.Th>
											<Table.Th>HTTP</Table.Th>
											<Table.Th>Payload</Table.Th>
											<Table.Th>URL</Table.Th>
											<Table.Th>Description</Table.Th>
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
export default AboutUs;
