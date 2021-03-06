import React from 'react';
//?COMPONENTS
import PageService from '../PageService/PageService';
import TemplateCosmetics from './TempleteCosmetic';

//? IMAGES
import img1 from '../../../assets/images/facet_1.jpeg';
import img2 from '../../../assets/images/facet_2.jpeg';
import img3 from '../../../assets/images/facet_3.jpeg';
import img4 from '../../../assets/images/facet_4.jpeg';

//? STYLES
import './cosmetic.scss';
const Cosmetic = () => {
  return (
    <>
      <TemplateCosmetics
        title='Корони и мостове'
        text='Зъбните корони и мостове се циментират върху зъбите, като ги покриват изцяло. Използването им се налага при силно разрушени зъби, които не могат да бъдат възстановени по друг начин. Според материалите, от които се изработва, короната може да бъде циркониева, изцяло порцеланова или металокерамична. Циркониевите и металокерамичните конструкции имат по-голяма здравина и са подходящи за изработване на мостове.'
        img={img1}
        alt='main-img'
        titleSecond='Порцеланови корони'
        textSecond='Порцелановите корони са високо естетични поради липсата на метал. Относителната им прозрачност ги прави подходящи за възстановяване на зъби цветът, на които не е силно променен.'
        imgSecond={img3}
        altSecond='Порцеланови корони'
        titleThird='Циркониеви корони'
        textThird='Циркониевият оксид е благородна метална сплав с тебеширено бял цвят. Цирконият блокира тъмният цвят на умъртваните зъби, а белият цвят прави цветовете на короната по живи и истински.'
        className='cirkonii'
        imgThird={img4}
        altThird='Циркониеви корони'
        titleFourt='Металокерамични корони'
        textFourt='Металокерамичните корони са стара и даказала се във времето технология. Връзката между метала и порцелана е изключително здрава и надежна. Заради здравината си са подходящи за изработването на големи мостове. Металната сплав може да бъде неблагородна - хром-кобалд-молибден или благородна - предимно златни сплави. Неблагородните сплави не са биологичнопоносими. При контакт с меките тъкани предизвикват хронично дразнене, а металните окиси, които отделят могат да преоцветят венеца. Предимството им е здравината и ниската цена.'
        imgThird={img4}
        altThird='Металокерамични корони'
      />
    </>
  );
};

export default Cosmetic;
