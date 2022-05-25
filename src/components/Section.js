import React from 'react';
import city from '../img/patrick-tomasso-svvtzttgyau-unsplash-2000x1332.jpg';

const Section = () => {
	return (
		// <div className="relative">
		// 	<div className="absolute h-full w-full bg-black opacity-20" />
		// 	<p className="absolute flex justify-center whitespace-pre items-center w-full h-full text-white text-6xl font-bold">
		// 		{'Creating a seamless experience in\nPC building, purchasing and tracking.'}
		// 	</p>
		// 	<button className="absolute bottom-1/3 left-96 bg-gray-50 hover:bg-gray-200 hover:shadow-lg transition duration-300 ease-in-out text-gray-400 font-bold py-4 px-10 rounded-full text-lg mt-4">
		// 		Coming Soon!
		// 	</button>
		// 	<img className="w-full" src={city} alt="city" />
		// </div>

		<div
			className="w-full h-screen flex items-center justify-center text-white relative bg-cover"
			style={{ backgroundImage: `url(${city})` }}
		>
			<div className="z-10 space-y-3">
				<p className="text-6xl font-bold">Creating a seamless experience in</p>
				<p className="text-6xl font-bold">PC building, purchasing and tracking.</p>
				<button className="border-2 bg-gray-50 hover:bg-gray-200 hover:shadow-lg transition duration-300 ease-in-out text-lg text-gray-400 font-bold py-4 px-10 rounded-full">
					Coming Soon!
				</button>
			</div>
			<div className="absolute w-full h-full bg-black opacity-20" />
		</div>
	);
};

export default Section;
