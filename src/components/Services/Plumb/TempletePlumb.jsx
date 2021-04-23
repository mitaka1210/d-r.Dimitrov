import React from 'react';
//?COMPONENTS
import Footer from '../../Footer/Footer';
//?STYLES
import styles from './plumb.module.scss';
const TempletePlumb = ({
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
              <div className={styles.last__img__plumb}>
                <img className={styles.last__img__1} src={imgFourth} alt={imgFourth} />
                <img className={styles.last__img__2} src={imgFive} alt={altFive} />
              </div>
              <p>
                Спазвайки най-високите медицински стандарти и използвайки качествени иновативни
                материали,{' '}
                <strong>
                  Aз Ви давам гаранция, че Вашата пломба ще бъде естетична и дълготрайна
                </strong>
                . Д-р Александър Димитров се е специализирал в лечението на пациенти , които искат
                невидими възстановявания на предните си зъби и не искат зъбите им да бъдат
                изпилявани за корони.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default TempletePlumb;
