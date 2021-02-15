import React from 'react';

const PageService = ({ title, text }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className='wrapperSC'>
        {/*<img src={} alt='' />*/}
        <p>{text}</p>
      </div>
    </div>
  );
};

export default PageService;
