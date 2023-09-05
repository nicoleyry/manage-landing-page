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
		</div>
	);
}

export default App;
