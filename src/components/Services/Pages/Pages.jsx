import React from 'react';
import PageService from '../PageService/PageService';
import img1 from '../../../assets/images/facet_1.jpeg';
import img2 from '../../../assets/images/facet_2.jpeg';
import img3 from '../../../assets/images/facet_3.jpeg';
import img4 from '../../../assets/images/facet_4.jpeg';

const Pages = () => {
  return (
    <>
      <PageService
        title='Фасети'
        text='Фасетите са порцеланови люспи с дебелина 0,3-0,7 мм., които се залепват на предните повърхности на зъбите след минимално или без никакво изпиляване. Те са с много добър и дълготраен естетически резултат. В сравнение с директните реставрации ефектът е по-дългосрочен – порцеланът е инертен, няма никакъв обмен със слюнката, запазва блясъка си след години.'
        img={img1}
        alt='main-img'
        titleSecond='Залепване на Фасети'
        textSecond='За залепването на фасетите се използва фотополимер или композитен цимент подобен на фотополимер. Важат всички правила за работа както при естетични пломби, особенно изолацията с кофердам - добрият зъболекар задължитело би го използвал при фиксирането на фасетите.'
        imgSecond={img3}
        altSecond='Лепене на фасети'
        titleThird='Лeчението с фасети протича в няколко посещения'
        textThird='В първото посещение лекуващият прави анализ на зъбите,  захапката и съотношението с устата, взимат се отпечатъци.'
        textThird2='При второто ви посещение фасетите са вече изработени от восък върху гипсов модел, и при одобрение от ваша страна зъболекарят ги пресъздава с композит в устата ви. Така ще може да оцените как ще изглеждат бъдещите порцеланови фасети. Изпиляването става през временния фотополимер, като за ориентир се използват силиконови ключове - така изпиляването от зъбите е минимално или никакво. Взема се отпечатък от изпилените зъби за изработване на постоянните фасети в лаборатория.'
        imgThird={img4}
        altThird='Лепене на фасети'
        imgFourth={img2}
      />
    </>
  );
};

export default Pages;
