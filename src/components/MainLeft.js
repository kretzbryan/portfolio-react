import React from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import SplashText from './SplashText';
import { AnimatePresence, motion } from 'framer-motion';
import MainLeftTitle from './MainLeftTitle';

const MainLeft = ({ menuOpen, currentWindow }) => {
	const components = {
		'about-me': <About />,
		expertise: <Skills />,
		projects: <Projects />,
	};

	const titles = {
		'about-me': 'About Me',
		expertise: 'Expertise',
		projects: 'Projects',
	};
	return (
		<div
			className={`left${menuOpen ? ' menu-open' : ''}${
				currentWindow ? ` ${currentWindow}` : ''
			}`}>
			<AnimatePresence>
				{currentWindow ? <MainLeftTitle title={titles[currentWindow]} /> : null}
			</AnimatePresence>
			{menuOpen ? components[currentWindow] : <SplashText />}
		</div>
	);
};

export default MainLeft;
