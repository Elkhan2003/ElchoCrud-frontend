import React, { FC } from 'react';
import scss from './Welcome.module.scss';

const Welcome: FC = () => {
	return (
		<>
			<section className={scss.Welcome}>
				<div className="container">
					<div className={scss.content}>
						<div>
							<h1>
								Note: Service still in development. Instabilities are possible.
							</h1>
							<h1>CreateCrud</h1>
							<h2>
								Build web or mobile applications performing CRUD operations with
								<strong>no back-end code.</strong>
							</h2>
						</div>
						<div>https://crudcrud.com/api/ea751daef1fa4d6d9cf45021e433faab</div>
						<p>
							Your REST endpoint is up and ready to receive GET, POST, PUT and
							DELETE requests.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};
export default Welcome;
