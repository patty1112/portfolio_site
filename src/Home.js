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
    </div>
  );
};

export default Home;