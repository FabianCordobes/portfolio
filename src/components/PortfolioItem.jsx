import React from 'react';
import Close from '../assets/close.svg';

const PortfolioItem = ({ img, title, details, links }) => {
	const [modal, setModal] = React.useState(false);

	const toggleModal = () => {
		setModal(!modal);
		console.log(links);
	};

	return (
		<div className="portfolio__item">
			<img
				src={img}
				alt=""
				className="portfolio__img"
			/>

			<div
				className="portfolio__hover"
				onClick={toggleModal}>
				<h3 className="portfolio__title">{title}</h3>
			</div>

			{modal && (
				<div className="portfolio__modal">
					<div className="portfolio__modal-content">
						<img
							src={Close}
							alt=""
							className="modal__close"
							onClick={toggleModal}
						/>

						<div className="links__cont">
							{links?.map(({ icon, href, side, title }, index) => {
								return (
									<a
										href={href}
										className={side === 'left' ? `item__link left` : `item__link right`}
										target="blank_"
										key={index}>
										{icon}
									</a>
								);
							})}
						</div>

						<h3 className="modal__title">{title}</h3>

						<ul className="modal__list grid">
							{details.map(({ icon, title, desc }, index) => {
								return (
									<li
										className="modal__item"
										key={index}>
										<span className="item__icon">{icon}</span>

										<div>
											<span className="item__title">{title}</span>
											<span className="item__details">{desc}</span>
										</div>
									</li>
								);
							})}
						</ul>

						<img
							src={img}
							alt=""
							className="modal__img"
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default PortfolioItem;
