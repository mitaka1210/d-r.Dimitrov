import React from 'react';
import { Link } from 'react-router-dom';
import style from './logo.module.scss';
//import img1 from '../../Main/images/img-6.jpg';
//import img2 from '../../Main/images/img-8.png';
import topSVG from '../../assets/Vector.svg';
import mainLogo from '../../assets/tooth insurance.svg';
//? COMPONENTS
import Button from '../Buttons/Button';

function Logo() {
  return (
    <div className={style.logo}>
      <div className={style.img}>
        <img src={topSVG} alt='imges-top-svg' />
      </div>
      <div className={style.btn__Header}>
        <Button>
          <span className={style.btn__Appointment}>
            <a href='https://detistguide.setmore.com/' target='_blank'>
              Запазете си час сега!
            </a>
          </span>
        </Button>

        <Button className={style.btn__Header_2}>
          <Link to='../COVID/Message.jsx' target='_blank'>
            COVID-19
          </Link>
        </Button>
      </div>
      <div className={style.dR}>
        <div className={style.my}>
          <span>
            <Link to='/' href='/'>
              д-р А.Димитров
            </Link>
          </span>
          <span>
            <Link to='/'>лекар по дентална медицина</Link>
          </span>
        </div>
        <div className={style.mainLogo}>
          <img src={mainLogo} alt='main-logo' />
        </div>
      </div>
    </div>
  );
}

export default Logo;
