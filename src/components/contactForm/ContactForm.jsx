import {useRef, useState, useEffect} from 'react';
import EmailJS from '@emailjs/browser';
import env from 'react-dotenv';
import Toast from '../../helpers/Toast';

const ContactForm = () => {

	const form = useRef();

	useEffect(() => {
		form.current.addEventListener('change', (e) => FormValidate(e));
	}, []);

	const FormValidate = (e) => {
		const inp = e.target;
		inp.value !== '' ? inp.classList.add('form-control') : inp.classList.remove('form-control');
	}

	const [stateToast, setStateToast] = useState({status: false, response: '', message: ''});

	// EmailJS DATA
	const SERVICE = 'service_yh45uzq';
	const TEMPLATE = 'template_cq8vnoh';
	const PUB_KEY = 'Kj5q2FGt40KR_aSWZ';

	const sendEmail = (e) => {
		e.preventDefault();

		EmailJS.sendForm(SERVICE, TEMPLATE, form.current, {publicKey: PUB_KEY}).then(
			(response) => {
				setStateToast({status: true, response: 'success', message: 'Your message has been sent successfully!'})
			},
			(error) => {
				setStateToast({
					status: true,
					response: 'failed',
					message: 'Oops! Something went wrong. Please try again later.'
				})
			},
		);

		form.current.reset();
	};

	return (
		<>
			{stateToast.status && <Toast type={stateToast.response} message={stateToast.message} status={stateToast.status}/>}

			<form className="form-submit" ref={form} onSubmit={sendEmail}>
				<h4 className="form-sup cursor-scale small">What is your project about?</h4>

				<div className="project-tags">
					<input id="tag1" type="checkbox" value="Website Design" name="project_type"/>
					<label htmlFor="tag1" className='cursor-scale small'>Website Design</label>
					<input id="tag2" type="checkbox" value="SEO" name="project_type"/>
					<label htmlFor="tag2" className='cursor-scale small'>SEO</label>
					<input id="tag3" type="checkbox" value="SMM" name="project_type"/>
					<label htmlFor="tag3" className='cursor-scale small'>SMM</label>
					<input id="tag4" type="checkbox" value="Website Development" name="project_type"/>
					<label htmlFor="tag4" className='cursor-scale small'>Website Development</label>
					<input id="tag5" type="checkbox" value="Landing Page Design" name="project_type"/>
					<label htmlFor="tag5" className='cursor-scale small'>Landing Page Design</label>
					<input id="tag6" type="checkbox" value="Other" name="project_type"/>
					<label htmlFor="tag6" className='cursor-scale small'>Other</label>
				</div>

				<h4 className="form-sup cursor-scale small">How we can contact you?</h4>

				<div className="form-wrap">
					<div className="input-wrapper cursor-scale small">
						<input id="user_name" className="form-input" required type="text" name="user_name"/>
						<label className="form-label" htmlFor="user_name">Full Name</label>
					</div>
					<div className="input-wrapper cursor-scale small">
						<input id="user_email" className="form-input" required type="email" name="user_email"/>
						<label className="form-label" htmlFor="user_email">Email</label>
					</div>
				</div>
				<div className="input-wrapper cursor-scale small">
					<input id="user_phone" className="form-input" required type="number" name="tel"/>
					<label className="form-label" htmlFor="user_phone">Phone</label>
				</div>
				<div className="input-wrapper input-wrapper_extra cursor-scale small">
					<textarea id="user_message" className="form-input" required name="message" rows="2"/>
					<label className="form-label" htmlFor="user_message">Message</label>
				</div>
				<input className="form-submit btn btn_alt cursor-scale small" type="submit" value="Send"/>
			</form>
		</>
	)
}

export default ContactForm;
