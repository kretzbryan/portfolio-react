import React, { useState } from 'react';
import HoveredUnderLay from './HoveredUnderLay';
import Project from './Project';

import { project_data } from '../utilities.js/project_data';

const Projects = () => {
	const [current, setCurrent] = useState(null);
	const [currentHovered, setCurrentHovered] = useState(null);
	const handleMouseLeave = () => {
		setCurrentHovered(null);
	};

	return (
		<section className='project__container'>
			{currentHovered || current ? (
				<img
					className='project__image'
					src={project_data[currentHovered || current].image}
					alt='landing screenshot'
				/>
			) : null}
			<ul className='project__list'>
				<li
					onMouseLeave={handleMouseLeave}
					onMouseEnter={() => setCurrentHovered('rove')}>
					<button onClick={() => setCurrent('rove')} className='nav__link'>
						Rove
					</button>
				</li>
				<li
					onMouseLeave={handleMouseLeave}
					onMouseEnter={() => setCurrentHovered('rednose')}>
					<button onClick={() => setCurrent('rednose')} className='nav__link'>
						Rednose
					</button>
				</li>
				<li
					onMouseLeave={handleMouseLeave}
					onMouseEnter={() => setCurrentHovered('cirque-connections')}>
					<button
						onClick={() => setCurrent('cirque-connections')}
						className='nav__link'>
						Cirque Connections
					</button>
				</li>
			</ul>
			{current ? <Project {...project_data[current]} /> : null}
			{/* <section className='project__section'>
				<a
					className='project__link'
					href='https://projectoneblog.herokuapp.com/'>
					<div className='project__card'>
						<img
							className='project__image'
							src='../images/blog-landing.png'
							alt='landing screenshot'
						/>
						<h5 className='project__title'>B'Ryan's Blog Stop</h5>
						<p className='project__text summary'>
							A personal blogging site in which users can collaborate with each
							other on various interests. This was a pair programming project
							with one other person.
						</p>
						<p className='project__text stack'>
							Bootstrap, MongoDB, Express, Node.js
						</p>
					</div>
				</a>
				<a
					className='project__link'
					href='https://bkretzwayfarer.herokuapp.com/'>
					<div className='project__card'>
						<img
							className='project__image'
							src='../images/wayfarer-landing.png'
							alt='landing screenshot'
						/>
						<h5 className='project__title'>Wayfarer Project</h5>
						<p className='project__text summary'>
							This is a project which I, and two other people created. It's a
							Django/Python application for a mock client, built to their
							specifications.
						</p>
						<p className='project__text stack'>
							Python, Jinja, Django, Pillow, Bootstrap, CSS, Javascript
						</p>
					</div>
				</a>
			</section>
			<section className='project__section'>
				<a
					className='project__link'
					href='https://rednose-multipage.herokuapp.com/'>
					<div className='project__card'>
						<img
							className='project__image'
							src='../images/andrea-d.png'
							alt='landing screenshot'
						/>
						<h5 className='project__title'>Rednose</h5>
						<p className='project__text summary'>
							This project is a networking platform for circus professionals and
							clients that want to hire them. This was my final project for
							school, that I am currently refactoring with react and redux.
						</p>
						<p className='project__text stack'>
							Bootstrap, MongoDB, Express, Node.js, CSS
						</p>
					</div>
				</a>
				<a className='project__link' href='https://www.cirque-connections.com/'>
					<div className='project__card'>
						<img
							className='project__image'
							src='../images/cirque-connections.png'
							alt='landing screenshot'
						/>
						<h5 className='project__title'>Cirque Connections</h5>
						<p className='project__text summary'>
							This project is a react refactor of my final project for school
							using redux global state. For this iteration, I decided to create
							a new layout, as well as refine features. Stay tuned for more!
						</p>
						<p className='project__text stack'>
							Sass, MongoDB, Express, Node.js, React, Redux, Axios
						</p>
					</div>
				</a>
			</section> */}
		</section>
	);
};

export default Projects;
