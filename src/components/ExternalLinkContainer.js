import React from 'react';

const ExternalLinkContainer = ({ menuOpen }) => {
	return (
		<div className={`external__link__container${menuOpen ? ' menu-open' : ''}`}>
			<a
				href='https://www.linkedin.com/in/bryan-kretz/'
				className='external__link'
				target='_blank'>
				<i className='fab fa-linkedin'></i>
			</a>
			<a
				href='https://github.com/kretzbryan'
				className='external__link'
				target='_blank'>
				<i className='fab fa-github'></i>
			</a>
			<a
				href='mailto:kretzbryan@gmail.com'
				className='external__link'
				target='_blank'>
				<i className='far fa-envelope'></i>
			</a>
		</div>
	);
};

export default ExternalLinkContainer;
