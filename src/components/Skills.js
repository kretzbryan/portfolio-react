import React, { Fragment } from 'react';

const Skills = () => {
	return (
		<section className='skill__container'>
			<div className='skill__card'>
				<h2 className='section__title'>Front-end:</h2>
				<p className='skill__description'>
					I have 2 1/2 years of experience in working with UI technologies,
					primarily focusing on React Architecture and global state management
					with Redux. As the sole UI engineer for Rove, I've played an integral
					role in frontend infrastructure design and component management, and
					continue to improve through design iteration.
				</p>
				<ul className='skill__list'>
					<li className='skill__list-item'>
						<i class='devicon-html5-plain-wordmark colored'></i>HTML
					</li>
					<li className='skill__list-item'>
						<i class='devicon-sass-original colored'></i>
						CSS/SASS
					</li>
					<li className='skill__list-item'>
						<i class='devicon-javascript-plain colored'></i>Javascript
					</li>
					<li className='skill__list-item'>
						<i class='devicon-react-original-wordmark colored'></i>
						React
					</li>
					<li className='skill__list-item'>
						<i class='devicon-redux-original colored'></i>
						Redux
					</li>
					<li className='skill__list-item'>
						<i class='devicon-bootstrap-plain-wordmark colored'></i>Bootstrap
					</li>
				</ul>
			</div>
			<div className='skill__card'>
				<h2 className='section__title'>Back-end:</h2>
				<p className='skill__description'>
					My core focus has been with noSQL databases, with 2 years of back-end
					experience. As one of the first engineers at Rove, I was essential to
					key infrastructure decisions, as well as provide support for
					enterprise API integrations.
				</p>
				<ul className='skill__list'>
					<li className='skill__list-item'>
						<i class='devicon-python-plain colored'></i>
						Python
					</li>
					<li className='skill__list-item'>
						<i class='devicon-django-plain-wordmark colored'></i>
						Django
					</li>
					<li className='skill__list-item'>
						<i class='devicon-postgresql-plain-wordmark colored'></i>
						PostgresQL
					</li>
					<li className='skill__list-item'>
						<i class='devicon-mongodb-plain-wordmark colored'></i>
						MongoDB
					</li>
					<li className='skill__list-item'>
						<i class='devicon-nodejs-plain-wordmark colored'></i>
						Node.JS
					</li>
					<li className='skill__list-item'>
						<i class='devicon-express-original-wordmark colored'></i>
						Express
					</li>
					<li className='skill__list-item'>
						<i class='devicon-go-original-wordmark colored'></i>
						Go
					</li>
				</ul>
			</div>
			{/* <section className='skill__section'>
				<div className='skill__card'>
					<ul className='skill__list'>
						<h3>Frontend</h3>
						<li
						className='skill__list-item'
						>HTML</li>
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
			</section> */}
		</section>
	);
};

export default Skills;
