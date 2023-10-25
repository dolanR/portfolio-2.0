import './index.css';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const Home = () => {
	useEffect(() => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
		window.addEventListener('resize', () => {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		});
	}, []);
	return (
		<div className='container home-page'>
			<div className='text-zone'>
				<h1>
					Hi, <br />
					I'm<span className='name'> Dolan</span>
				</h1>
				<Typewriter
					options={{
						strings: [
							'web developer',
							'jiu-jitsu competitor',
							'anya (my gf) lover',
							'raccoon admirer',
							'turbo gamer',
							'pizza',
							'tacos',
						],
						autoStart: true,
						loop: true,
					}}
				/>
			</div>
			<Link to='/about' className='home-button'>
				<FontAwesomeIcon icon={faChevronRight} size='2x' />
				<FontAwesomeIcon icon={faChevronRight} size='2x' />
			</Link>
			<div className='home-image-container'>
				<img className='home-image' src='/images/dolan-home-photo.webp' alt='Me competing' />
			</div>
		</div>
	);
};

export default Home;
