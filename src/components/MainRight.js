import React from 'react';
import ExternalLinkContainer from './ExternalLinkContainer';
import frameMilk from '../images/noun-geometric-corner-deco-4922281-FEFEEB.svg';
import frameCoffee from '../images/noun-geometric-corner-deco-4922281-4E3F30.svg';

const MainRight = ({ menuOpen, setMenuOpen, setCurrentWindow }) => {
	return (
		<div className={`right${menuOpen ? ' menu-open' : ''}`}>
			<header>
				<h2>
					<button
						className={menuOpen ? 'close' : 'open'}
						onClick={() => setMenuOpen(!menuOpen)}>
						bk.dev <span>+</span>
					</button>
				</h2>
				{/* <img src={menuOpen ? frameCoffee : frameMilk} alt='' />
				<img src={frameMilk} alt='' /> */}
				<li-icon type='linkedin-logo' color='brand' role='img' aria-label=''>
					{/* {menuOpen ? ( */}
					<>
						<svg
							width='122pt'
							height='122pt'
							version='1.1'
							viewBox='0 0 122 122'
							preserveAspectRatio='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='m6.3984 6.3984v11.969h63.156c0.41016 1.2812 1.4219 2.293 2.6992 2.6875v4.5938h-11.48c-0.52344-1.6758-2.0742-2.9062-3.9297-2.9062-2.2773 0-4.1328 1.8555-4.1328 4.1328s1.8555 4.1328 4.1328 4.1328c1.8555 0 3.4062-1.2305 3.9297-2.918h28.414v10.805h10.805v28.531c-1.6758 0.52344-2.9062 2.0742-2.9062 3.9297 0 2.2773 1.8555 4.1328 4.1328 4.1328s4.1328-1.8555 4.1328-4.1328c0-1.8555-1.2305-3.4062-2.918-3.9297v-11.48h4.8398c0.38281 1.2305 1.3203 2.2148 2.5234 2.6484v62.375h11.801l0.003906-114.57zm112.77 19.25h-5.9258v-10.789h-10.805v-6.0273h16.73v16.82zm-23.758 0h-3.7617v-8.3594h8.3594v3.7617c-2.3047 0.48828-4.1094 2.293-4.5938 4.5938zm5.8125-2.293c1.9336 0 3.5078 1.5742 3.5078 3.5078 0 1.9336-1.5742 3.5078-3.5078 3.5078s-3.5078-1.5742-3.5078-3.5078c0-1.9336 1.5742-3.5078 3.5078-3.5078zm1.2148 9.3203c2.3047-0.48828 4.1211-2.3047 4.6094-4.5938h3.7617v8.3711h-8.3711zm4.5938-7.0391c-0.48828-2.3047-2.3047-4.1211-4.5938-4.5938v-3.7617h8.3711v8.3594h-3.7617zm-98.199-16.805h63.426v4.3789c-1.293 0.41016-2.3164 1.4219-2.7148 2.7266h-60.711zm64.641 6.6055c0.93359 0 1.6914 0.75391 1.6914 1.6914 0 0.93359-0.75391 1.6914-1.6914 1.6914-0.93359 0-1.6914-0.75391-1.6914-1.6914 0-0.93359 0.75391-1.6914 1.6914-1.6914zm-16.629 13.133c-0.93359 0-1.6914-0.75391-1.6914-1.6914 0-0.93359 0.75391-1.6914 1.6914-1.6914 0.93359 0 1.6914 0.75391 1.6914 1.6914 0 0.93359-0.75391 1.6914-1.6914 1.6914zm17.844-2.918v-4.5938c1.6758-0.52344 2.9062-2.0742 2.9062-3.9297 0-1.8555-1.2305-3.4062-2.9062-3.9297v-4.3789h25.305v6.0156h-10.805v10.805h-14.504zm16.945 10.805v-8.3711h3.7617c0.48828 2.3047 2.293 4.1211 4.5938 4.5938v3.7617h-8.3594zm9.5859 36.582c-0.93359 0-1.6914-0.75391-1.6914-1.6914 0-0.93359 0.75391-1.6914 1.6914-1.6914 0.93359 0 1.6914 0.75391 1.6914 1.6914 0 0.93359-0.75391 1.6914-1.6914 1.6914zm1.2148-34.152h10.805v-10.805h5.9258v25.422h-4.043c-0.52344-1.6758-2.0742-2.918-3.9297-2.918-1.8555 0-3.4062 1.2305-3.9297 2.918h-4.8398v-14.617zm8.7695 14.133c0.93359 0 1.6914 0.75391 1.6914 1.6914 0 0.93359-0.75391 1.6914-1.6914 1.6914-0.93359 0-1.6914-0.75391-1.6914-1.6914 0-0.93359 0.75391-1.6914 1.6914-1.6914zm1.0352 65.496 0.003907-59.816c1.3828-0.35938 2.4688-1.4062 2.8945-2.7656h4.043v62.594h-6.9375z' />
						</svg>
					</>
					{/* ) : ( */}
					<>
						{/* <svg
							width='122pt'
							height='122pt'
							version='1.1'
							viewBox='0 0 122 122'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='m6.3984 6.3984v11.969h63.156c0.41016 1.2812 1.4219 2.293 2.6992 2.6875v4.5938h-11.48c-0.52344-1.6758-2.0742-2.9062-3.9297-2.9062-2.2773 0-4.1328 1.8555-4.1328 4.1328s1.8555 4.1328 4.1328 4.1328c1.8555 0 3.4062-1.2305 3.9297-2.918h28.414v10.805h10.805v28.531c-1.6758 0.52344-2.9062 2.0742-2.9062 3.9297 0 2.2773 1.8555 4.1328 4.1328 4.1328s4.1328-1.8555 4.1328-4.1328c0-1.8555-1.2305-3.4062-2.918-3.9297v-11.48h4.8398c0.38281 1.2305 1.3203 2.2148 2.5234 2.6484v62.375h11.801l0.003906-114.57zm112.77 19.25h-5.9258v-10.789h-10.805v-6.0273h16.73v16.82zm-23.758 0h-3.7617v-8.3594h8.3594v3.7617c-2.3047 0.48828-4.1094 2.293-4.5938 4.5938zm5.8125-2.293c1.9336 0 3.5078 1.5742 3.5078 3.5078 0 1.9336-1.5742 3.5078-3.5078 3.5078s-3.5078-1.5742-3.5078-3.5078c0-1.9336 1.5742-3.5078 3.5078-3.5078zm1.2148 9.3203c2.3047-0.48828 4.1211-2.3047 4.6094-4.5938h3.7617v8.3711h-8.3711zm4.5938-7.0391c-0.48828-2.3047-2.3047-4.1211-4.5938-4.5938v-3.7617h8.3711v8.3594h-3.7617zm-98.199-16.805h63.426v4.3789c-1.293 0.41016-2.3164 1.4219-2.7148 2.7266h-60.711zm64.641 6.6055c0.93359 0 1.6914 0.75391 1.6914 1.6914 0 0.93359-0.75391 1.6914-1.6914 1.6914-0.93359 0-1.6914-0.75391-1.6914-1.6914 0-0.93359 0.75391-1.6914 1.6914-1.6914zm-16.629 13.133c-0.93359 0-1.6914-0.75391-1.6914-1.6914 0-0.93359 0.75391-1.6914 1.6914-1.6914 0.93359 0 1.6914 0.75391 1.6914 1.6914 0 0.93359-0.75391 1.6914-1.6914 1.6914zm17.844-2.918v-4.5938c1.6758-0.52344 2.9062-2.0742 2.9062-3.9297 0-1.8555-1.2305-3.4062-2.9062-3.9297v-4.3789h25.305v6.0156h-10.805v10.805h-14.504zm16.945 10.805v-8.3711h3.7617c0.48828 2.3047 2.293 4.1211 4.5938 4.5938v3.7617h-8.3594zm9.5859 36.582c-0.93359 0-1.6914-0.75391-1.6914-1.6914 0-0.93359 0.75391-1.6914 1.6914-1.6914 0.93359 0 1.6914 0.75391 1.6914 1.6914 0 0.93359-0.75391 1.6914-1.6914 1.6914zm1.2148-34.152h10.805v-10.805h5.9258v25.422h-4.043c-0.52344-1.6758-2.0742-2.918-3.9297-2.918-1.8555 0-3.4062 1.2305-3.9297 2.918h-4.8398v-14.617zm8.7695 14.133c0.93359 0 1.6914 0.75391 1.6914 1.6914 0 0.93359-0.75391 1.6914-1.6914 1.6914-0.93359 0-1.6914-0.75391-1.6914-1.6914 0-0.93359 0.75391-1.6914 1.6914-1.6914zm1.0352 65.496 0.003907-59.816c1.3828-0.35938 2.4688-1.4062 2.8945-2.7656h4.043v62.594h-6.9375z'
								fill='#4d3e2f'
							/>
						</svg> */}
					</>
					{/* )} */}
				</li-icon>

				{/* <img src={frameWhite} alt='' /> */}
			</header>

			{menuOpen ? (
				<ul>
					<li>
						<button
							onClick={() => setCurrentWindow('about-me')}
							className='nav-link'
							href='/about'>
							About me
						</button>
					</li>
					<li>
						{' '}
						<button
							onClick={() => setCurrentWindow('projects')}
							className='nav-link'
							href='/projects'>
							Projects
						</button>
					</li>
					<li>
						{' '}
						<button
							onClick={() => setCurrentWindow('expertise')}
							href='/skills'
							className='nav-link'>
							Expertise
						</button>
					</li>
				</ul>
			) : null}

			<ExternalLinkContainer menuOpen={menuOpen} />
		</div>
	);
};

export default MainRight;
