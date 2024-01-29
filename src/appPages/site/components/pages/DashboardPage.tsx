'use client';
import React, { FC } from 'react';
import { useGetMeQuery } from '@/redux/api/me';
import CreateCrud from '@/appPages/site/components/pages/dashboardSection/CreateCrud';
import RenderUserCrud from '@/appPages/site/components/pages/dashboardSection/RenderUserCrud';
import AuthRightNow from '@/appPages/site/components/pages/dashboardSection/AuthRightNow';

const DashboardPage: FC = () => {
	const { data } = useGetMeQuery();
	return (
		<>
			{data?.user ? (
				<>
					<CreateCrud />
					<RenderUserCrud />
				</>
			) : (
				<AuthRightNow />
			)}
		</>
	);
};
export default DashboardPage;
