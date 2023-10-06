import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import React, { useState } from 'react';

const About = () => {
	const [currentCard, setCurrentCard] = useState('');

	const handleClick = (string) => {
		if(currentCard === string) {
			setCurrentCard('')
		} else {
			setCurrentCard(string)
		}
	}

	return (
		<div className='container about-page'>
			<div className='card-container'>
					<div className={`card about-card ${currentCard === 'about' ? 'active-card' : ''}`} onClick={() => handleClick('about')}>
						<div className='card-heading'>ABOUT ME</div>
						{currentCard === 'about' && (
							<div className='card-content'>
								<p>I'm a web developer and Jiu-Jitsu athlete</p>
								<p>I love learning, animals, and pizza and tacos, and pizza tacos? Calzones?</p>
							</div>
						)}
					</div>
					<div className={`card bjj-card ${currentCard === 'bjj' ? 'active-card' : ''}`} onClick={() => handleClick('bjj')}>
						<div className='card-heading'>JIU - JITSU</div>
						{currentCard === 'bjj' && (
							<div className='card-content'>
								<p></p>
							</div>
						)}
					</div>
					<div className={`card career-card ${currentCard === 'career' ? 'active-card' : ''}`} onClick={() => handleClick('career')}>
						<div className='card-heading'>CAREER</div>
						{currentCard === 'career' && (
							<div className='card-content'>
								<p></p>
							</div>
						)}
					</div>
					<div className={`card languages-card ${currentCard === 'languages' ? 'active-card' : ''}`} onClick={() => handleClick('languages')}>
						<div className='card-heading'>LANGUAGES</div>
						{currentCard === 'languages' && (
							<div className='card-content'>
								<p></p>
							</div>
						)}
					</div>
			</div>
		</div>
	);
};

export default About;
