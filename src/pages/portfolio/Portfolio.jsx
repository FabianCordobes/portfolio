import PortfolioItem from '../../components/PortfolioItem'
import {portfolio} from '../../data'
import './portfolio.css';
import { useTranslation } from 'react-i18next';



const Portfolio = () => {
  const {t} = useTranslation()
  return (
    <section className="portfolio section">
      <h2 className="section__title">{t('my')} <span>Portfolio</span></h2>

      <div className="portfolio__container container grid gap">
        {portfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default Portfolio