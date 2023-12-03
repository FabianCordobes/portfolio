import {
	FaEnvelopeOpen,
	FaPhoneSquareAlt,
	FaFacebookF,
	FaTwitter,
	FaYoutube,
	FaGithub,
	FaInstagram,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
	const form = useRef();
	const [userData, setUserData] = useState({
		user_name: '',
		user_email: '',
		subject: '',
		message: '',
	});
	const correoElectronico = 'fabianarielcordobes@gmail.com';

	const abrirCorreoElectronico = () => {
		window.location.href = `mailto:${correoElectronico}`;
	};

	const handleChange = (event) => {
		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		});
	};

	const sendEmail = (e) => {
		e.preventDefault();

		// Use your EmailJS template ID, user ID, and access token

		emailjs
			.sendForm('service_esteb9h', 'template_wi8riyg', form.current, 'btdakFXCbv_wuqY7F')
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		// Clear the form after submission
		setUserData({
			user_name: '',
			user_email: '',
			subject: '',
			message: '',
		});
	};

	return (
		<section className="contact section">
			<h2 className="section__title">
				<span>Contáctame!</span>
			</h2>

			<div className="contact__container container grid gap">
				<div className="contact__data">
					<h3 className="contact__title">Te responderé de inmediato</h3>

					<p className="contact__description">
						Puedes contactarme a través de mis redes sociales, email, llamada telefónica o
						completando el formulario a continuación.
					</p>

					<div className="contact__info">
						<div className="info__item">
							<FaEnvelopeOpen className="info__icon" />

							<div className="info__cont">
								<span className="info__title">Email</span>
								<h4
									className="info__desc"
									onClick={abrirCorreoElectronico}>
									fabianarielcordobes@gmail.com
								</h4>
							</div>
						</div>

						<div className="info__item">
							<FaPhoneSquareAlt className="info__icon" />

							<div>
								<span className="info__title">Telefono movil</span>
								<a href="tel:1176371182">
									<h4 className="info__desc">+54 9 11 7637 1182</h4>
								</a>
							</div>
						</div>
					</div>

					<div className="contact__socials">
						<a
							href="https://facebook.com"
							className="contact__social-link">
							<FaFacebookF />
						</a>

						<a
							href="https://facebook.com"
							className="contact__social-link">
							<FaTwitter />
						</a>

						<a
							href="https://www.instagram.com/fabian.ariel_/"
							className="contact__social-link">
							<FaInstagram />
						</a>

						<a
							href="https://github.com/FabianCordobes"
							className="contact__social-link">
							<FaGithub />
						</a>
					</div>
				</div>

				<form
					className="contact__form"
					onSubmit={sendEmail}
					ref={form}>
					<div className="form__input-group">
						<div className="form__input-div">
							<input
								type="text"
								placeholder="Tu Nombre"
								className="form__control"
								value={userData.user_name}
								onChange={handleChange}
								name="user_name"
								id="user_name"
							/>
						</div>

						<div className="form__input-div">
							<input
								type="email"
								placeholder="Tu Email"
								className="form__control"
								value={userData.user_email}
								onChange={handleChange}
								name="user_email"
								id="user_email"
							/>
						</div>

						<div className="form__input-div">
							<input
								type="text"
								placeholder="Tu Asunto"
								className="form__control"
								value={userData.subject}
								onChange={handleChange}
								name="subject"
								id="subject"
							/>
						</div>
					</div>

					<div className="form__input-div">
						<textarea
							placeholder="Tu Mensaje"
							className="form__control textarea"
							value={userData.message}
							onChange={handleChange}
							name="message"
							id="message"
						/>
					</div>

					<button
						className="button"
						type="submit">
						Enviar Mensaje
						<span className="button__icon contact__button-icon">
							<FiSend />
						</span>
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
