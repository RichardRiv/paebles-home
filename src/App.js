import React from 'react';

import Header from './components/Header';
import Section from './components/Section';
import './styles/index.css';
import Platform from './components/Platform';
import Terms from './components/Terms';
import Footer from './components/Footer';
import ButtonToTop from './components/ButtonToTop';

const App = () => {
	return (
		<div>
			<Header />
			<Section />
			<Platform />
			<Terms />
			<Footer />
			<ButtonToTop />
		</div>
	);
};

export default App;
