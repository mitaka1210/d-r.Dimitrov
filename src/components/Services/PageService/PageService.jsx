import React from 'react';
//?COMPONENTS
import Footer from '../../Footer/Footer';
const PageService = ({ title, text, img, alt }) => {
  return (
    <section>
      <div className='content__Services'>
        <h2>{title}</h2>
        <div className='wrapper__Services'>
          <div className='images__Right'>
            <img src={img} alt={alt} />
          </div>

          <div className='text__Left'>
            <p>{text}</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default PageService;
