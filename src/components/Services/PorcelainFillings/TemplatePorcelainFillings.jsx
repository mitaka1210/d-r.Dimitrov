import React from 'react';
//?COMPONENTS
import Footer from '../../Footer/Footer';
//?STYLES
import styles from './PorcelainFillings.module.scss';
const TemplatePorcelainFillings = ({
  title,
  text,
  img,
  alt,
  titleSecond,
  imgSecond,
  altSecond,
  textSecond,
  textThird,
  textThird2,
  imgThird,
  altThird,
  titleThird,
  imgFourth,
  imgFive,
  altFive,
  textFour,
}) => {
  return (
    <section>
      <div className={styles.content__Services}>
        <h2>{title}</h2>
        <div className={styles.wrapper__Services}>
          <p>{text}</p>
          <div className={styles.images__Right}>
            <img src={img} alt={alt} />
          </div>
        </div>
        <div className={styles.images__Right2}>
          <p>{textSecond}</p>
          <img src={imgSecond} alt={altSecond} />
        </div>
        <div className='text__Left'>
          <div className='last__img__plumb'>
            <img className='last__img__1' src={imgFourth} alt={imgFourth} />
            <img className='last__img__2' src={imgFive} alt={altFive} />
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default TemplatePorcelainFillings;
