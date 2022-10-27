// import roveImage from ''

import ccImage from '../images/cirque-connections.png';
import rednoseImage from '../images/andrea-d.png';
import roveImage from '../images/rove_snapshot-1.png';
import React from 'react';

export const project_data = {
	rove: {
		image: roveImage,
		title: 'Travel with Rove',
		href: 'https://www.travelwithrove.com/',
		description: `Rove is an emerging travel startup based in Chicago. It is a solution for travelers seeking new vacation experiences without the chore of the lengthy planning that can be involved. It also serves as a tool for the administrator; the administrative application provides an administrator with an easy to use solution for curating vacations to the vision of a user's perfect vacation! I am the sole UI engineer - working closely with key stake holders - building the foundational front-end infrastructure using React and Redux. I also provided an integral role in creating the back-end infrastructure using Express and MongoDB, as well as provide support for Enterprise API integration.`,
		techStack: [
			<>
				Sass <i class='devicon-sass-original colored'></i>
			</>,
			<>
				MongoDB
				<i class='devicon-mongodb-plain-wordmark colored'></i>
			</>,
			<>
				Express
				<i class='devicon-express-original-wordmark colored'></i>
			</>,
			<>
				Node.JS
				<i class='devicon-nodejs-plain-wordmark colored'></i>
			</>,
			<>
				React
				<i class='devicon-react-original-wordmark colored'></i>
			</>,
			<>
				Redux
				<i class='devicon-redux-original colored'></i>
			</>,
		],
	},
	'cirque-connections': {
		image: ccImage,
		title: 'Cirque Connections',
		href: 'https://www.cirque-connections.com/',
		description: `This project is a react refactor of my final project for school
    using redux global state. For this iteration, I decided to create
    a new layout, as well as refine features. Stay tuned for more!`,
		techStack: [
			'Sass',
			'MongoDB',
			'Express',
			'Node.js',
			'React',
			'Redux',
			'Axios',
		],
	},
	rednose: {
		image: rednoseImage,
		title: 'Rednose',
		href: 'https://rednose-multipage.herokuapp.com/',
		description: `This project is a networking platform for circus professionals and
    clients that want to hire them. This was my final project for
    school, that I am currently refactoring with react and redux.`,
		techStack: ['CSS', 'MongoDB', 'Express', 'Node.js'],
	},
};
