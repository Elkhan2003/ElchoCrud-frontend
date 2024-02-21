'use client';
import React, { FC } from 'react';
import { useGetMeQuery } from '@/redux/api/me';
import IsAuthRightNow from '@/appPages/site/components/ui/isAuthRightNow/IsAuthRightNow';
import RatingUsers from '@/appPages/site/components/pages/ratingSection/RatingUsers';

const RatingPage: FC = () => {
	const { data } = useGetMeQuery();
	return (
		<>
			{data?.user ? (
				<>
					<RatingUsers />
				</>
			) : (
				<IsAuthRightNow />
			)}
		</>
	);
};
export default RatingPage;
