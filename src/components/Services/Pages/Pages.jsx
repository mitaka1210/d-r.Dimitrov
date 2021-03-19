import React from 'react';
import PageService from '../PageService/PageService';
import img2 from '../../../assets/images/img-3.jpg';
import './pages.scss';

const Pages = () => {
  return (
    <>
      <PageService
        title='Hello'
        text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio dolorum, qui natus libero fugit est veniam soluta itaque consectetur voluptates aliquam possimus ipsum ex perferendis cumque repellendus nesciunt veritatis ut.
        
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio dolorum, qui natus libero fugit est veniam soluta itaque consectetur voluptates aliquam possimus ipsum ex perferendis cumque repellendus nesciunt veritatis ut.
        
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio dolorum, qui natus libero fugit est veniam soluta itaque consectetur voluptates aliquam possimus ipsum ex perferendis cumque repellendus nesciunt veritatis ut.'
        img={img2}
        alt='main-img'
      />
    </>
  );
};

export default Pages;
