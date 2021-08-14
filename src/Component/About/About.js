import React from 'react';
import './About.css';

export default function About() {
  return (
    <div>
      <div className='about bg-red-700'>
        <h1 className='text-8xl text-center font-lighter pt-16 leading-8 text-white '>
          About us
        </h1>
        <ul className='p-12 text-lg w-11/12 italic m-auto text-white font-medium list-disc'>
          <li className='p-3'>
            Buckil is fantastic! While Buckil is “the home of your bucket list?
            It isn't just for the ‘dreamers’, Buckil is the ultimate tool for
            you to document the experiences of your lifetime.
          </li>
          <li className='p-3'>
            Where else do you record and share your most precious life
            experiences? While other social media is about striking the perfect
            pose or selecting just the right filter to best show off your
            breakfast, Buckil is different, it is for the important stuff, your
            life’s most valued experiences!
          </li>
          <li className='p-3'>
            At Buckil, you the user, will build and later instantly update your
            own personal bucket list. You will document your favourite
            experiences to date, including when, where and with whom. You will
            upload your photos and videos to show off what you've achieved and
            you will take pride in the powerful resource that you’ve built. In
            addition, you will set goals for the future where you will outline
            the valued experiences you still expect to come before you
            eventually, one day, “kick the bucket?.
          </li>
          <li className='p-3'>
            In the end, what is it that you will create? Nothing less than...
            the story of your lifetime! The life that you lived, the experiences
            that you valued, the people who were there and your very own
            thoughts at the time.
          </li>
          <li className='p-3'>
            The Buckil website and app are still in their infancy, the planned
            features promise to impress. In the future Vosper will look to forge
            relationships with a variety of external stakeholders. Watch this
            space!
          </li>
          <li className='p-3 pb-0'>
            Life is about experiences and Buckil is for the experiences of a
            lifetime!
          </li>
        </ul>
      </div>
    </div>
  );
}
