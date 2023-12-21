import React, { FC } from "react";
import scss from "./Footer.module.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: FC = () => {
	return (
		<>
			<div className={`${scss.footer__page} ${scss.text__z__index}`}>
				<div className="container">
					<div className={scss.content}>
						<p>Copyright © 2023. All rights are reserved</p>
						<p className={scss.center__text}>
							Built with<span className={scss.heart}>♡</span>by
							<span>
								<a href="https://nextjs.org/" target="_blank">
									Elcho911
								</a>
							</span>
						</p>
						<div className={`${scss.my__icons}`}>
							<a
								className={scss.icon}
								href="https://www.linkedin.com/in/elcho/"
								target="_blank"
								aria-label="Linkedin"
							>
								<FaLinkedin />
							</a>
							<a
								className={scss.icon}
								href="https://github.com/Elkhan2003"
								target="_blank"
								aria-label="GitHub"
							>
								<FaGithub />
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Footer;
