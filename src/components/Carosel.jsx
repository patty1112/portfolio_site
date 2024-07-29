import React, {useState} from 'react';
import './Carosel.css';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
export const Carosel = ({data}) => {
        const [slide, setSlide] = useState(0);

        const nextSlide = () => {
            setSlide(slide === data.slides.length - 1 ? 0 : slide + 1);
        }
        const prevSlide = () => {
            setSlide(slide === 0 ? data.slides.length - 1 : slide - 1);
        }
    return (
        <div className='carosel'>
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
            {data.slides.map((item, idx) => {
            return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide slide-hidden"}/>
        })}
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
            <span className='indicators'>
                {data.slides.map((_, idx) => {
                    return (
                        <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "dot" : "dot dot-inactive"}></button>
                    );
                })}
            </span>
        </div>
    );
};