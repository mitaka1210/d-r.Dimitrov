import React from 'react';
//?COMPONENTS
import Footer from '../../Footer/Footer';
//?STYLES
import style from './root.module.scss';

const TemplateRootCanal = ({
  firstImg,
  firstAlt,
  firstText,
  secondImg,
  secondAlt,
  secondText,
  threeImg,
  threeAlt,
  threeText,
  fourImg,
  fourAlt,
  fourText,
  title,
}) => {
  return (
    <section>
      <h2>{title}</h2>
      <div className={style.first__right__img}>
        <img src={firstImg} alt={firstAlt} />
        <div className={style.text__Left}>
          <p>{firstText}</p>
        </div>
      </div>
      <div className={style.second__Left__img}>
        <img src={secondImg} alt={secondAlt} />
        <div className={style.text__Right}>
          <p>{secondText}</p>
        </div>
      </div>
      <div className={style.three__Right__img}>
        <img src={threeImg} alt={threeAlt} />
        <div className={style.text__Left}>
          <p>{threeText}</p>
        </div>
      </div>
      <div className={style.four__Left__img}>
        <img src={fourImg} alt={fourAlt} />
        <div className={style.text__Right}>
          <p>{fourText}</p>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default TemplateRootCanal;
