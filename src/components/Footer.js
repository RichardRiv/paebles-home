import React from 'react';

const Footer = () => {
	return (
		<div className="flex flex-col space-y-5 py-5">
			<div className="flex justify-center mx-96 space-x-10">
				<p className="cursor-pointer">Home</p>
				<p className="cursor-pointer">Download</p>
				<p className="cursor-pointer">Terms</p>
			</div>
			<div className="flex justify-center space-x-4 fa-lg text-[#7F7F7F]">
				<i class="fab fa-twitter transition duration-300 ease-in-out hover:text-black cursor-pointer" />
				<i class="fab fa-facebook-f transition duration-300 ease-in-out hover:text-black cursor-pointer" />
				<i class="fab fa-instagram transition duration-300 ease-in-out hover:text-black cursor-pointer" />
				<i class="fab fa-linkedin-in transition duration-300 ease-in-out hover:text-black cursor-pointer" />
				<i class="fas fa-envelope transition duration-300 ease-in-out hover:text-black cursor-pointer" />
			</div>
			<div className="flex justify-center text-black font-semibold">
				<p>&copy; Copyright 2020 Paebles - All Rights Reserved</p>
			</div>
		</div>
	);
};

export default Footer;
