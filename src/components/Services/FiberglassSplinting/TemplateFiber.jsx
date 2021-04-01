import React from 'react';
//?COMPONENTS
import Footer from '../../Footer/Footer';
//?STYLES
import styles from './fiber.module.scss';
const TemplateFiber = ({ title, text }) => {
  return (
    <>
      <div className={styles.fiber__component}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <Footer />
    </>
  );
};

export default TemplateFiber;
