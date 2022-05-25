import React, { useState } from 'react';
import logo from '../img/logo.png';

const Header = () => {
	const [ nav, setNav ] = useState(false);

	const resizeNav = () => {
		if (window.scrollY >= 80) {
			setNav(true);
		}
		else {
			setNav(false);
		}
	};

	window.addEventListener('scroll', resizeNav);

	return (
		// <div
		// 	className={`z-20 px-20 bg-white top-0 fixed w-full h-24 text-black flex justify-between items-center font-medium
		// 	${nav ? ' transition-height ease-in-out duration-300 h-16' : ' transition-height ease-in-out duration-300'}`}
		// >
		// 	<div className="flex items-center space-x-3">
		// 		<img
		// 			className={`${nav
		// 				? ' transition-height ease-in-out duration-300 h-16'
		// 				: ' transition-height ease-in-out duration-300 h-20'}`}
		// 			src={logo}
		// 			alt="logo"
		// 		/>
		// 		<div className="text-2xl text-gray-900 hover:text-gray-600">paebles</div>
		// 	</div>
		// 	<div className="flex space-x-5 text-lg">
		// 		<div className="hover:text-gray-300 transition duration-300 ease-in-out hidden md:flex">Home</div>
		// 		<div className="hover:text-gray-300 transition duration-300 ease-in-out hidden md:flex">Download</div>
		// 		<div className="hover:text-gray-300 transition duration-300 ease-in-out hidden md:flex">Builds</div>
		// 		<div className="hover:text-gray-300 transition duration-300 ease-in-out hidden md:flex">About Us</div>
		// 		<div className="hover:text-gray-300 transition duration-300 ease-in-out hidden md:flex">Contact</div>
		// 	</div>

		// 	{/* Mobile Menu! */}
		// 	<div className="hidden bg-white flex-col text-center space-y-4">
		// 		<div className="">Home</div>
		// 		<div className="">Download</div>
		// 		<div className="">Builds</div>
		// 		<div className="">About Us</div>
		// 		<div className="">Contact</div>
		// 	</div>

		// 	{/* Mobile Button! */}
		// 	<button onClick={() => menu.classList.toggle('hidden')} className="flex md:hidden mobile-menu-button">
		// 		<svg
		// 			xmlns="http://www.w3.org/2000/svg"
		// 			className="h-9 w-9"
		// 			fill="none"
		// 			viewBox="0 0 24 24"
		// 			stroke="currentColor"
		// 		>
		// 			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
		// 		</svg>
		// 	</button>
		// </div>

		<div
			className={`z-20 px-20 bg-white top-0 fixed w-full py-3 text-black flex justify-between items-center font-medium  
			${nav ? ' transition-height ease-in-out duration-300 py-5' : ' transition-height ease-in-out duration-300'}`}
		>
			<div className="flex items-center space-x-3">
				<img
					className={`${nav
						? ' transition-height ease-in-out duration-300 h-16'
						: ' transition-height ease-in-out duration-300 h-20'}`}
					src={logo}
					alt="logo"
				/>
				<div className="text-2xl text-gray-900 hover:text-gray-600">paebles</div>
			</div>
			<div className="flex space-x-5 text-lg">
				<div className="hover:text-gray-300 transition duration-300 ease-in-out hidden lg:flex">Home</div>
				<div className="hover:text-gray-300 transition duration-300 ease-in-out hidden lg:flex">Download</div>
				<div className="hover:text-gray-300 transition duration-300 ease-in-out hidden lg:flex">Builds</div>
				<div className="hover:text-gray-300 transition duration-300 ease-in-out hidden lg:flex">About Us</div>
				<div className="hover:text-gray-300 transition duration-300 ease-in-out hidden lg:flex">Contact</div>
			</div>

			{/* Mobile Menu! */}
			<div className="hidden bg-white flex-col text-center space-y-4">
				<div className="">Home</div>
				<div className="">Download</div>
				<div className="">Builds</div>
				<div className="">About Us</div>
				<div className="">Contact</div>
			</div>

			{/* Mobile Button! */}
			<button className="flex lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-9 w-9"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</button>
		</div>
	);
};

export default Header;
