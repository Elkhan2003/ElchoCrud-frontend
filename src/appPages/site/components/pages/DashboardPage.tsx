'use client';
import React, { FC } from 'react';
import { useGetMeQuery } from '@/redux/api/me';
import IsAuthRightNow from '@/appPages/site/components/ui/isAuthRightNow/IsAuthRightNow';
import CreateCrud from '@/appPages/site/components/pages/dashboardSection/CreateCrud';
import RenderUserCrud from '@/appPages/site/components/pages/dashboardSection/RenderUserCrud';

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
				<IsAuthRightNow />
			)}
		</>
	);
};
export default DashboardPage;
