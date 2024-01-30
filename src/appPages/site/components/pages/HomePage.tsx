import React, { FC } from 'react';
import Welcome from '@/appPages/site/components/pages/homeSection/Welcome';
import AboutUs from '@/appPages/site/components/pages/homeSection/AboutUs';

const HomePage: FC = () => {
	return (
		<>
			<Welcome />
			<AboutUs />
		</>
	);
};
export default HomePage;
