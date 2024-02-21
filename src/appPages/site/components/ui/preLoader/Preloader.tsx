import React, { FC } from 'react';
import scss from './PreLoader.module.scss';
// import { Dna } from "react-loader-spinner";

interface PreloaderType {
	className?: any;
}

const Preloader: FC<PreloaderType> = ({ className }) => {
	return (
		<div className={scss.loader}>
			{/* V1 */}
			{/* <div className={scss.pre_loader}>
				<Dna
					visible={true}
					height="225"
					width="225"
					ariaLabel="dna-loading"
					wrapperStyle={{}}
					wrapperClass="dna-wrapper"
				/>
			</div> */}

			{/* V2 */}
			<div className={scss.infinityChrome}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Preloader;
