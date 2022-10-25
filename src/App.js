import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router';
import Splash from './components/Splash';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Header from './components/Header';
import Main from './components/Main';
import ExternalLinkContainer from './components/ExternalLinkContainer';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/skills' element={<Skills />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/about' element={<About />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
