import React from 'react';
import MainSlider from '../components/Slider/MainSlider';
import WhoIam from '../components/WhoIam/WhoIam';
import Services from '../components/Services/Services';
import Testimonial from '../components/TestimonialSlider/Testimonial.jsx';
import Footer from '../components/Footer/Footer';
const Home = () => {
  return (
    <>
      <MainSlider />
      <WhoIam />
      <Services />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
