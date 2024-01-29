import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import scss from './Style.module.scss';
import { IoIosDoneAll } from 'react-icons/io';
import logo_wedevx from '@/assets/wedevx.png';
import {
	logo_chase,
	logo_apple,
	logo_microsoft,
	logo_verizon,
	logo_caterpillar,
	logo_amazon,
	logo_trueaccord,
	logo_openfit
} from '@/assets/company_logos';
import GoogleButton from '@/appPages/auth/components/pages/authButtons/GoogleButton';
import GitHubButton from '@/appPages/auth/components/pages/authButtons/GitHubButton';
import AppleButton from '@/appPages/auth/components/pages/authButtons/AppleButton';
import logo from '@/assets/logo.png';

const company_logos = [
	{
		img: logo_chase,
		width: 145,
		height: 28,
		alt: 'Chase'
	},
	{
		img: logo_apple,
		width: 80,
		height: 28,
		alt: 'Apple'
	},
	{
		img: logo_microsoft,
		width: 127,
		height: 28,
		alt: 'Microsoft'
	},
	{
		img: logo_verizon,
		width: 122,
		height: 28,
		alt: 'Verizon'
	},
	{
		img: logo_caterpillar,
		width: 49,
		height: 28,
		alt: 'CAT'
	},
	{
		img: logo_amazon,
		width: 90,
		height: 28,
		alt: 'Amazon'
	},
	{
		img: logo_trueaccord,
		width: 211,
		height: 28,
		alt: 'TrueAccord'
	},
	{
		img: logo_openfit,
		width: 92,
		height: 28,
		alt: 'OpenFit'
	}
];

const AuthPage: FC = () => {
	return (
		<>
			<div className={scss.auth}>
				{/* ! left */}
				<div className={scss.left}>
					<Link className={scss.back_link} href={'/'}>
						&lt; Back
					</Link>
					<div className={scss.container}>
						<div className={scss.content}>
							<div className={scss.get_started}>
								<h1 className={scss.sup_title}>Get started for free</h1>
								<div className={scss.blocks}>
									<div className={scss.block}>
										<div className={scss.icon}>
											<IoIosDoneAll />
										</div>
										<div className={scss.child_blcok}>
											<p className={scss.title}>Access to Micro Lectures</p>
											<p className={scss.text}>
												We provide free micro lectures on Java and soft-skills
												taught by expert instructors from top companies like
												Apple. Learn from the best and apply valuable knowledge
												in the real world.
											</p>
										</div>
									</div>
									<div className={scss.block}>
										<div className={scss.icon}>
											<IoIosDoneAll />
										</div>
										<div className={scss.child_blcok}>
											<p className={scss.title}>Reinforce Your Learning</p>
											<p className={scss.text}>
												Our platform offers java exercises for practice,
												providing instant automated results to track your
												progress and identify areas for improvement.
											</p>
										</div>
									</div>
									<div className={scss.block}>
										<div className={scss.icon}>
											<IoIosDoneAll />
										</div>
										<div className={scss.child_blcok}>
											<p className={scss.title}>Free Consultation</p>
											<p className={scss.text}>
												Free personalized consultations with our student
												advisors can help you identify learning goals, select
												courses, and get guidance on achieving your objectives.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className={scss.our_graduates}>
								<p className={scss.sup_title}>
									Our graduates work at companies like:
								</p>
								<div className={scss.images}>
									{company_logos.map((item, index) => (
										<Image
											key={index + 1}
											src={item.img}
											width={item.width}
											height={item.height}
											alt={item.alt}
											style={{
												width: item.width,
												height: item.height
											}}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* ! right */}
				<div className={scss.right}>
					<div className={scss.container}>
						<div className={scss.content}>
							<Link href="/" className={`${scss.logo_link}`}>
								<Image
									className={scss.icon}
									src={logo}
									width={100}
									height={100}
									priority
									alt="logo"
								/>
								Elcho<span>Crud</span>
							</Link>
							<div className={scss.auth_buttons}>
								<h2 className={scss.title}>Welcome back 👋</h2>
								<GoogleButton />
								<GitHubButton />
								<AppleButton />
								<p className={scss.privacy}>
									By logging in, you agree to our{' '}
									<Link href={'/privacy-policy.pdf'} target={'_blank'}>
										Privacy Policy
									</Link>{' '}
									and{' '}
									<Link href={'/terms-of-service.pdf'} target={'_blank'}>
										Terms of Service
									</Link>
									.
								</p>
								<p className={scss.auth_switcher}>
									{/* eslint-disable-next-line react/no-unescaped-entities */}
									Don't have an account? <span>Sign up</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default AuthPage;
