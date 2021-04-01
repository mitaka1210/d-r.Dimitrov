import React from 'react';
//?COMPONENTS
import Footer from '../../Footer/Footer';

//?STYLES
import styles from './gum.module.scss';
const TemplateGum = ({
  text,
  title,
  textThree,
  textFour,
  textTwo,
  imgThree,
  imgOne,
  imgTwo,
  altOne,
  altThree,
  altTwo,
  altFour,
  imageOne,
}) => {
  return (
    <section className={styles.gum__Main}>
      <div className={styles.gum__Header}>
        <h1>{title}</h1>
      </div>

      <div className={styles.wrapper__page}>
        <p>{text}</p>

        <div className={styles.left__img}>
          <img src={imageOne} alt={altOne} />
          <p>{textTwo}</p>
        </div>
      </div>
      <div className={styles.first__Text}>
        <h4>{textThree}</h4>

        <div className={styles.two__images}>
          <img className={styles.img__One} src={imgOne} alt={altThree} />
          <img className={styles.img__Two} src={imgTwo} alt={altTwo} />
        </div>
      </div>

      <div className={styles.right__img}>
        <img src={imgThree} alt={altFour} />
        <p>{textFour}</p>
      </div>

      <Footer />
    </section>
  );
};

export default TemplateGum;
