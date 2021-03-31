import React from 'react';
//?COMPONENTS
import Footer from '../../Footer/Footer';
const TemplateCosmetics = ({
  title,
  text,
  img,
  alt,
  titleSecond,
  imgSecond,
  altSecond,
  textSecond,
  textThird,
  textThird2,
  imgThird,
  altThird,
  titleThird,
  imgFourth,
}) => {
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

      <div className='content__Services'>
        <div className='content__Second'>
          <h2>{titleSecond}</h2>
          <div className='wrapper__Services'>
            <div className='images__Right'>
              <img src={imgSecond} alt={altSecond} />
            </div>

            <div className='text__Left'>
              <p>{textSecond}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='content__Services'>
        <div className='content__Three'>
          <h2>{titleThird}</h2>
          <div className='wrapper__Services'>
            <div className='images__Right'>
              <img src={imgThird} alt={altThird} />
            </div>

            <div className='text__Left'>
              <ol className='cosmetic__component'>
                <li>{textThird}</li>
                <li>{textThird2}</li>
              </ol>
              <img className='last__img' src={imgFourth} alt={imgFourth} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default TemplateCosmetics;
