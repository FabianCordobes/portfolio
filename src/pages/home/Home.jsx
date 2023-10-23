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
						<span>I&apos;m Fabian Cordobes.</span>
					</h1>
					<h1 className="home__title">Full Stack Developer</h1>

					<p className="home__description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odit
						distinctio doloribus a! Ut corrupti iure magni amet, quos quasi aliquam
						recusandae praesentium blanditiis consectetur ad omnis minima ullam? Est?
					</p>

					<Link
						to="/about"
						className="button">
						More About Me{' '}
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
