import '../styles/button.scss';

export default function Button({text, orangeBtn, onClick}) {
	return (
		<p className={`Button ${orangeBtn ? 'orange'  : 'white'}`} onClick={onClick}>{text}</p>
	)
};