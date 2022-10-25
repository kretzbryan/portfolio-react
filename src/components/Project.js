import React from 'react';

const Project = ({ title, image, href, description, techStack }) => {
	return (
		<main className='project__card'>
			<h5 className='project__title'>{title}</h5>
			<div className='flex'>
				<ul className='project__text stack'>
					{techStack.map((item) => (
						<li>{item}</li>
					))}
				</ul>
				<p className='project__text summary'>{description}</p>
			</div>
		</main>
	);
};

export default Project;
