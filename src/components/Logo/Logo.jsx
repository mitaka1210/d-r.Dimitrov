import React from 'react';
import style from './logo.module.scss';
//import img1 from '../../Main/images/img-6.jpg';
//import img2 from '../../Main/images/img-8.png';

function Logo() {
  return (
    <div className={style.logo}>
      <span>
        <p>Free Call: +359 888888888</p>
        <p>Street: </p>
      </span>
      {/*<span>
        <h1>
          <img className={style.logo__images} src='' alt='' />
        </h1>
        <p className={style.profession}>
          <img className={style.logo__work} src='' alt='' />
        </p>
      </span>*/}

      <span className={style.work__time}>
        <p>Open Hours</p>
        <p>
          Mon-Sat: <b>8:00am - 9:00pm</b> Sun: <b className={style.closed}>CLOSED</b>
        </p>
      </span>
    </div>
  );
}

export default Logo;
