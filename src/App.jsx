import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout/index.jsx';
import Home from './components/Home/index.jsx';
import About from './components/About/index.jsx';
import Work from './components/Work/index.jsx';
import Contact from './components/Contact/index.jsx';
import Transition from './components/Transition/index.jsx';
import { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';
import Particles from 'react-particles';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

function App() {
	const location = useLocation();
	const particlesInit = useCallback(async (engine) => {
		console.log(engine);
		await loadSlim(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);
	useEffect(() => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
		document.addEventListener('resize', () => {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		  });
	}, [])
	return (
		<div>
			<Particles
				id='tsparticles'
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					background: {
						color: {
							value: 'transparent',
						},
					},
					fpsLimit: 120,
					interactivity: {
						events: {
							onClick: {
								enable: false,
								mode: 'push',
							},
							onHover: {
								enable: false,
								mode: 'repulse',
							},
							resize: true,
						},
						modes: {
							push: {
								quantity: 4,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
						},
					},
					particles: {
						color: {
							value: '#ffffff',
						},
						links: {
							color: '#ffffff',
							distance: 150,
							enable: false,
							opacity: 0.5,
							width: 1,
						},
						move: {
							direction: 'top',
							enable: true,
							outModes: {
								default: 'out',
							},
							random: true,
							speed: 2,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 1500,
							},
							value: 25,
						},
						opacity: {
							value: 0.1,
						},
						shape: {
							type: 'circle',
						},
						size: {
							value: { min: 35, max: 90 },
						},
					},
					detectRetina: true,
				}}
			/>

			<AnimatePresence mode='wait'>
				<motion.div key={location.pathname}>
					<Transition />
					<Routes location={location}>
						<Route path='/' element={<Layout />}>
							<Route index element={<Home />} />
							<Route path='about' element={<About />} />
							<Route path='work' element={<Work />} />
							<Route path='contact' element={<Contact />} />
						</Route>
					</Routes>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}

export default App;
