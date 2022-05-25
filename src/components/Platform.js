import React from 'react';
import android from '../img/android-500x500.png';
import apple from '../img/apple-500x500.png';
import paebles from '../img/frame-8-512x512.png';

const Mobile = () => {
	return (
		// <div className="w-full h-screen flex justify-center items-center">
		// 	<div className="shadow hover:shadow-lg transition duration-300 ease-in-out">
		// 		<div className="overflow-hidden relative">
		// 			<img src={android} />
		// 		</div>
		// 		<div className="px-4 py-3 bg-white">
		// 			<h1>Android</h1>
		// 			<h2>
		// 				Upcoming updates and features are coming shortly so stay posted to join us on our journey to a
		// 				Seamless Experience. Coming soon on the Google Play Store
		// 			</h2>
		// 		</div>
		// 		<div className="overflow-hidden relative">
		// 			<img src={apple} />
		// 		</div>
		// 		<div className="px-4 py-3 bg-white">
		// 			<h1>Apple</h1>
		// 			<h2>
		// 				Upcoming updates and features are coming shortly so stay posted to join us on our journey to a
		// 				Seamless Experience. Coming soon on the Google Play Store
		// 			</h2>
		// 		</div>
		// 	</div>
		// </div>

		<div className="container mx-auto w-3/5 py-40">
			<div className="grid grid-cols-3 gap-x-8">
				<div className="shadow hover:shadow-lg transition duration-300 ease-in-out">
					<div>
						<img src={android} alt="android" />
					</div>
					<div className="px-10 py-7 bg-gray-200">
						<h1 className="font-bold">Android</h1>
						<h2 className="py-5">
							Upcoming updates and features are coming shortly so stay posted to join us on our journey to
							a Seamless Experience. Coming soon on the Google Play Store
						</h2>
						<button class="bg-gray-50 hover:bg-black hover:shadow-lg transition duration-300 ease-in-out text-black hover:text-white font-bold py-4 px-16 mx-1 rounded-full text-lg flex items-center border-2 border-black">
							<i class="fab fa-android fa-2x hover:white" />
							&nbsp;In Progress
						</button>
					</div>
				</div>

				<div className="shadow hover:shadow-lg transition duration-300 ease-in-out">
					<div>
						<img src={apple} alt="apple" />
					</div>
					<div className="px-10 py-7 bg-gray-200">
						<h1 className="font-bold">IOS</h1>
						<h2 className="py-5">
							Download on the App Store. Browse and download apps to your iPad, iPhone, or iPod touch from
							the App Store. The App Store has more than one million apps and games.
						</h2>
						<button className="bg-gray-50 hover:bg-black hover:shadow-lg transition duration-300 ease-in-out text-black hover:text-white font-bold py-4 px-14 rounded-full text-lg flex items-center border-2 border-black">
							<i className="fab fa-apple fa-2x" />
							&nbsp;Coming Soon!
						</button>
					</div>
				</div>

				<div className="shadow hover:shadow-lg transition duration-300 ease-in-out">
					<div>
						<img src={paebles} alt="paebles" />
					</div>
					<div className="px-10 py-7 bg-gray-200">
						<h1 className="font-bold">Upcoming Platforms</h1>
						<h2 className="py-5">
							Upcoming platforms that will create a seamless experience in PC building, purchasing and
							tracking available anywhere. Download on all upcoming platforms everywhere.
						</h2>
						<button class="bg-gray-50 hover:bg-black hover:shadow-lg transition duration-300 ease-in-out text-black hover:text-white font-bold py-4 px-12 rounded-full text-lg flex items-center border-2 border-black">
							{/* <svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg> */}
							<i className="fas fa-globe fa-2x" />
							&nbsp;Coming Soon!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mobile;
