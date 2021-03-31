//?COMPONENTS
import Footer from '../../Footer/Footer';
//?STYLES
import styles from './white.module.scss';
const TemplateWhitening = ({
  title,
  text,
  img,
  alt,
  titleSecond,
  imgSecond,
  altSecond,
  textSecond,
  imgThird,
  altThird,
  titleThird,
}) => {
  return (
    <section>
      <div className={styles.content__Services}>
        <div className={styles.wrapper__Services}>
          <div className={styles.images__Right}>
            <img src={img} alt={alt} />
          </div>

          <div className={styles.text__Left}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>

      <div className={styles.content__Services}>
        <div className={styles.content__Second}>
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

      <Footer />
    </section>
  );
};

export default TemplateWhitening;
