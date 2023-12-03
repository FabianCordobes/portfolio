import Info from '../../components/Info.jsx';
import Stats from '../../components/Stats';
import { FaDownload } from 'react-icons/fa';
import CV from '../../assets/cv-fabian-cordobes.pdf';
import Skills from '../../components/Skills';
import { resume, skillsFront, skillsBack, skillsTools } from '../../data';

import './about.css';
import ResumeItem from '../../components/ResumeItem';

const About = () => {
	return (
		<main className="section container">
			<section className="about">
				<h2 className="section__title">
					Sobre <span>Mi</span>
				</h2>

				<div className="about__container grid">
					<div className="about__info">
						<h3 className="section__subtitle">Información Personal</h3>

						<ul className="info__list grid">
							<Info />
						</ul>

						<a
							href={CV}
							download=""
							className="button">
							Descargar CV
							<span className="button__icon">
								<FaDownload />
							</span>
						</a>
					</div>

					<div className="stats grid">
						<Stats />
					</div>
				</div>
			</section>

			<div className="separator"></div>

			<section className="skills">
				<h3 className="section__subtitle subtitle__center">Mis habilidades</h3>

				<h3 className="section__subtitle subtitle__left">Front-End</h3>
				<div className="skills__container grid gap r-gap">
					<Skills skills={skillsFront} />
				</div>

        <h3 className="section__subtitle subtitle__left">Back-End</h3>
				<div className="skills__container grid gap r-gap">
					<Skills skills={skillsBack} />
				</div>

        <h3 className="section__subtitle subtitle__left">Mas herramientas</h3>
        <div className='skills__container grid'>
          {skillsTools.map((tool) => {
            return (
              <>
              <div key={tool.id}>
                <img className='skills__icon' src={tool.src} alt={tool.alt} />
                <h3 className='skills__title'>{tool.title}</h3>
              </div>
              </>
            )
          })}
        </div>
        
			</section>

			<div className="separator"></div>

			<section className="resume">
				<h3 className="section__subtitle subtitle__center">Experiencia & Educación</h3>

				<div className="resume__container grid">
					<div className="resume__data">
						{resume.map((val) => {
							if (val.category === 'experience') {
								return (
									<ResumeItem
										key={val.id}
										{...val}
									/>
								);
							}
						})}
					</div>

					<div className="resume__data">
						{resume.map((val) => {
							if (val.category === 'education') {
								return (
									<ResumeItem
										key={val.id}
										{...val}
									/>
								);
							}
						})}
					</div>
				</div>
			</section>
		</main>
	);
};

export default About;
