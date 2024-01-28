import React, { FC } from 'react';
import CreateCrud from '@/appPages/site/components/pages/dashboardSection/CreateCrud';
import GetAllUserCrud from '@/appPages/site/components/pages/dashboardSection/GetAllUserCrud';

const DashboardPage: FC = () => {
	return (
		<>
			<CreateCrud />
			<GetAllUserCrud />
		</>
	);
};
export default DashboardPage;
