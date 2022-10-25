// import roveImage from ''

import ccImage from '../images/cirque-connections.png';
import rednoseImage from '../images/andrea-d.png';
import roveImage from '../images/rove_snapshot-1.png';

export const project_data = {
	rove: {
		image: roveImage,
		title: 'Travel with Rove',
		href: 'https://www.travelwithrove.com/',
		description: 'This is a description',
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
