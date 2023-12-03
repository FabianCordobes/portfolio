import {
	FaEnvelopeOpen,
	FaPhoneSquareAlt,
	FaFacebookF,
	FaGithub,
	FaInstagram,
	FaLinkedin,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
	const { t } = useTranslation();
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

		emailjs
			.sendForm('service_esteb9h', 'template_wi8riyg', form.current, 'btdakFXCbv_wuqY7F')
			.then(
				(result) => {
					console.log(result.text);
					// Mostrar notificación de éxito
					toast.success(t('emailSentSuccess'));
				},
				(error) => {
					console.log(error.text);
					// Mostrar notificación de error
					toast.error(t('emailSentError'));
				}
			);
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
			<span>{t('contactMe')}</span>
			</h2>

			<div className="contact__container container grid gap">
				<div className="contact__data">
					<h3 className="contact__title">{`${t('contactTitle')}`}</h3>

					<p className="contact__description">
						{t('contactDescription')}
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
								<span className="info__title">{t('telTitle')}</span>
								<a href="tel:1176371182">
									<h4 className="info__desc">+54 9 11 7637 1182</h4>
								</a>
							</div>
						</div>
					</div>

					<div className="contact__socials">
						<a
							href="https://www.facebook.com/profile.php?id=100079283746434"
							className="contact__social-link">
							<FaFacebookF />
						</a>

						<a
							href="https://www.linkedin.com/in/fabi%C3%A1n-ariel-cordob%C3%A9s-956539234/"
							className="contact__social-link">
							<FaLinkedin />
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
								placeholder={t('namePlace')}
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
								placeholder={t('emailPlace')}
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
								placeholder={t('subjectPlace')}
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
								placeholder={t('messagePlace')}
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
						{t('submitButton')}
						<span className="button__icon contact__button-icon">
							<FiSend />
						</span>
					</button>
				</form>
			</div>
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</section>
	);
};

export default Contact;
