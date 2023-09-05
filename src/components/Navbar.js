import '../styles/navbar.scss';
import Logo from '../assets/images/logo.svg';
import Button from './Button';

export default function navbar() {
	return (
		<div className='Navbar'>
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
				</div>
			</div>
		</div>
	);
}
