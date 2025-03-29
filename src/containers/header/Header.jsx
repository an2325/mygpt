import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h2 className="gradient__text">Welcome to the Future of Technology: Artificial Intelligence (AI)</h2>
      <p> Artificial Intelligence (AI) is revolutionizing industries across the globe, shaping how businesses operate,improving customer experiences, and enabling groundbreaking innovations. At the forefront of technological advancement, AI is more than just a buzzword—it is transforming our world in real-time. Whether it is in healthcare, education, or daily life, AI is enhancing human potential and creating new possibilities.</p>
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
