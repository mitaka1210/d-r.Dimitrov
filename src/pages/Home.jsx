import React from 'react';
//?COMPONENTS
import MainSlider from '../components/Slider/MainSlider';
import WhoIam from '../components/WhoIam/WhoIam';

import Footer from '../components/Footer/Footer';
import SaveWork from '../components/COVID/SaveWorkInCOVID/SaveWork.jsx';

const Home = () => {
  return (
    <>
      <MainSlider />
      <WhoIam />

      <SaveWork />
      {/*<Testimonial />*/}
      <Footer />
    </>
  );
};

export default Home;
