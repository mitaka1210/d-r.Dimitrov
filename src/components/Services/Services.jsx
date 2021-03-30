import React, { Fragment, useEffect } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import PageService from './PageService/PageService';
import { useIntersection } from 'react-use';
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
                  <div className='icon'>05</div>
                  <div className='contentText'>
                    <h6>Dental Implants</h6>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis hic vel
                      placeat, praesentium perferendis accusamus quaerat molestiae, dolorum rerum
                      dolorem quidem sunt aperiam quo architecto ipsa, dolores blanditiis tempore
                      soluta.
                    </p>
                    <BrowserRouter>
                      <Route>
                        <Link to='./Pages/Pages.jsx' target='_blank'>
                          Read More
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
                  <div className='icon'>05</div>
                  <div className='contentText'>
                    <h6>Cosmetic Dentistry</h6>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis hic vel
                      placeat, praesentium perferendis accusamus quaerat molestiae, dolorum rerum
                      dolorem quidem sunt aperiam quo architecto ipsa, dolores blanditiis tempore
                      soluta.
                    </p>

                    <BrowserRouter>
                      <Route>
                        <Link to='./Cosmetic/Cosmetic.jsx' target='_blank'>
                          Read More
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
              <div className='card__03'>
                <div className='box'>
                  <div className='icon'>05</div>
                  <div className='contentText'>
                    <h6>Dental Care</h6>
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
        />
        <Card
          work={
            <Fragment>
              <div className='card__04 ' data-aos='flip-left' data-aos-delay='100'>
                <div className='box'>
                  <div className='icon'>05</div>
                  <div className='contentText'>
                    <h6>Teeth Whitening</h6>
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
        />
        <Card
          work={
            <Fragment>
              <div className='card__05' data-aos='flip-left' data-aos-delay='100'>
                <div className='box'>
                  <div className='icon'>05</div>
                  <div className='contentText'>
                    <h6>Dental Calculus</h6>
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
        />

        <Card
          title={
            <Fragment>
              <div className='card__06' data-aos='flip-left' data-aos-delay='100'>
                <div className='box'>
                  <div className='icon'>05</div>
                  <div className='contentText'>
                    <h6>Periondontics</h6>
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
        />

        <Card
          work={
            <Fragment>
              <div className='card__07' data-aos='fade-right' data-aos-delay='300'>
                <div className='box'>
                  <div className='icon'>02</div>
                  <div className='contentText'>
                    <h6>Clip & Braces</h6>
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
        />
        <Card
          work={
            <Fragment>
              <div className='card__08' data-aos='fade-right' data-aos-delay='300'>
                <div className='box'>
                  <div className='icon'>02</div>
                  <div className='contentText'>
                    <h6>Root Cancel</h6>
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
        />
        <Card
          work={
            <Fragment>
              <div className='card__09' data-aos='fade-right' data-aos-delay='300'>
                <div className='box'>
                  <div className='icon'>05</div>
                  <div className='contentText'>
                    <h6>Implants</h6>
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
        />
      </div>
    </div>
  );
};

export default Services;
