import React, { FC } from 'react';
import Link from 'next/link';
import scss from './Welcome.module.scss';
import Image from 'next/image';
import girl from '@/assets/girl.png';

const Welcome: FC = () => {
	return (
		<>
			<section className={scss.Welcome}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.left}>
							<h1 className={scss.title}>
								Explore the future of the <span>ElchoCrud</span>
							</h1>
							<p className={scss.text}>
								{/* eslint-disable-next-line react/no-unescaped-entities */}
								Let's explore and create your experience with ElchoCrud.
							</p>
							<div className={scss.buttons}>
								<Link href={'/dashboard'} className={scss.bg}>
									Get Started
								</Link>
								<Link href={'/dashboard'} className={scss.no_bg}>
									Explore Now
								</Link>
							</div>
						</div>
						<div className={scss.right}>
							<Image
								className={scss.girl_photo}
								src={girl}
								width={600}
								height={600}
								priority={true}
								alt={'girl'}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Welcome;
