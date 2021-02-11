import React from 'react';
import './footer.scss';
import footerLogo from '../../assets/VectorFooter.svg';
const Footer = () => {
  return (
    <footer>
      <h2>Вашата усмивка е Вашата визитка! Погрижете се за нея!</h2>
      <div className='wrapperFooter'>
        <div className='workTime'>
          <h3>Работно време:</h3>
          <div className='daysHours'>
            <ul>
              <li>Понеделник</li>
              <li>Вторник</li>
              <li>Сряда</li>
              <li>Четвъртък</li>
              <li>Петък</li>
            </ul>
            <ul>
              <li>08:00 - 16:00</li>
              <li>08:00 - 16:00</li>
              <li>08:00 - 16:00</li>
              <li>08:00 - 16:00</li>
              <li>08:00 - 16:00</li>
            </ul>
          </div>
        </div>

        <div className='contactWithMe'>
          <h4>Контакти</h4>
          <span>phone: +359 8888888888</span>
          <span>email: dimitar_dimitrov12@mail.bg</span>
        </div>
        <div className='takeAppointment'>
          <button>
            <span>
              <a href='https://detistguide.setmore.com/'>Запазете си час!</a>
            </span>
          </button>
        </div>
        <div className='socialMedia'>
          <button>Facebook</button>
          <button>Facebook</button>
          <button>Facebook</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
