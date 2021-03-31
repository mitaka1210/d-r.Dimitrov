import React from 'react';

//?COMPONEMTS
import TemplatePorcelainFillings from './TemplatePorcelainFillings';

//? IMAGES
import img1 from '../../../assets/images/porcelanov-inlei_24_2.jpeg';
import img2 from '../../../assets/images/porcelanov-ovurlei_24_5.jpeg';
import img3 from '../../../assets/images/koferdam_use.jpeg';
import img4 from '../../../assets/images/vuzstanoviavane-na-zub-plomba.jpeg';
const PorcelainFillings = () => {
  return (
    <div>
      <TemplatePorcelainFillings
        title='Керамични инлеи'
        text='Керамичните инлеи или така наречените порцеланови пломби се изработват в зъботехническа лаборатория след отпечатък от подготвените зъби на пациента.Залепват се за зъба с фотополимер или композитен цимент. Основните фактори за успеха на лечението са точната изработка и изолирането с кофердам по време на фиксирането. Залепват се за зъба с фотополимер или композитен цимент. Основните фактори за успеха на лечението са точната изработка и изолирането с кофердам по време на фиксирането.'
        img={img1}
        alt='Керамични инлеи'
        textSecond='Порцеланът е здрав и дълготраен материал. Остава непроменен с времето, не старее и не се преоцветява.За разлика от директното възстановяване с фотополимер, инлеите не създават напрежение в зъба.'
        imgSecond={img2}
        altSecond='Керамични инлеи'
      />
    </div>
  );
};

export default PorcelainFillings;
