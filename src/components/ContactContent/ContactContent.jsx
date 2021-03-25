import React from 'react';
//? COMPONENTS
import Button from '../Buttons/Button';
import Footer from '../Footer/Footer';
//?STYLES
import './content.scss';
const ContactContent = () => {
  return (
    <>
      <div className='contact__header'>
        <h1>Свържете се с мен</h1>
        <p>I always welcome new patients and are excited you found me.</p>
      </div>

      <div className='map__contact'>
        <div className='map'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.750676389148!2d26.81409071756489!3d43.164735723846775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a5f63e8b597fc7%3A0x451b03cca068c79c!2sMbal%20Veliki%20Preslav!5e0!3m2!1sen!2sbg!4v1616681689544!5m2!1sen!2sbg'
            allowFullScreen=''
            loading='lazy'></iframe>
        </div>
        <div className='contact__me'>
          <h2>Кабинетът се намира:</h2>
          <ul>
            <li>address</li>
            <li>Call</li>
            <li>Viber</li>
            <li>Messenger</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactContent;
