import React, { Fragment } from 'react';

const Skills = () => {
	return (
		<section className='skill__container'>
			<div className='skill__card'>
				<h2 className='section__title'>Front-end:</h2>
				<p className='skill__description'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
					similique repellendus rerum laudantium a animi laborum vero maiores
					consequuntur minima. Incidunt exercitationem laboriosam numquam cumque
					accusantium doloribus cupiditate recusandae esse.
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
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
					similique repellendus rerum laudantium a animi laborum vero maiores
					consequuntur minima. Incidunt exercitationem laboriosam numquam cumque
					accusantium doloribus cupiditate recusandae esse.
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
						<i class='devicon-express-original'></i>
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
