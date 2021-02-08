import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import img1 from '../../assets/images/img-4.jpg';
import img2 from '../../assets/images/img-2.jpg';
import './whoiam.scss';
import gsap from 'gsap';
const WhoIam = () => {
  // Ref for our element
  const sectionRef = useRef(null);
  // All the ref to be observed
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  });

  // Animation for fading in
  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
    });
  };
  // Animation for fading out
  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: 'power4.out',
    });
  };

  // checking to see when the vieport is visible to the user
  intersection && intersection.intersectionRatio < 0.2 ? fadeOut('.fadeIn') : fadeIn('.fadeIn');
  return (
    <>
      <main>
        <h3 className='fadeIn'>Добре дошли при денталения специалист др А.Димитров</h3>
        <div className='container' ref={sectionRef}>
          <div className='images fadeIn'>
            <div className='flip-card'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <img src={img1} alt='about-me ' />
                </div>

                <div className='flip-card-back'>
                  <h4>Hello</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quod quo
                    eligendi mollitia temporibus saepe quibusdam fuga cumque hic velit minima
                    veritatis cupiditate, aliquam numquam repudiandae sequi et asperiores. Natus!
                  </p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </div>
          <div className='info fadeIn'>
            <p>
              Изборът на зъболекари и клиника в България е огромен. Пломба или коронка може да си
              направите почти навсякъде, но когато става въпрос за сложно лечение, включващо
              операции и то не една, няколко генерации временни зъби, брекети, списъкът се стеснява
              драматично. Всъщност тази ситуация съществува навсякъде по света. Навсякъде има много
              лекари и малко добри специалисти.
            </p>
            <p>
              Според мен, посредственият лекар не знае, дори не осъзнава своята посредственост и
              пациентът може никога да не разбере истината за хода и съдбата на своето лечение. Това
              е така, тъй като не всички лошо направени зъби болят и не всички неадекватни импланти
              падат. В много случаи имунната ни система ни защитава от некачествената медицина.
            </p>
            <p>
              Пациентът (клиентът) може да избере своя зъболекар, но тъй като му липсват критерии за
              работата на специалист, в повечето случаи изборът е по чисто субективни признаци.
            </p>
            <p>
              <strong>Ето защо имате нужда от мен!</strong>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default WhoIam;
