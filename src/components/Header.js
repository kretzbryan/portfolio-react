import React from 'react';

const Header = () => {
	return (
		<header className='nav__header'>
			<div className='nav__container'>
				<a className='nav-link' href='/about'>
					What I'm About
				</a>
				<a className='nav-link' href='/projects'>
					Projects
				</a>
				<a href='/skills' className='nav-link'>
					Skills
				</a>
			</div>
		</header>
	);
};

export default Header;
