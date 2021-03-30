import React from 'react';
import { Link } from 'react-router-dom';

//?IMAGES
import { ReactComponent as Hands } from '../../../assets/images/allergies-solid.svg';
import { ReactComponent as Temperature } from '../../../assets/images/thermometer-full-solid.svg';
import { ReactComponent as Bin } from '../../../assets/images/trash-solid.svg';
import { ReactComponent as Pump } from '../../../assets/images/pump-medical-solid.svg';
import { ReactComponent as Calendar } from '../../../assets/images/calendar-alt-regular.svg';
import { ReactComponent as Glasses } from '../../../assets/images/glasses-solid.svg';

//? STYLES
import './savework.scss';
const SaveWork = () => {
  return (
    <div className='content__saveWork'>
      <h2>Зъболечение в условията на пандемия от коронавирус</h2>
      <div className='wrapper__saveWork'>
        <div className='hands__saveWork'>
          <Link className='hands__link' to='../COVID/Message.jsx' target='_blank'>
            <Hands className='icon__icon' />
          </Link>
          <Link className='more__info' to='../COVID/Message.jsx'>
            <p>Дезинфекция на ръцете на персонала и пациентите</p>
          </Link>
        </div>
        <div className='bin__saveWork'>
          <Link className='bin__link' to='../COVID/Message.jsx' target='_blank'>
            <Bin className='icon__icon' />
          </Link>
          <Link className='more__info' to='../COVID/Message.jsx'>
            <p> Индивидуални защитни и помощни средства</p>
          </Link>
        </div>
      </div>
      <div className='wrapper__saveWork_2'>
        <div className='temperature__saveWork'>
          <Link className='temperature__link' to='../COVID/Message.jsx' target='_blank'>
            <Temperature className='icon__icon' />
          </Link>
          <Link className='more__info' to='../COVID/Message.jsx'>
            <p className='temperature__text'>
              Безконтактно измерване на температурата на персонала и пациентите.
            </p>
          </Link>
        </div>
        <div className='pump__saveWork'>
          <Link className='pump__link' to='../COVID/Message.jsx' target='_blank'>
            <Pump className='icon__icon' />
          </Link>
          <Link className='more__info' to='../COVID/Message.jsx'>
            <p>Дезинфекция на всички контактни повърхности</p>
          </Link>
        </div>
      </div>

      <div className='wrapper__saveWork_3'>
        <div className='calendar__saveWork'>
          <Link className='calendar__link' to='../COVID/Message.jsx' target='_blank'>
            <Calendar className='icon__icon' />
          </Link>
          <Link className='more__info' to='../COVID/Message.jsx'>
            <p>Стриктно спазване на работния график</p>
          </Link>
        </div>

        <div className='glasses__saveWork'>
          <Link className='glasses__link' to='../COVID/Message.jsx' target='_blank'>
            <Glasses className='icon__icon' />
          </Link>
          <Link className='more__info' to='../COVID/Message.jsx'>
            <p>Защитни очила за пациентите по време на лечение.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SaveWork;
