import React, { useState } from 'react';
import MainLeft from './MainLeft';
import MainRight from './MainRight';

const Main = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [currentWindow, setCurrentWindow] = useState('about-me');
	return (
		<main className={`portfolio__main${menuOpen ? ' menu-open' : ''}`}>
			<MainLeft menuOpen={menuOpen} currentWindow={currentWindow} />
			<MainRight
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
				setCurrentWindow={setCurrentWindow}
			/>
		</main>
	);
};

export default Main;
