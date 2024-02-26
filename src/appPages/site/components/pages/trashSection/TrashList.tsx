import React, { FC } from 'react';
import scss from './TrashList.module.scss';

const TrashList: FC = () => {
	return (
		<>
			<section className={scss.TrashList}>
				<div className="container">
					<div className={scss.content}>
						<h1 className={scss.title}>
							Deleted <span>Endpoints</span>
						</h1>
						<div className={scss.items}>
							<div className={scss.item}>Your Trashes</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default TrashList;
