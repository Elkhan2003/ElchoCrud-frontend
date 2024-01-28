import React, { FC } from 'react';
import CreateCrud from '@/appPages/site/components/pages/dashboardSection/CreateCrud';
import RenderUserCrud from '@/appPages/site/components/pages/dashboardSection/RenderUserCrud';

const DashboardPage: FC = () => {
	return (
		<>
			<CreateCrud />
			<RenderUserCrud />
		</>
	);
};
export default DashboardPage;
