import './App.scss';
import TopSection from './components/TopSection';
import MiddleSection from './components/MiddleSection';
import BottomSection from './components/BottomSection';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<TopSection />
			<MiddleSection/>
			<BottomSection />
			<Footer />
			<div className="attribution">
				Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
				Coded by <a href="https://www.nicoleyry.com/">Nicole Yang</a>.
			</div>
		</div>
	);
}

export default App;
