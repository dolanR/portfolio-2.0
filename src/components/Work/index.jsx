import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGithubAlt, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const projects = [
	{
		title: 'Game of Thrones Website',
		description:
			'Website made using React and Vite. Uses the Game of Thrones API (anapioficeandfire.com) to display characters with search functionality, and books.',
		repo: 'https://github.com/dolanR/GOTapp',
		live: 'https://dolanr.github.io/GOTapp/',
		skills: 'HTML, Tailwind CSS, JavaScript, React, Vite, npm, API',
		image: '/images/dolanGOTsite.PNG',
	},
	{
		title: 'Calculator',
		description:
			'Calculator made using React inspired by the FreeCodeCamp calculator. Two active displays and fully functional.',
		repo: 'https://github.com/dolanR/calculator',
		live: 'https://dolanr.github.io/calculator/',
		skills: 'HTML, CSS, JavaScript, React',
		image: '/images/dolanCalculator.PNG',
	},
	{
		title: 'Current Portfolio Website',
		description:
			'Updated portfolio website using React and Vite with several npm packages. Mainly react-router-dom in order to make a single page application. Looking to come back in the future after some experience with TailwindCSS to make it less CSS heavy.',
		repo: 'https://github.com/dolanR/portfolio-2.0',
		live: 'https://dolan.dev/',
		skills: 'HTML, CSS, JavaScript, React, Vite, npm',
		image: '/images/dolanPW2.PNG',
	},
	{
		title: 'Interval Timer',
		description:
			'Interval timer made using React. Allows for custom intervals for breaks and session lengths for varieties of use. Inspired by the FreeCodeCamp interval timer.',
		repo: 'https://github.com/dolanR/Interval-Timer',
		live: 'https://dolanr.github.io/Interval-Timer/',
		skills: 'HTML, CSS, JavaScript, React, Vite',
		image: '/images/dolanIntervalTimer.PNG',
	},
	{
		title: 'Tic Tac Toe',
		description:
			'My take on Tic Tac Toe using React. Fully functional for two players with reset button, current player, and winner display.',
		repo: 'https://github.com/dolanR/ticTacToe',
		live: 'https://dolanr.github.io/ticTacToe/',
		skills: 'HTML, CSS, JavaScript, React, Vite',
		image: '/images/dolanTicTacToe.PNG',
	},
	{
		title: 'Drum Machine',
		description:
			'FreeCodeCamp project using React. Allows for keyboard input and mouse input. Each key has a unique sound and display, with a power slider to power the application on and off.',
		repo: 'https://github.com/dolanR/fcc-drum-machine',
		live: 'https://dolanr.github.io/fcc-drum-machine/',
		skills: 'HTML, CSS, JavaScript, React',
		image: '/images/dolanDrumMachine.PNG',
	},
	{
		title: 'First Portfolio Website',
		description:
			'My amateur attempt at a portfolio website using HTML, CSS, and JavaScript right after learning them. I learned a lot from this project and it was a great way to get my feet wet.',
		repo: 'https://github.com/dolanR/Portfolio-Website',
		live: '',
		skills: 'HTML, CSS, JavaScript',
		image: '/images/dolanPW1.PNG',
	},
];

const Work = () => {
	const CustomButtonGroupAsArrows = ({ next, previous }) => {
		return (
			<div
				style={{
					textAlign: 'center',
				}}
				className='arrow-container'
			>
				<FontAwesomeIcon icon={faChevronLeft} onClick={previous} className='left-arrow carousel-arrow'>
					Prev
				</FontAwesomeIcon>
				<FontAwesomeIcon icon={faChevronRight} onClick={next} className='right-arrow carousel-arrow'>
					Next
				</FontAwesomeIcon>
			</div>
		);
	};
	const CustomDot = ({ onClick, active, index, carouselState }) => {
		const { currentSlide } = carouselState;
		return (
			<li>
				<button
					style={{ background: active ? '#6a0c7d' : '#fff' }}
					onClick={() => onClick()}
					className='carousel-dot'
				/>
			</li>
		);
	};

	return (
		<div className='container work-page'>
			<Carousel
				responsive={{
					superLargeDesktop: {
						breakpoint: { max: 4000, min: 3000 },
						items: 5,
					},
					desktop: {
						breakpoint: { max: 3000, min: 1024 },
						items: 3,
					},
					tablet: {
						breakpoint: { max: 1024, min: 600 },
						items: 2,
					},
					mobile: {
						breakpoint: { max: 600, min: 0 },
						items: 1,
					},
				}}
				arrows={false}
				showDots
				infinite
				containerClass='carousel-container'
				dotListClass='carousel-dots-container'
				itemClass='carousel-item'
				partialVisbile={false}
				renderDotsOutside
				renderButtonGroupOutside
				customButtonGroup={<CustomButtonGroupAsArrows />}
				customDot={<CustomDot />}
			>
				{projects.map((project, index) => {
					return (
						<div className={`project`}>
							<div className='project-top-half'>
								<h1 className='project-title'>{project.title}</h1>
								<img src={project.image} className='project-image' />
							</div>
							<div className='project-bottom-half'>
								<div className='project-skills'>{project.skills}</div>
								<div className='project-description'>{project.description}</div>
								<div className='project-link-container'>
									<a href={project.repo} target='_blank'>
										<FontAwesomeIcon icon={faGithub} /> Repo
									</a>
									<a href={project.live} target='_blank'>
										<FontAwesomeIcon icon={faGithubAlt} /> Live
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
};

export default Work;
