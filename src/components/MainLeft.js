import React from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import SplashText from './SplashText';

const MainLeft = ({ menuOpen, currentWindow }) => {
	const components = {
		'about-me': <About />,
		expertise: <Skills />,
		projects: <Projects />,
	};
	return (
		<div className={`left${menuOpen ? ' menu-open' : ''}`}>
			{menuOpen ? components[currentWindow] : <SplashText />}
		</div>
	);
};

export default MainLeft;
