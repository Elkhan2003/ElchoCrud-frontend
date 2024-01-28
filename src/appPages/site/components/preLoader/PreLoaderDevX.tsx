import React, { FC } from 'react';
import scss from '@/components/preloader/PreLoaderDevX.module.scss';

const PreLoaderDevX: FC = () => {
	return (
		<>
			<div className={scss.preLoader}>
				<p className={scss.title_loader}>
					Dev<span>X</span>
				</p>
				<span className={scss.loader}></span>
			</div>
		</>
	);
};
export default PreLoaderDevX;
