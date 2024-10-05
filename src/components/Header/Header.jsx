import {Link} from 'react-scroll';
import lightDark from '../../helpers/darkLight';
import {Burger} from '../../helpers/helpers';
import '../../fontello/css/fontello.css';

const Header = () => {

	window.addEventListener('load', () => lightDark('.light-dark-mode'));

	window.addEventListener('load', () => Burger());

	return (
		<header>
			<div className="container">
				<div className="row">
					<div className="item">
						<span className="logo cursor-scale small"><span>Fetch</span>Studio</span>
					</div>

					<div className="item">
						<div className="menu-container">
							<div className="menu-burger">
								<span></span>
								<span></span>
								<span></span>
								<span></span>
							</div>
							<nav className="cursor-scale small">
								<Link href="#home" to="home" smooth={true} duration={500}>Home</Link>
								<Link href="#about-us" to="about-us" smooth={true} duration={500}>About Us</Link>
								<Link href="#services" to="services" smooth={true} duration={500}>Services</Link>
								<Link href="#projects" to="projects" smooth={true} duration={500}>Projects</Link>
								<Link href="#contacts" to="contacts" smooth={true} duration={500}>Contacts</Link>
							</nav>
						</div>
						<div className='mobile-menu'>
							<span className="logo logo-mobile cursor-scale small"><span>Fetch</span>Studio</span>
							<nav className="cursor-scale small">
								<Link href="#home" to="home" smooth={true} duration={500}>Home</Link>
								<Link href="#about-us" to="about-us" smooth={true} duration={500}>About Us</Link>
								<Link href="#services" to="services" smooth={true} duration={500}>Services</Link>
								<Link href="#projects" to="projects" smooth={true} duration={500}>Projects</Link>
								<Link href="#contacts" to="contacts" smooth={true} duration={500}>Contacts</Link>
							</nav>
						</div>
					</div>

					<div className="item">
						<div className="light-dark-mode">
							<div className="mode">
								<i className="icon-moon"/>
								<i className="icon-sky"/>
								<i className="icon-stars"/>
								<i className="icon-circle"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;