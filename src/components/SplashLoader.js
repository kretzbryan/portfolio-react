import React from 'react';
import { motion } from 'framer-motion';

const SplashLoader = () => {
	return (
		<div className='splash-loader__main'>
			<motion.div className='splash-loader__dark'>
				<div>start</div>
			</motion.div>
			<motion.div className='splash-loader__light'></motion.div>
		</div>
	);
};

export default SplashLoader;
