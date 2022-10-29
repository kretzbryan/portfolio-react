import React, { useEffect, useRef, useState } from 'react';

import headShot from '../images/headshot.jpg';

import { motion, useScroll } from 'framer-motion';
import uuid from 'react-uuid';

const About = () => {
	const wrapperRef = useRef(null);
	const [scrollProgress, setScrollProgress] = useState(0);
	const [lines, setLines] = useState(0);
	const { scrollY } = useScroll({
		container: wrapperRef,
	});

	const textRef = useRef(null);
	// const { scrollY } = useScroll();

	useEffect(() => {
		const updateStrings = () => {
			const string = `My name is Bryan Kretz. I'm a full-stack software engineer based in the San Francisco Bay Area focusing on MongoDB, Express, Node.js and React. I'm always looking to advance my skills in all aspects of my life, whether that be in software development, learning to make a new dish, or learning new circus skills. If you dont see me behind a computer refining my coding skills, you'll likely find me walking my dog or hanging upside-down somewhere in the city. All of these things will include lots of coffee, though! If you're looking for someone to join your team, feel free to reach out!`;

			const calculatedLines = Math.ceil(textRef.current.clientHeight / 21);
			const charactersPerLine = Math.ceil(string.length / calculatedLines);

			console.log('charactersPerLine', charactersPerLine);
			const calculatedGroups = [];
			console.log(string.slice(0, 35));
			let startIndex = 0;
			let endIndex = 0;
			let startWordIndex = 0;
			while (endIndex < string.length) {
				if (endIndex === string.length - 1) {
					calculatedGroups.push(string.slice(startIndex));
				}
				if (endIndex - startIndex === charactersPerLine) {
					console.log(
						'string.slice(startIndex, endIndex)',
						string.slice(startIndex, endIndex)
					);
					console.log(
						'string.slice(startIndex, startWordIndex)',
						string.slice(startIndex, startWordIndex)
					);

					let result;
					if (endIndex - startWordIndex > 0) {
						// if (string[endIndex] === ' ') {
						// 	result = string.slice(startIndex, endIndex);
						// 	endIndex += 2;
						// }
						// else if (string[endIndex] === '-') {
						// 	result = string.slice(startIndex, endIndex + 1);
						// 	endIndex += 2;
						// }
						// else {
						result = string.slice(startIndex, startWordIndex);
						endIndex = startWordIndex + 1;
						// }
					} else {
						result = string.slice(startIndex, endIndex);
						endIndex++;
					}
					console.log('result', result);
					calculatedGroups.push(result);

					startIndex = endIndex - 1;
				} else {
					if (string[endIndex] === '-') {
						startWordIndex = endIndex + 1;
					}
					if (string[endIndex] === ' ') {
						startWordIndex = endIndex;
					}
					endIndex++;
				}

				if (string[startIndex] === ' ') {
					startIndex++;
					endIndex = startIndex + 1;
				}
			}
			// for (
			// 	let index = 0;
			// 	index < string.length;
			// 	index = index + charactersPerLine
			// ) {
			// 	console.log('index', index);
			// 	const slicedString = string.slice(index, index + charactersPerLine);
			// 	calculatedGroups.push(slicedString);
			// }
			setLines(calculatedGroups);
		};

		scrollY.onChange((latest) => setScrollProgress(latest));

		window.addEventListener('resize', updateStrings);

		return () => window.removeEventListener('resize', window);
	}, [scrollY]);
	return (
		<>
			<div ref={wrapperRef} className='about__wrapper'>
				<section className='about__container'>
					<div className='circle'>
						<motion.img
							style={{ opacity: (220 - scrollProgress) / 220 }}
							className='about__headshot'
							src={headShot}
							alt=''
						/>
					</div>
					<p className='about__text'>
						{lines
							? lines.map((line, index) => {
									const bottom = 24 * (index + 1) + 280;
									return (
										<motion.span
											key={uuid()}
											style={{
												opacity: (bottom - scrollProgress) / scrollProgress,
											}}
											className='about__text-line'>
											{line}
										</motion.span>
									);
							  })
							: null}
						<span
							ref={textRef}
							style={{
								position: 'absolute',
								left: 0,
								top: 0,

								color: 'transparent',
								width: '100%',
								paddingLeft: '2rem',
								paddingRight: '2rem',
								lineHeight: '21px',
							}}>
							My name is Bryan Kretz. I'm a full-stack software engineer based
							in the San Francisco Bay Area focusing on MongoDB, Express,
							Node.js and React. I'm always looking to advance my skills in all
							aspects of my life, whether that be in software development,
							learning to make a new dish, or learning new circus skills. If you
							dont see me behind a computer refining my coding skills, you'll
							likely find me walking my dog or hanging upside-down somewhere in
							the city. All of these things will include lots of coffee, though!
							If you're looking for someone to join your team, feel free to
							reach out!
						</span>
					</p>
				</section>
			</div>
		</>
	);
};

export default About;
