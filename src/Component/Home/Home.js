import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import HomeButton from './HomeButton';
import './Home.css';

export default function Home() {
  return (
    <div className='text-4xl text-white h-screen overflow-hidden'>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={2000}
        centerMode={false}
        showArrows={false}
      >
        <div className='home-image1 home-image flex flex-col justify-center px-24'>
          <h3 className='leading-snug'>
            Start your <strong>bucket list </strong> <br /> to live your best
            life
          </h3>
          <HomeButton />
        </div>
        <div className='home-image2 home-image flex flex-col justify-center px-24'>
          <h3 className='leading-snug'>
            Add only what is <br /> important <br /> to you no matter how big or
            <br /> small.
          </h3>
          <HomeButton />
        </div>
        <div className='home-image3 home-image flex flex-col justify-center px-24'>
          <h3 className='leading-snug'>
            Record the <strong> experience of </strong> <br /> your
            <strong> life</strong>
            <br /> Tell your story
          </h3>
          <HomeButton />
        </div>
      </Carousel>
    </div>
  );
}
