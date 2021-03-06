import React from 'react';

//?COMPONENTS
import TemplateWhitening from './TemplateWhitening';
//? IMAGES
import img1 from '../../../assets/images/facet_1.jpeg';
import img2 from '../../../assets/images/facet_2.jpeg';

const Whitening = () => {
  return (
    <>
      <TemplateWhitening
        title='Почистване на зъбен камък'
        text=' Зъбната плака започва да се образува непосредствено след като се нахраним, особенно ако това са тестени храни, сладко или варива. Когато плаката се задържи за няколко часа тя се втвърдява от минералните соли в слюнката и се превръща в зъбен камък. За това е важно зъбите да се измиват възможно най - скоро след хранене.Дори при добра хигиена е нeобходимо почистване на зъбите в зъболекарски кабинет на всеки шест месеца.
		  '
        img={img1}
        alt='Почистване на зъбен камък'
        textSecond='За да бъдат почистени зъбите Ви както трябва, е нобходимо освен гумички, четки и ултразвук вашият зъболекар да използва Air Flow. Това е иновативна система за полиране, при която зъбите се почистват до съвършенство дори и на най - трудно достъпните места - в междузъбните контакти, под венеца, около неправилно подредени зъби, мостове и импланти.'
        imgSecond={img2}
        altSecond='Почистване на зъбен камък'
      />
    </>
  );
};

export default Whitening;
