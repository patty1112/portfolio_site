import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <h1 className='headline'>Software Engineer / Web Developer</h1>
      <p className='intro'>Hi, my name is Patrick Maes</p>
      <img src={require('./public/pers_photo.jpg')} alt='personal_photo'/>
    </div>
  );
};

export default Home;