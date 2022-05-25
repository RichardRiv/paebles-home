import React, { useState } from 'react';

const ButtonToTop = () => {
	const [ visible, setVisible ] = useState(false);

	const toggleVisible = () => {
		if (window.scrollY > 80) {
			setVisible(true);
		}
		else {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top      : 0,
			behavior : 'smooth'
			/* you can also use 'auto' behaviour
         in place of 'smooth' */
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<div>
			<button
				onClick={scrollToTop}
				className="border-2 rounded-lg bg-[#CCCCCC] py-5 px-6 fixed bottom-5 left-5 transition duration-300"
				style={{ opacity: visible ? '1' : '0', cursor: visible ? 'pointer' : 'default' }}
			>
				<i className="fas fa-chevron-up fa-2x" />
			</button>
		</div>
	);
};

export default ButtonToTop;
