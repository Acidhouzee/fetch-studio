import TypeIt from 'typeit-react';
import {Link} from 'react-scroll';
import {Parallax, ParallaxProvider} from 'react-scroll-parallax';
import ContactForm from '../contactForm/ContactForm.jsx';
import {Marquee} from '../../helpers/helpers';
// Swiper
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';


// Images
import slider01 from '../../images/slider/slider01.jpg';
import slider02 from '../../images/slider/slider02.jpg';
import slider03 from '../../images/slider/slider03.jpg';
import patter01 from '../../images/patter01.jpg';
import patter02 from '../../images/patter02.jpg';
import project1 from '../../images/project/project-1.jpg';
import project2 from '../../images/project/project-2.jpg';
import project3 from '../../images/project/project-3.jpg';
import project4 from '../../images/project/project-4.jpg';


const Home = () => {


	window.addEventListener('load', () => Marquee('.marquee-tags-wrap', 0.4));


	return (
		<>
			<section name="home" className="hero-section">
				<div className="container">
					<div className="row">
						<h2 className="hero-title cursor-scale small">Web <mark>studio</mark></h2>
						<div className="hero-content cursor-scale">
							<p>We are a web studio that creates responsive design, website, content</p>
							<Link to="contacts" smooth={true} duration={500}><span
								className="btn">Get to work</span></Link>
						</div>
					</div>
					<h2 className="hero-title cursor-scale small"><span><span className="circle"></span>Digital design</span></h2>

					<div className="hero-content hero-content-mob">
						<p>We are a web studio that creates responsive design, website, content</p>
						<Link to="contacts" smooth={true} duration={500}><span
							className="btn">Get to work</span></Link>
					</div>

					<Swiper className='cursor-scale' modules={[EffectFade, Autoplay]} effect="fade"
						autoplay={{
							delay: 1500,
							pauseOnMouseEnter: true,
							pauseOnMouseLeave: true
						}}
						loop={true}
					>
						<SwiperSlide><img src={slider01} alt="Luminicue Project"/></SwiperSlide>
						<SwiperSlide><img src={slider02} alt="Sylvan Resorts Project"/></SwiperSlide>
						<SwiperSlide><img src={slider03} alt="Lilu Project"/></SwiperSlide>

					</Swiper>

				</div>
			</section>

			<section name="about-us" className="about-section">
				<div className="container">
					<h2 className="about-title">
						We embody our values and design using our tried and tested approach to deliver truly <span
						className="text-marked cursor-scale small"><TypeIt
						options={{loop: true, speed: 100}}
						getBeforeInit={(instance) => {
							instance.type('magnetic product').pause(1000).go().delete().type("ex!").pause(1000).go();
							return instance;
						}}
					/></span>
					</h2>
					<p className="about-description">
						We are a web studio that creates responsive design, website, content. We are a web studio
						that creates
						responsive design, website.
					</p>
				</div>
			</section>

			<section className="c2a-section">
				<div className="container">
					<div className="row">
						<div className="col-wrap cursor-scale col-dark">
							<h2>Let’s</h2>
						</div>
						<div className="col-wrap cursor-scale col-bg" style={{backgroundImage: `url(${patter01})`}}>
							<h2>Create</h2>
						</div>
						<div className="col-wrap cursor-scale col-main">
							<h2><i className="icon-arrow"></i></h2>
						</div>
						<div className="col-wrap cursor-scale col-bg2" style={{backgroundImage: `url(${patter02})`}}>
							<h2>Together</h2>
						</div>
					</div>
				</div>
			</section>

			<section name="services" className="services-section">
				<div className="container">
					<div className="row">
						<div className="title-wrap">
							<h3 className="services-title cursor-scale small">Services</h3>
						</div>
						<div className="content">
							<div className="content-item">
								<div className="item">
									<h4 className='cursor-scale small'>
										UIUX design
									</h4>
								</div>
								<div className="item">
									<ul className="item-list">
										<li>Design systems</li>
										<li>App design</li>
										<li>Website design</li>
										<li>Landing page design</li>
									</ul>
								</div>
								<div className="item">
									<ul className="item-list">
										<li>UI UX design solutions</li>
										<li>Wireframes and Prototyping</li>
										<li>Flowing with Design Trends</li>
										<li>Mobile Responsive Designs</li>
									</ul>
								</div>
							</div>
							<div className="content-item">
								<div className="item">
									<h4 className='cursor-scale small'>
										Web development and support
									</h4>
								</div>
								<div className="item">
									<ul className="item-list">
										<li>WordPress development</li>
										<li>HTML, CSS, JS & PHP solutions</li>
										<li>WordPress hosting</li>
										<li>Speed optimisation</li>
									</ul>
								</div>
								<div className="item">
									<ul className="item-list">
										<li>Webflow development</li>
										<li>Flowing with Design Trends</li>
										<li>UI UX design solutions</li>
										<li>Mobile Responsive Designs</li>
									</ul>
								</div>
							</div>
							<div className="content-item">
								<div className="item">
									<h4 className='cursor-scale small'>
										SMM
									</h4>
								</div>
								<div className="item">
									<ul className="item-list">
										<li>Content Creation</li>
										<li>Social media posts</li>
										<li>Infographic design</li>
										<li>Email templates</li>
									</ul>
								</div>
								<div className="item">
									<ul className="item-list">
										<li>Presentations & pitch decks</li>
										<li>Promo creative design</li>
										<li>UI UX design solutions</li>
										<li>Mobile Responsive Designs</li>
									</ul>
								</div>
							</div>
							<div className="content-item">
								<Link to="contacts" smooth={true} duration={500}><span
											className="btn btn_alt cursor-scale small">Contact Us</span></Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section name="projects" className="projects-section">
				<div className="container">
					<div className="title-wrap">
						<div className="row">
							<h3 className='cursor-scale small'>
								Our Projects
							</h3>
						</div>
					</div>
					<ParallaxProvider>
						<div className="content-wrap">
							<div className="items-row">
								<Parallax className="item-wrap" translateY={['-50px', '50px'] }>
									<img className="cursor-scale small" src={project1} alt="item-1"/>
									<div className="item-cont">
										<ul className="tags-list">
											<li>UI UX</li>
											<li>WEBSITE</li>
											<li>CONTENT CREATION</li>
										</ul>
										<h4 className='cursor-scale small'>Creating mood-boosting</h4>
									</div>
								</Parallax>
								<Parallax className="item-wrap" translateY={['50px', '-50px']}>
									<img className="cursor-scale small" src={project2} alt="item-1"/>
									<div className="item-cont">
										<ul className="tags-list">
											<li>UI UX</li>
											<li>WEBSITE</li>
											<li>CONTENT CREATION</li>
											<li>CONTENT CREATION</li>
										</ul>
										<h4 className='cursor-scale small'>Dasboard for Lilu</h4>
									</div>
								</Parallax>
							</div>
							<div className="items-row">
								<Parallax className="item-wrap" translateY={['50px', '-50px']}>
									<img className="cursor-scale small" src={project3} alt="item-1"/>
									<div className="item-cont">
										<ul className="tags-list">
											<li>UI UX</li>
											<li>WEBSITE</li>
											<li>CONTENT CREATION</li>
										</ul>
										<h4 className='cursor-scale small'>Creating mood-boosting</h4>
									</div>
								</Parallax>
								<Parallax className="item-wrap" translateY={['-50px', '50px']}>
									<img className="cursor-scale small" src={project4} alt="item-1"/>
									<div className="item-cont">
										<ul className="tags-list">
											<li>UI UX</li>
											<li>WEBSITE</li>
											<li>CONTENT CREATION</li>
											<li>CONTENT CREATION</li>
										</ul>
										<h4 className='cursor-scale small'>Dasboard for Lilu</h4>
									</div>
								</Parallax>
							</div>
						</div>
					</ParallaxProvider>

				</div>
			</section>

			<section name="contacts" className="contact-us dark-mode-active">
				<div className="container">
					<div className="row">
						<div className="contact-details">
							<h2 className='cursor-scale small'>Let’s create your new brand </h2>
							<p>or email us at <a href="mailto:Fetchstudio@gmail.com">Fetchstudio@gmail.com</a></p>
						</div>
						<div className="contact-form">
							<ContactForm/>
						</div>
					</div>
				</div>
			</section>

			<section className="tags-marquee-section">
				<div className="marquee-tags-wrap">
					<div className="marquee-tags cursor-scale">
						<span>UIUX design</span>
						<span>Web development</span>
						<span>Social Media Branding</span>
						<span>Front end</span>
						<span>Logo Design</span>
						<span>Branding</span>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;