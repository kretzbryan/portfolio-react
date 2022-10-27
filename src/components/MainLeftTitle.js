import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import uuid from 'react-uuid';
const MainLeftTitle = ({ title }) => {
	return (
		<motion.h2
			key={'left-title' + uuid()}
			className='left__title'
			initial={{ opacity: 0, left: '-15rem', bottom: 'calc(100% - 67.5px)' }}
			animate={{ opacity: 1, left: 0 }}
			transition={{
				opacity: {
					duration: 0.1,
				},
				default: { duration: 0.2 },
			}}
			exit={{ opacity: 0, bottom: 'calc(100% - 87.5px)' }}>
			{title}
		</motion.h2>
	);
};

export default MainLeftTitle;
