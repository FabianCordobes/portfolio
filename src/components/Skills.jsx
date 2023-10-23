import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = ({ skills }) => {
	return (
		<>
			{skills.map(({ title, percentage, src }, index) => {
				return (
					<div
						className="progres__box"
						key={index}>
						<div className="progress__circle" >
							<CircularProgressbar
								strokeWidth={7.5}
								text={`${percentage}%`}
								value={percentage}
							/>
						</div>

						<h3 className="skills__title">{title}</h3>
						<div
							className="icon"
							
							onMouseEnter={(e) => (e.target.style.backgroundImage = `url(${src})`)}
							onMouseLeave={(e) =>
								(e.target.style.backgroundImage = 'none')
							}></div>
					</div>
				);
			})}
		</>
	);
};

export default Skills;
