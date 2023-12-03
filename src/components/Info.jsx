import { personalInfo } from "../data";
import { useTranslation } from 'react-i18next';

const Info = () => {
   const {t} = useTranslation();
	return (
      <>
         {personalInfo.map(({title, description}, index) => {
            return (
               <li className="info__item" key={index}>
                  <span className="info__title">{`${t(title)}: `}</span>
                  <span className="info__description">{description}</span>
               </li>
            )
         })}
      </>
   )
};

export default Info;
