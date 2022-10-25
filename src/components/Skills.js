import React, { Fragment } from 'react';

const Skills = () => {
	return (
		<section className='skill__container'>
			<h2 className='section__title'>
				{' '}
				Languages/Frameworks
				<br />
				/Libraries{' '}
			</h2>
			<section className='skill__section'>
				<div className='skill__card'>
					<ul className='skill__list'>
						<h3>Frontend</h3>
						<li>HTML</li>
						<li>CSS/SASS</li>
						<li>Javascript</li>
						<li>React</li>
						<li>Redux</li>
						<li>Bootstrap</li>
					</ul>
				</div>
				<div className='skill__card'>
					<ul className='skill__list'>
						<h3>Backend</h3>
						<li>Python</li>
						<li>Django</li>
						<li>PostgresQL</li>
						<li>MongoDB</li>
						<li>Node.JS</li>
						<li>Express</li>
						<li></li>
					</ul>
				</div>
			</section>
		</section>
	);
};

export default Skills;
