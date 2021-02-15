import React from 'react';
import style from './logo.module.scss';
//import img1 from '../../Main/images/img-6.jpg';
//import img2 from '../../Main/images/img-8.png';
import topSVG from '../../assets/Vector.svg';
import mainLogo from '../../assets/tooth insurance.svg';

function Logo() {
  return (
    <div className={style.logo}>
      <div className={style.img}>
        <img src={topSVG} alt='imges-top-svg' />
      </div>
      <div className='btn-header'>
        <button>
          {' '}
          <a href='https://detistguide.setmore.com/' target='_blank'>
            Запазете си час сега!
          </a>
        </button>
      </div>
      <div className={style.dR}>
        <div className={style.my}>
          <span>д-р А.Димитров</span>
          <span>лекар по дентална медицина</span>
        </div>
        <div className={style.mainLogo}>
          <img src={mainLogo} alt='main-logo' />
        </div>
      </div>
    </div>
  );
}

export default Logo;
