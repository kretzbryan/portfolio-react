import React, { useEffect, useState } from 'react';
import MainLeft from './MainLeft';
import MainRight from './MainRight';
import SplashLoader from './SplashLoader';

const Main = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [currentWindow, setCurrentWindow] = useState('about-me');
	const [showMain, setShowMain] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShowMain(true);
		}, 2050);
	}, []);

	return (
		<main className={`portfolio__main${menuOpen ? ' menu-open' : ''}`}>
			<SplashLoader />
			{showMain ? (
				<>
					<MainLeft menuOpen={menuOpen} currentWindow={currentWindow} />
					<MainRight
						menuOpen={menuOpen}
						setMenuOpen={setMenuOpen}
						setCurrentWindow={setCurrentWindow}
					/>
				</>
			) : null}
		</main>
	);
};

export default Main;
