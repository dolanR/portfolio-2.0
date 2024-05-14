import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import { useState } from 'react';
import { faCss3, faHtml5, faJava, faJs, faNodeJs, faNpm, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { SiTypescript, SiYarn, SiTailwindcss, SiJest, SiSpring } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { faCloud, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';

const About = () => {
	const [currentCard, setCurrentCard] = useState('');

	const handleClick = (string) => {
		if (currentCard === string) {
			setCurrentCard('');
		} else {
			setCurrentCard(string);
		}
	};

	return (
		<div className='container about-page'>
			<div className='card-container'>
				<div
					className={`card about-card ${currentCard === 'about' ? 'active-card' : ''}`}
					onClick={() => handleClick('about')}
				>
					<div className='card-heading'>ABOUT ME</div>
					{currentCard === 'about' && (
						<div className='card-content about-card-content'>
							<p>A web developer and Jiu-Jitsu athlete</p>
							<p>I love learning, animals (raccoons in particular), pizza, and tacos, and pizza tacos? Calzones?</p>
							<p>In order of priority: Learning things, racoons, and calzones</p>
						</div>
					)}
				</div>
				<div
					className={`card bjj-card ${currentCard === 'bjj' ? 'active-card' : ''}`}
					onClick={() => handleClick('bjj')}
				>
					<div className='card-heading'>JIU - JITSU</div>
					{currentCard === 'bjj' && (
						<div className='card-content bjj-card-content'>
							<p>Jiu Jitsu is my passion and hobby outside of development</p>
							<p>
								In simplest terms, it's fighting someone without the use of striking (punches, kicks, etc.) while also
								wearing fancy pyjamas (yes you can grab onto them)
							</p>
							<p>
								I've been doing it for 5ish years, I'm a purple belt and I compete in international tournaments against
								the best to test my skills and challenge myself
							</p>
						</div>
					)}
				</div>
				<div
					className={`card career-card ${currentCard === 'career' ? 'active-card' : ''}`}
					onClick={() => handleClick('career')}
				>
					<div className='card-heading'>CAREER</div>
					{currentCard === 'career' && (
						<div className='card-content career-card-content'>
							<p>
								I'm currently a Full Stack Engineer at AlgoPeak, a startup that helps other startups by providing them
								with the help and tools they need to get their MVP out. So far I've been doing work in a small team, as
								well as freelance web design on the side. Sometimes I whip out the ol' Doordash bag and deliver some
								food to keep the lights on.
							</p>
							<p>
								I learned C++ in college, but I never felt like I really understood what I was doing and why, but I
								absolutely loved the process of solving problems and infinitely improving (very similar to jiu-jitsu I
								must add)
							</p>
							<p>
								After graduating, I began to do some research on my own, and tossed myself into this endless world of
								possibilities, beginning my journey on FreeCodeCamp
							</p>
							<p>
								Recently I've been super into front-end development and animating things with Framer Motion, I'll update
								this portfolio some day!
							</p>
						</div>
					)}
				</div>
				<div
					className={`card languages-card ${currentCard === 'languages' ? 'active-card' : ''}`}
					onClick={() => handleClick('languages')}
				>
					<div className='card-heading'>TECHNOLOGIES</div>
					{currentCard === 'languages' && (
						<div className='card-content languages-card-content'>
							<div className='lc-card-left'>
								<p>Technologies I use now:</p>
								<div className='languages-container first-lc'>
									<FontAwesomeIcon
										icon={faHtml5}
										data-tooltip-id='html-tooltip'
										data-tooltip-place='right'
										className='grid-item'
									/>
									<Tooltip id='html-tooltip' classNameArrow='tooltip-arrow' className='tooltip'>
										HTML
									</Tooltip>
									<FontAwesomeIcon
										icon={faCss3}
										data-tooltip-id='css-tooltip'
										data-tooltip-place='right'
										className='grid-item'
									/>
									<Tooltip id='css-tooltip' classNameArrow='tooltip-arrow' className='tooltip'>
										CSS
									</Tooltip>
									<FontAwesomeIcon
										icon={faJs}
										data-tooltip-id='js-tooltip'
										data-tooltip-place='right'
										className='grid-item'
									/>
									<Tooltip id='js-tooltip' classNameArrow='tooltip-arrow' className='tooltip'>
										JavaScript
									</Tooltip>
									<FontAwesomeIcon
										icon={faReact}
										data-tooltip-id='react-tooltip'
										data-tooltip-place='right'
										className='grid-item'
									/>
									<Tooltip id='react-tooltip' classNameArrow='tooltip-arrow' className='tooltip'>
										React
									</Tooltip>
									<FontAwesomeIcon
										icon={faNpm}
										data-tooltip-id='npm-tooltip'
										data-tooltip-place='right'
										className='grid-item'
									/>
									<Tooltip id='npm-tooltip' classNameArrow='tooltip-arrow' className='tooltip'>
										npm
									</Tooltip>
									<SiTypescript data-tooltip-id='ts-tooltip' data-tooltip-place='right' className='grid-item' />
									<Tooltip id='ts-tooltip' classNameArrow='tooltip-arrow' className='tooltip'>
										TypeScript
									</Tooltip>
									<FontAwesomeIcon
										icon={faDatabase}
										data-tooltip-id='database-tooltip'
										data-tooltip-place='right'
										className='grid-item'
									/>
									<Tooltip id='database-tooltip' classNameArrow='tooltip-arrow' className='tooltip'>
										SQL, SQLite, PostgreSQL
									</Tooltip>
									<FontAwesomeIcon
										icon={faNodeJs}
										data-tooltip-id='node-tooltip'
										data-tooltip-place='right'
										className='grid-item'
									/>
									<Tooltip id='node-tooltip' classNameArrow='tooltip-arrow' className='tooltip'>
										Node.js
									</Tooltip>
									<SiTailwindcss data-tooltip-id='tailwind-tooltip' data-tooltip-place='right' className='grid-item' />
									<Tooltip id='tailwind-tooltip' classNameArrow='tooltip-arrow' className='tooltip'>
										Tailwind CSS
									</Tooltip>
									<SiYarn data-tooltip-id='yarn-tooltip' data-tooltip-place='right' className='grid-item' />
									<Tooltip id='yarn-tooltip' classNameArrow='tooltip-arrow' className='tooltip'>
										Yarn
									</Tooltip>
									<FontAwesomeIcon
										icon={faPython}
										data-tooltip-id='python-tooltip'
										data-tooltip-place='right'
										className='grid-item'
									/>
									<Tooltip id='python-tooltip' classNameArrow='tooltip-arrow' className='tooltip'>
										Python
									</Tooltip>
									<FontAwesomeIcon
										icon={faCloud}
										data-tooltip-id='cloud-tooltip'
										data-tooltip-place='right'
										className='grid-item'
									/>
									<Tooltip id='cloud-tooltip' classNameArrow='tooltip-arrow' className='tooltip'>
										Azure
									</Tooltip>
									<TbBrandFramerMotion data-tooltip-id='fm-tooltip' data-tooltip-place='right' className='grid-item' />
									<Tooltip id='fm-tooltip' classNameArrow='tooltip-arrow' className='tooltip'>
										Framer Motion
									</Tooltip>
								</div>
							</div>
							<div className='lc-card-right'>
								<div className='languages-container second-lc'>
									<FontAwesomeIcon
										icon={faJava}
										data-tooltip-id='java-tooltip'
										data-tooltip-place='left'
										className='grid-item'
									/>
									<Tooltip id='java-tooltip' classNameArrow='tooltip-arrow' className='tooltip'>
										Java
									</Tooltip>
									<SiSpring data-tooltip-id='spring-tooltip' data-tooltip-place='left' className='grid-item' />
									<Tooltip id='spring-tooltip' classNameArrow='tooltip-arrow' className='tooltip'>
										Spring Boot
									</Tooltip>
									<SiJest data-tooltip-id='jest-tooltip' data-tooltip-place='left' className='grid-item' />
									<Tooltip id='jest-tooltip' classNameArrow='tooltip-arrow' className='tooltip'>
										Jest
									</Tooltip>
								</div>
								<p>Technologies I plan to learn:</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default About;
