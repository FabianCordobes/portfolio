import Profile from '../../assets/perfil3.png';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './home.css';

const Home = () => {
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
						<span>Soy Fabian Cordobes.</span>
					</h1>
					<h1 className="home__title">Full Stack Developer</h1>

					<p className="home__description">
						Soy una persona apasionada por el mundo digital con habilidades
						destacadas en diversos lenguajes de programación y. Cuento con 2 años de experiencia en
						desarrollo web.
					</p>

					<Link
						to="/about"
						className="button">
						Mas sobre mi{' '}
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
