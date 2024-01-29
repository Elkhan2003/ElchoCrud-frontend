import React, { FC } from 'react';
import scss from './AuthRightNow.module.scss';

const AuthRightNow: FC = () => {
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
export default AuthRightNow;
