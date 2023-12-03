import Profile from '../../assets/perfil3.png';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './home.css';
import { useTranslation } from 'react-i18next';


const Home = () => {
	const {t} = useTranslation();
	return (
		<section className="home section grid">
			<img
				src={Profile}
				alt=""
				className="home__img"
			/>

			<div className="home__content">
				<div className="home__data">
					<h1 className="home__title">
						<span>{t('homeTitle')}</span>
					</h1>
					<h1 className="home__title">Full Stack Developer</h1>

					<p className="home__description">
						{t('homeDesc')}
					</p>

					<Link
						to="/about"
						className="button">
						{t("more")}
						<span className="button__icon">
							<FaArrowRight />
						</span>
					</Link>
				</div>
			</div>

			<div className="color__block"></div>
		</section>
	);
};

export default Home;
