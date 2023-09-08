import '../styles/navbar.scss';
import Logo from '../assets/images/logo.svg';
import Burger from '../assets/images/icon-hamburger.svg';
import Close from '../assets/images/icon-close.svg';
import Button from './Button';

export default function navbar({ isOpened, setIsOpened }) {
	let openMenuHandler = () => {
		isOpened ? setIsOpened(false) : setIsOpened(true);
	};
	let closeMenuHandler = (e) => {
		let classlist = e.target.classList;
		if (!classlist.contains('burger')) {
			classlist.contains('menu-container') || classlist.contains('nav-menu')
				? setIsOpened(true)
				: setIsOpened(false);
		}
	};

	return (
		<div className='Navbar' onClick={closeMenuHandler}>
			<div className='nav-container'>
				<div className='nav-left'>
					<img className='logo' src={Logo} alt='logo' />
				</div>
				<div className='nav-middle'>
					<p className='nav-menu'>Pricing</p>
					<p className='nav-menu'>Product</p>
					<p className='nav-menu'>About Us</p>
					<p className='nav-menu'>Careers</p>
					<p className='nav-menu'>Community</p>
				</div>
				<div className='nav-right'>
					<Button orangeBtn={true} text='Get Started' />
					<img
						className='burger'
						onClick={openMenuHandler}
						src={`${isOpened ? Close : Burger}`}
						alt='burger-menu'
					/>
				</div>
			</div>
			<div className={`menu-cover ${isOpened ? 'show' : ''}`} onClick={closeMenuHandler}>
				<div className='menu-container'>
					<p className='nav-menu'>Pricing</p>
					<p className='nav-menu'>Product</p>
					<p className='nav-menu'>About Us</p>
					<p className='nav-menu'>Careers</p>
					<p className='nav-menu'>Community</p>
				</div>
			</div>
		</div>
	);
}
