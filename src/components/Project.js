import React from 'react';

const Project = ({ title, image, href, description, techStack }) => {
	return (
		<main className='project__card'>
			<h5 className='project__title'>
				<a target='_blank' href={href}>
					{title}
				</a>
			</h5>
			<div className='flex'>
				<ul className='project__text-stack'>
					{techStack.map((item) => (
						<li>{item}</li>
					))}
				</ul>
				<div className='project__text-summary__container'>
					<img
						className='project__image'
						src={image}
						alt='landing screenshot'
					/>
					<p className='project__text-summary'>{description}</p>
				</div>
			</div>
		</main>
	);
};

export default Project;
