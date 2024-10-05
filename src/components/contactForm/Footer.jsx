import {Link} from 'react-scroll';

const Footer = () => {
	return (
		<>
			<footer className="dark">
				<div className="footer-wrap">
					<div className="container">
						<div className="row">
							<div className="contacts">
								<h2 className='cursor-scale small'>Let's create your new brand </h2>
								<div className="contacts-wrap">
									<div>
										<Link to="contacts" smooth={true} duration={500}><span
											className="btn btn-dark cursor-scale small">Become a client</span></Link>
									</div>
									<div className="contacts-email">
										<span>or email</span> us at @Fetchstudio@gmail.com
									</div>
								</div>
							</div>
							{/*<div className="socials">*/}
							{/*	<div className="tag-title"><span>Social</span></div>*/}
							{/*	<ul>*/}
							{/*		<li><a href="/">Behance</a></li>*/}
							{/*		<li><a href="/">Instagram</a></li>*/}
							{/*		<li><a href="/">LinkedIn</a></li>*/}
							{/*	</ul>*/}
							{/*</div>*/}
							<div className="pages">
								<div className="tag-title"><span>Pages</span></div>
								<ul>
									<li><Link className='cursor-scale small' href="#about-us" to="about-us" smooth={true} duration={500}>About Us</Link></li>
									<li><Link className='cursor-scale small' href="#services" to="services" smooth={true} duration={500}>Services</Link></li>
									<li><Link className='cursor-scale small' href="#projects" to="projects" smooth={true} duration={500}>Projects</Link></li>
									<li><Link className='cursor-scale small' href="#contacts" to="contacts" smooth={true} duration={500}>Contacts</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="copyright">
					<div className="container">
						<div className="row">
							<p className='cursor-scale small'>Copyright 2024©FetchStudio. All rights reserved.</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer;