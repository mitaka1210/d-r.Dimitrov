import React from 'react';

//?COMPONEMTS
import TempletePlumb from './TempletePlumb';

//? IMAGES
import img1 from '../../../assets/images/koferdam.jpeg';
import img2 from '../../../assets/images/koferdam_res.jpeg';
import img3 from '../../../assets/images/koferdam_use.jpeg';
import img4 from '../../../assets/images/vuzstanoviavane-na-zub-plomba.jpeg';
const Plumb = () => {
  return (
    <div>
      <TempletePlumb
        title='Естетични пломби'
        text='Днес естетичните изисквания са твърде високи във всяка една област и директните възстановявания не правят изключение, особено, когато са на предни зъби. Нашите зъболекари са висококвалифицирани и работят с отдаденост и желание. Тъй като сме инвестирали много в повишаване на квалификацията си и отделяме много време и старание за всеки пациент, използването на евтини материали е неоправдано.'
        titleSecond='Възстановяване на зъб /Естетична пломба/'
        textSecond='Порцелановите корони са високо естетични поради 
        липсата на метал. Относителната им прозрачност ги прави подходящи за възстановяване на зъби цветът, на които не е силно променен.'
        imgSecond={img4}
        altSecond='Възстановяване на зъб /Естетична пломба/'
        titleThird='Изплозване на кофердам'
        textThird='Важно е да се знае, че по време на изработване на естетична пломба, зъбът трябва да бъде напълно изолиран от слюнката в устата. При наличие на влага, фотополимерът не залепва за зъба и в получения микропроцеп започва кариес, диагностицирането на който е възможно няколко години по-късно и обикновено е с фатални последици за зъба. Изолираният с кофердам зъб се вижда много по-добре и по-контрастно, което дава възможност да бъдат отстранени и най-малките остатъци от кариес.'
        textThird2='За да не се задържа храна между зъбите, след поставяне на пломба е необходимо зъбите да имат плътни контакти помежду си. За да постигна това, аз използвам анатомично извити еднократни матрици, които пресъздават формата на зъба.'
        imgThird={img1}
        altThird='Изплозване на кофердам'
        imgFourth={img2}
        altFourth='Изплозване на кофердам'
        imgFive={img3}
        altFive='Изплозване на кофердам'
      />
    </div>
  );
};

export default Plumb;
