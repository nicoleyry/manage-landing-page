import '../styles/bottomsection.scss';
import Button from './Button';

export default function BottomSection() {
	return (
		<div className="BottomSection">
			<h1 className='title'>Simplify how your team works today.</h1>
			<Button orangeBtn={false} text='Get Started' />
		</div>
	)
};