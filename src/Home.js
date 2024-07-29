import React from 'react';
import './Home.css';
import { Carosel } from './components/Carosel';
import slides from './data/carosel_data.json';



const Home = () => {
  return (
    <div>
        <h1 className='headline'>Software Engineer / Web Developer</h1>
        <p className='intro'>Hi, my name is Patrick Maes</p>
        <div className='carosel-container'>
            <Carosel data={slides}/>
        </div>
        {/* <div className='image-row'>
            <img className='svg' src={require('./public/left_arrow.jpeg')} alt='left_arrow'/>
            <img className='pers_photo' src={require('./public/pers_photo.jpg')} alt='personal_photo'/>
            <img className='svg' src={require('./public/right_arrow.svg')} alt='right_arrow'/>
        </div> */}
    </div>
  );
};

export default Home;