import React from 'react';

import headShot from '../images/headshot.jpg';

const About = () => {
	return (
		<section className='about__container'>
			<img className='about__headshot' src={headShot} alt='' />
			<p className='about__text'>
				My name is Bryan Kretz. I'm a full-stack software engineer based in the
				San Francisco Bay Area focusing on MongoDB, Express, Node.js and React.
				I'm always looking to advance my skills in all aspects of my life,
				whether that be in software development, learning to make a new dish, or
				learning new circus skills. If you dont see me behind a computer
				refining my coding skills, you'll likely find me walking my dog or
				hanging upside-down somewhere in the city. All of these things will
				include lots of coffee, though! If you're looking for someone to join
				your team, feel free to reach out!
			</p>
		</section>
	);
};

export default About;
