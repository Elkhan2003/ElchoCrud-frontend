import React, { FC } from 'react';
import scss from './IsAuthRightNow.module.scss';

const IsAuthRightNow: FC = () => {
	return (
		<>
			<section className={scss.AuthRightNow}>
				<div className="container">
					<div className={scss.content}>
						<h1 className={scss.title}>
							Authorize on the website to access all the features of{' '}
							<span>ElchoCrud</span>
						</h1>
					</div>
				</div>
			</section>
		</>
	);
};
export default IsAuthRightNow;
