import React from 'react';
//? COMPONENTS
import Footer from '../Footer/Footer';
//? ASSETS
import img1 from '../../assets/images/img-2.jpg';
//? STYLES
import './about.scss';
const AboutContent = () => {
    return (
        <section>
      <br />
      <hr />
      <main>
        <div className='content__About'>
          <div className='wrapper__Abut'>
            <h1>Д-р Димитров</h1>
            <div className='img__About'>
              <img src={img1} alt='about images' />
            </div>
            <div className='text__About'>
              <p className='first__Ele'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum ratione
                voluptates, autem ea, repellat explicabo totam voluptatum nam optio esse repudiandae
                repellendus ducimus minus amet similique vel, voluptatem assumenda? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Laboriosam eum ratione voluptates,
                autem ea, repellat explicabo totam voluptatum nam optio esse repudiandae repellendus
                ducimus minus amet similique vel, voluptatem assumenda? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Laboriosam eum ratione voluptates, autem ea, repellat
                explicabo totam voluptatum nam optio esse repudiandae repellendus ducimus minus amet
                similique vel, voluptatem assumenda? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Laboriosam eum ratione voluptates, autem ea, repellat explicabo
                totam voluptatum nam optio esse repudiandae repellendus ducimus minus amet similique
                vel, voluptatem assumenda? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className='second__Ele'>
                Laboriosam eum ratione voluptates, autem ea, repellat explicabo totam voluptatum nam
                optio esse repudiandae repellendus ducimus minus amet similique vel, voluptatem
                assumenda? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum
                ratione voluptates, autem ea, repellat explicabo totam voluptatum nam optio esse
                repudiandae repellendus ducimus minus amet similique vel, voluptatem assumenda?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum ratione
                voluptates, autem ea, repellat explicabo totam voluptatum nam optio esse repudiandae
                repellendus ducimus minus amet similique vel, voluptatem assumenda? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Laboriosam eum ratione voluptates,
                autem ea, repellat explicabo totam voluptatum nam optio esse repudiandae repellendus
                ducimus minus amet similique vel, voluptatem assumenda?
              </p>
            </div>
          </div>
        </div>
      </main>
    
      <Footer />
    </section>
    );
};

export default AboutContent;