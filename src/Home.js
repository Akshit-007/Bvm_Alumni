import React from 'react'
import About from './About'
import News from './News'
import Event from './Event'
import Carousel from 'react-bootstrap/Carousel'
import image1 from './bg.jpg'
import image2 from './images.jpg'
import image3 from './boys.webp'
import './index.css'


function Home()
{
    return(
        <div>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
      width="100vw"
      height="600px"
    />
    <Carousel.Caption>
       <button>Be a member</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
      width="100vw"
      height="600px"
    />

    <Carousel.Caption>
    <button>Be a member</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
      width="100vw"
      height="600px"
    />

    <Carousel.Caption>
    <button>Be a member</button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<div className="newsline"><marquee>
    <ul>
        <li>News 1 </li>
        <li>News 2 </li>
        <li>News 3 </li>
    </ul>
    </marquee></div>

        <News />
        <About />
        <Event />
        </div>
    );
}
export default Home;