import React from 'react';

const Terms = () => {
	return (
		// <div className="container">
		// 	<div className="grid grid-rows-3 justify-items-center">
		// 		<div>
		// 			<h1>awdaw</h1>
		// 			<p>awdwa</p>
		// 		</div>
		// 	</div>
		// </div>

		<div className="flex flex-col bg-gray-100 space-y-10 py-20 px-28">
			<div className="flex justify-center text-6xl font-bold">Terms of Use</div>
			<div className="flex justify-center text-center mx-96">
				These Terms of Use constitute a legally binding agreement made between you, whether personally or on
				behalf of an entity (“you”) and Paebles ("Company", “we”, “us”, or “our”), concerning your access to and
				use of the https://paebles.com website as well as any other media form, media channel, mobile website or
				mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). You agree
				that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of
				Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING
				THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
			</div>
			<div className="flex justify-center">
				<button className="bg-[#1A1A1A] hover:bg-black hover:shadow-lg transition duration-300 ease-in-out text-white font-bold py-3 px-11 mx-4 rounded-full text-lg flex items-center border-2 border-black tracking-widest">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-10 w-10"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
						/>
					</svg>
					&nbsp;LEARN MORE
				</button>
				<button className="bg-gray-50 hover:bg-black hover:shadow-lg transition duration-300 ease-in-out text-black hover:text-white font-bold px-12 mx-4 rounded-full text-lg flex items-center border-2 border-black tracking-widest">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-10 w-10"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					&nbsp;PRIVACY POLICY
				</button>
			</div>
		</div>
	);
};

export default Terms;
