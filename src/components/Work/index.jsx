import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGithubAlt, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const projects = [
	{
		title: 'BJJ Map',
		description:
			'A map of Brazilian Jiu Jitsu competitions around the world. Uses Mapbox GL JS along with several packages to make it compatible with React. Users can login and favorite competitions, adding them to a protected page.',
		repo: 'https://github.com/dolanR/bjj-map',
		live: 'https://bjj.dolan.dev/',
		skills: 'Tailwind CSS, TypeScript, React, Turso (SQLite) Database, Clerk User Auth, Yarn, Vite',
		image: '/images/bjj-map-site.webp',
	},
	{
		title: 'Social Media App',
		description:
			'A completely custom social media app made in collaboration with a good friend and fellow developer. Features user authentication (requires Github account), posts with images, likes, and comments.',
		repo: 'https://github.com/Trifall/social-media',
		live: 'https://social.trifall.com/',
		skills: 'Tailwind CSS, TypeScript, React, Next.js, Next-Auth, Turso (SQLite) Database, Yarn',
		image: '/images/social-media-site.webp',
	},
	{
		title: 'Game of Thrones Website',
		description:
			'Website made using React and Vite. Uses the Game of Thrones API (anapioficeandfire.com) to display characters with search functionality, and books.',
		repo: 'https://github.com/dolanR/GOTapp',
		live: 'https://dolanr.github.io/GOTapp/',
		skills: 'Tailwind CSS, JavaScript, React, Vite, npm',
		image: '/images/dolanGOTsite.webp',
	},
	{
		title: 'Calculator',
		description:
			'Calculator made using React inspired by the FreeCodeCamp calculator. Two active displays and fully functional.',
		repo: 'https://github.com/dolanR/calculator',
		live: 'https://dolanr.github.io/calculator/',
		skills: 'CSS, JavaScript, React',
		image: '/images/dolanCalculator.webp',
	},
	{
		title: 'Current Portfolio Website',
		description:
			'Updated portfolio website using React and Vite with several npm packages. Mainly react-router-dom in order to make a single page application. Looking to come back in the future after some experience with TailwindCSS to make it less CSS heavy.',
		repo: 'https://github.com/dolanR/portfolio-2.0',
		live: 'https://dolan.dev/',
		skills: 'CSS, JavaScript, React, Vite, npm',
		image: '/images/dolanPW2.webp',
	},
	{
		title: 'First Portfolio Website',
		description:
			'My amateur attempt at a portfolio website using HTML, CSS, and JavaScript right after learning them. I learned a lot from this project and it was a great way to get my feet wet.',
		repo: 'https://github.com/dolanR/Portfolio-Website',
		live: '',
		skills: 'HTML, CSS, JavaScript',
		image: '/images/dolanPW1.webp',
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
