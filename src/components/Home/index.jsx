import AnimateLetters from '../AnimateLetters';
import './index.css';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';

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
						strings: ['web developer', 'programmer', 'jiu-jitsu competitor', 'animal lover', 'gamer', 'pizza'],
						autoStart: true,
						loop: true,
					}}
				/>
			</div>
			<div className='scroller'>
				<img src='https://i.ibb.co/hg6YN1h/dolan-photo-3.jpg' alt='Me competing' className='scroller-photo' />
				<img src='https://i.ibb.co/wW4ZhcN/dolan-photo-2.jpg' alt='Me competing' className='scroller-photo' />
				<img src='https://i.ibb.co/tM3V3wy/dolan-photo-1.jpg' alt='Me competing' className='scroller-photo' />
				<img src='https://i.ibb.co/bPS0rkN/dolan-photo-4.jpg' alt='Me competing' className='scroller-photo' />
			</div>
		</div>
	);
};

export default Home;
