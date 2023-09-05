import '../styles/button.scss';

export default function Button({text, orangeBtn}) {
	return (
		<p className={`Button ${orangeBtn ? 'orange'  : 'white'}`}>{text}</p>
	)
};