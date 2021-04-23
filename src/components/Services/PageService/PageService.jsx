import React from 'react';
//?COMPONENTS
import Footer from '../../Footer/Footer';

//?STYLES
import styles from '../Pages/pages.module.scss';
const PageService = ({
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
}) => {
  return (
    <section>
      <div className={styles.content__Services}>
        <h2>{title}</h2>
        <div className={styles.wrapper__Services}>
          <div className={styles.images__Right}>
            <img src={img} alt={alt} />
          </div>

          <div className={styles.text__Left}>
            <p>{text}</p>
          </div>
        </div>
      </div>

      <div className={styles.content__Services}>
        <div className={styles.content__Second}>
          <h2>{titleSecond}</h2>
          <div className={styles.wrapper__Services}>
            <div className={styles.images__Right}>
              <img src={imgSecond} alt={altSecond} />
            </div>

            <div className={styles.text__Left}>
              <p>{textSecond}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content__Services}>
        <div className={styles.content__Three}>
          <h2>{titleThird}</h2>
          <div className={styles.wrapper__Services}>
            <div className={styles.images__Right}>
              <img src={imgThird} alt={altThird} />
            </div>

            <div className={styles.text__Left}>
              <ol>
                <li>{textThird}</li>
                <li>{textThird2}</li>
              </ol>
              <img className={styles.last__img} src={imgFourth} alt={imgFourth} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default PageService;
