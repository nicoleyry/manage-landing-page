import '../styles/topsection.scss';
import Navbar from './Navbar';
import IntroDiagram from '../assets/images/illustration-intro.svg';
import Button from './Button';
import { useState } from 'react';

export default function TopSection() {
	const [isOpened, setIsOpened] = useState(false);

	return (
		<div className='TopSection'>
			<Navbar isOpened={isOpened} setIsOpened={setIsOpened} />
			<div className='intro'>
				<div className='content'>
					<h1 className='title'>Bring everyone together to build better products.</h1>
					<p className='subtitle'>
						Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team
						goals in view.
					</p>
					<Button orangeBtn={true} text='Get Started' />
				</div>
				<div className='diagram'>
					<img src={IntroDiagram} alt='intro' />
				</div>
			</div>
		</div>
	);
}
