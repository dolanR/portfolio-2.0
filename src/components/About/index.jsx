import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import {
	faCss3,
	faFreeCodeCamp,
	faGit,
	faGithub,
	faHtml5,
	faJs,
	faNode,
	faNodeJs,
	faNpm,
	faPushed,
	faPython,
	faReact,
	faSquareGit,
} from '@fortawesome/free-brands-svg-icons';
import {
	faCode,
	faCodeBranch,
	faCodeFork,
	faCodeMerge,
	faDatabase,
	faSheqel,
	faVirusCovid,
	faWind,
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
	return (
		<div className='container about-page'>
			<div className='about-text'>
				<h1>About me</h1>
				<p>I'm a passionate developer who loves learning, collaborating with others, and building cool things!</p>
				<p>
					I'm always looking to expand upon my knowledge and gain understanding of various tools to put my ideas into
					the world (easier said than done).
				</p>
				<p>
					Also, I have a purple belt in Brazilian Jiu-Jitsu and travel frequently to compete in international
					tournaments.
				</p>
			</div>
			<div className='skill-display'>
				<h1>Technologies I use</h1>
				<div className='skill-wrapper'>
					<FontAwesomeIcon icon={faHtml5} size='5x' />
					<FontAwesomeIcon icon={faCss3} size='5x' />
					<FontAwesomeIcon icon={faJs} size='5x' />
					<FontAwesomeIcon icon={faReact} size='5x' />
					<FontAwesomeIcon icon={faNodeJs} size='5x' />
					<FontAwesomeIcon icon={faNpm} size='5x' />
					<FontAwesomeIcon icon={faCodeMerge} size='5x' />
				</div>
				<h1>Technologies I'm learning</h1>
				<div className='skill-wrapper'>
					<FontAwesomeIcon icon={faDatabase} size='5x' />
				</div>
			</div>
		</div>
	);
};

export default About;
