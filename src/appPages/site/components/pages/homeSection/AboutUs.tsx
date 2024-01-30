import React, { FC } from 'react';
import scss from './AboutUs.module.scss';

const AboutUs: FC = () => {
	return (
		<>
			<section className={scss.AboutUs}>
				<div className="container">
					<div className={scss.content}>
						<h1 className={scss.title}>
							What is <span>ElchoCrud</span>
						</h1>
					</div>
				</div>
			</section>
		</>
	);
};
export default AboutUs;
