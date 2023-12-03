import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
// import Home from './pages/home/home';
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact';
import Portfolio from './pages/portfolio/Portfolio';
import About from './pages/about/About';
import Themes from './components/Themes';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; 

function App() {
	return (
		<I18nextProvider i18n={i18n}>
		<BrowserRouter>
			<Navbar />
			<Themes />
			<Routes>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path="about"
					element={<About />}
				/>
				<Route
					path="contact"
					element={<Contact />}
				/>
				<Route
					path="portfolio"
					element={<Portfolio />}
				/>
			</Routes>
		</BrowserRouter>
		</I18nextProvider>
	);
}

export default App;
