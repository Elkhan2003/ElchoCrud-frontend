import React, { FC } from 'react';
import scss from './CreateCrud.module.scss';

const CreateCrud: FC = () => {
	return (
		<>
			<section className={scss.CreateCrud}>
				<div className="container">
					<div className={scss.content}>
						<h3>CreateCrud</h3>
					</div>
				</div>
			</section>
		</>
	);
};
export default CreateCrud;
