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

import './contact.css';

const Contact = () => {
	const correoElectronico = 'fabianarielcordobes@gmail.com'; // Reemplaza con tu dirección de correo electrónico.

	const abrirCorreoElectronico = () => {
		window.location.href = `mailto:${correoElectronico}`;
	};

	const numeroTelefono = '5491136737281'; // Reemplaza con el número de teléfono al que deseas enviar un mensaje.

	const abrirWhatsApp = () => {
		window.open(`whatsapp://send?phone=${numeroTelefono}`);
	};

	return (
		<section className="contact section">
			<h2 className="section__title">
				Get in <span>Touch</span>
			</h2>

			<div className="contact__container container grid gap">
				<div className="contact__data">
					<h3 className="contact__title">Don't be Shy</h3>

					<p className="contact__description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas pariatur
						dolore modi, exercitationem ipsum in numquam. Quo, voluptas laboriosam. Culpa
						sapiente ssosa
					</p>

					<div className="contact__info">
						<div className="info__item">
							<FaEnvelopeOpen className="info__icon" />

							<div className='info__cont'>
								<span className="info__title">Mail me</span>
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
								<span className="info__title">Call me</span>
								<h4
									className="info__desc"
									onClick={abrirWhatsApp}>
									+54 9 11 3673-7281
								</h4>
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

				<form className="contact__form">
					<div className="form__input-group">
						<div className="form__input-div">
							<input
								type="text"
								placeholder="Your Name"
								className="form__control"
							/>
						</div>

						<div className="form__input-div">
							<input
								type="email"
								placeholder="Your Email"
								className="form__control"
							/>
						</div>

						<div className="form__input-div">
							<input
								type="text"
								placeholder="Your Subject"
								className="form__control"
							/>
						</div>
					</div>

					<div className="form__input-div">
						<textarea
							placeholder="Your Message"
							className="form__control textarea"></textarea>
					</div>

					<button className="button">
						Send Message
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
