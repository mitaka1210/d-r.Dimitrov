import React, { Fragment, useEffect } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';

//? COMPONENTS
import Card from './Card';
//?Libary

import AOS from 'aos';
import 'aos/dist/aos.css';
//? STYLES
import './services.scss';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className='services ' data-aos='fade-up'>
      <h1 className=''>Услугите които предлагам!</h1>
      <h4>
        Денталния кабинет на д-р Александър Димитров предлага диагностика, планиране и цялостно
        лечение.
      </h4>

      <div className='servicesContainer '>
        <Card
          work={
            <Fragment>
              <div className='card__01 '>
                <div className='box '>
                  <div className='icon'>01</div>
                  <div className='contentText'>
                    <h6>Фасети</h6>
                    <p>
                      Фасетите са порцеланови люспи с дебелина 0,3-0,7 мм., които се залепват на
                      предните повърхности на зъбите след минимално или без никакво изпиляване. Те
                      са с много добър и дълготраен естетически резултат. В сравнение с директните
                      реставрации ефектът е…
                    </p>
                    <BrowserRouter>
                      <Route>
                        <Link to='./Pages/Pages.jsx' target='_blank'>
                          Научи повече
                        </Link>
                      </Route>
                    </BrowserRouter>
                  </div>
                </div>
              </div>
            </Fragment>
          }
        />
        <Card
          work={
            <Fragment>
              <div className='card__02'>
                <div className='box'>
                  <div className='icon'>02</div>
                  <div className='contentText'>
                    <h6>Пломби</h6>
                    <p>
                      Всеки зъболекар, работещ в нашата клиника, изработва пломбата, така че тя да
                      издържи дълги години и да удовлетвори естетическите изисквания на пациента.
                      Целта на лечението е възстановяване на правилната анатомична форма на зъба и
                      контактите със съсед…
                    </p>

                    <BrowserRouter>
                      <Route>
                        <Link to='./Plumb/Plumb.jsx' target='_blank'>
                          Научи повече
                        </Link>
                      </Route>
                    </BrowserRouter>
                  </div>
                </div>
              </div>
            </Fragment>
          }
        />
        <Card
          work={
            <Fragment>
              <div className='card__01 '>
                <div className='box '>
                  <div className='icon'>03</div>
                  <div className='contentText'>
                    <h6>Корени и мостове</h6>
                    <p>
                      Зъбните корони се циментират върху зъбите, като ги покриват
                      изцяло.Използването им се налага при силно разрушени зъби, които не могат да
                      бъдат възстановени по друг начин. Според материалите, от които се изработват
                      могат да бъдат изцяло порцеланови ил…
                    </p>
                    <BrowserRouter>
                      <Route>
                        <Link to='./Cosmetic/Cosmetic.jsx' target='_blank'>
                          Научи повече
                        </Link>
                      </Route>
                    </BrowserRouter>
                  </div>
                </div>
              </div>
            </Fragment>
          }
        />

        <Card
          work={
            <Fragment>
              <div className='card__04 ' data-aos='flip-left' data-aos-delay='100'>
                <div className='box'>
                  <div className='icon'>04</div>
                  <div className='contentText'>
                    <h6>Почистване на зъбен камък</h6>
                    <p>
                      Причина за парадонтозата са зъбната плака и зъбният камък. Зъбната плака се
                      формира от хранителни остатъци – основно от тестени храни и бактерии. При
                      обменните си процеси бактериите отделят киселини, които възпаляват венците и
                      стопяват костта…
                    </p>

                    <BrowserRouter>
                      <Route>
                        <Link to='./Whitening/Whitening.jsx' target='_blank'>
                          Научи повече
                        </Link>
                      </Route>
                    </BrowserRouter>
                  </div>
                </div>
              </div>
            </Fragment>
          }
        />
        <Card
          work={
            <Fragment>
              <div className='card__05' data-aos='flip-left' data-aos-delay='100'>
                <div className='box'>
                  <div className='icon'>05</div>
                  <div className='contentText'>
                    <h6>Керамичните инлеи</h6>
                    <p>
                      Керамичните инлеи или така наречените порцеланови пломби се изработват в
                      зъботехническа лаборатория след отпечатък от подготвените зъби на пациента.
                      Залепват се за зъба с фотополимер или композитен цимент. Основните фактори за
                      успеха на лечението са …
                    </p>

                    <BrowserRouter>
                      <Route>
                        <Link to='./PorcelainFillings/PorcelainFillings.jsx' target='_blank'>
                          Научи повече
                        </Link>
                      </Route>
                    </BrowserRouter>
                  </div>
                </div>
              </div>
            </Fragment>
          }
        />

        <Card
          title={
            <Fragment>
              <div className='card__06' data-aos='flip-left' data-aos-delay='100'>
                <div className='box'>
                  <div className='icon'>06</div>
                  <div className='contentText'>
                    <h6>Лечение на венци</h6>
                    <p>
                      Причина за зъбните рецесии са неправилното, травматично четкане на зъбите,
                      неправилно подредени зъби или недобре направени корони и пломби.Лечението се
                      състои в почистване на кореновата повърхност, отстраняване и коригиране на
                      пломбите или короните, …
                    </p>

                    <BrowserRouter>
                      <Route>
                        <Link to='./GumTreatment/ЛечениеВенец.jsx' target='_blank'>
                          Научи повече
                        </Link>
                      </Route>
                    </BrowserRouter>
                  </div>
                </div>
              </div>
            </Fragment>
          }
        />

        <Card
          work={
            <Fragment>
              <div className='card__07' data-aos='fade-right' data-aos-delay='300'>
                <div className='box'>
                  <div className='icon'>09</div>
                  <div className='contentText'>
                    <h6>Шиниране с фибровлакно</h6>
                    <p>
                      Лечението на всеки нов пациент започва с обстоен преглед, при който се заснема
                      дигитално всеки един зъб. Снимките са с много по-голям контрост, от това което
                      се вижда с невъоражено око и дава възможност образа да бъде увеличен
                      многократно. Така се диагностицират възможно
                    </p>

                    <BrowserRouter>
                      <Route>
                        <Link to='./FiberglassSplinting/ШиниранеФибровлакно.jsx' target='_blank'>
                          Научи повече
                        </Link>
                      </Route>
                    </BrowserRouter>
                  </div>
                </div>
              </div>
            </Fragment>
          }
        />
        <Card
          work={
            <Fragment>
              <div className='card__08' data-aos='fade-right' data-aos-delay='300'>
                <div className='box'>
                  <div className='icon'>08</div>
                  <div className='contentText'>
                    <h6>Кореново лечение</h6>
                    <p>
                      Когато кариесът премине границите на емайла и дентина и засегне нерва се
                      налага кореново лечение. Лечението се извършва под местна упойка. Премахват се
                      инфектираните меки тъкани и каналите се запълват….
                    </p>

                    <BrowserRouter>
                      <Route>
                        <Link to='./RootCanalTreatment/КореновоЛечение.jsx' target='_blank'>
                          Научи повече
                        </Link>
                      </Route>
                    </BrowserRouter>
                  </div>
                </div>
              </div>
            </Fragment>
          }
        />
        {/*<Card
          work={
            <Fragment>
              <div className='card__09' data-aos='fade-right' data-aos-delay='300'>
                <div className='box'>
                  <div className='icon'>09</div>
                  <div className='contentText'>
                    <h6>Шиниране с фибровлакно</h6>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis hic vel
                      placeat, praesentium perferendis accusamus quaerat molestiae, dolorum rerum
                      dolorem quidem sunt aperiam quo architecto ipsa, dolores blanditiis tempore
                      soluta.
                    </p>

                    <a href='#'>Read More</a>
                  </div>
                </div>
              </div>
            </Fragment>
          }
        />*/}
      </div>
    </div>
  );
};

export default Services;
