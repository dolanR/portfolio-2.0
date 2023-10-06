import AnimateLetters from '../AnimateLetters';
import './index.css';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
	const [letterClass, setLetterClass] = useState('letter-animate');
	const nameArray = ['D', 'o', 'l', 'a', 'n'];

	return (
		<div className='container home-page'>
			<div className='text-zone'>
				<h1>
					Hi, <br />
					I'm<span> </span>
					<AnimateLetters letterClass={letterClass} strArr={nameArray} />
				</h1>
				<Typewriter
					options={{
						strings: ['web developer', 'jiu-jitsu competitor', 'raccoon lover', 'turbo gamer', 'pizza', 'tacos'],
						autoStart: true,
						loop: true,
					}}
				/>
				<Link to='/about' className='home-button'>
					<FontAwesomeIcon icon={faChevronRight} size='2x' />
					<FontAwesomeIcon icon={faChevronRight} size='2x' />
				</Link>
			</div>
			<div className='home-image-container'>
				<img className='home-image' src='https://i.ibb.co/pXvwYph/IMG-7170.jpg' alt='Me competing' />
			</div>
		</div>
	);
};

export default Home;
