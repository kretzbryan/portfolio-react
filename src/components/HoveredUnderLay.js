import React from 'react';

import image from '../images/cirque-connections.png';

const HoveredUnderLay = () => {
	return (
		<div className='hovered-container'>
			<aside className='project__carousel'>
				<img className='project__image' src={image} alt='landing screenshot' />
			</aside>
			<section>
				This project is a react refactor of my final project for school using
				redux global state. For this iteration, I decided to create a new
				layout, as well as refine features. Stay tuned for more!
			</section>
		</div>
	);
};

export default HoveredUnderLay;
