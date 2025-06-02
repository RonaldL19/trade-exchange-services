import React, { useState } from 'react';
import '../styles/Carousel.css';

const Carousel = () => {
    const slides = [
        { id: 1, image: 'https://d2yoo3qu6vrk5d.cloudfront.net/pulzo-lite/images-resized/PP4558290-h-b.webp', alt: 'Imagen de carrusel 1' },
        { id: 2, image: 'https://d2yoo3qu6vrk5d.cloudfront.net/pulzo-lite/images-resized/PP4556151-h-b.webp', alt: 'Imagen de carrusel 2' },
        { id: 3, image: 'https://d2yoo3qu6vrk5d.cloudfront.net/pulzo-lite/images-resized/PP4559118-h-b.webp', alt: 'Imagen de carrusel 3' },
        { id: 3, image: 'https://d2yoo3qu6vrk5d.cloudfront.net/pulzo-lite/images-resized/PP4558611-h-b.webp', alt: 'Imagen de carrusel 3' }
    ];

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="coverflow-carousel">
            <div className="nav nav-button-left" onClick={prevSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="25" viewBox="0 0 15 25" fill="none">
                    <path d="M14.25 20.75L6 12.5L14.25 4.25C15.25 3.25 15.25 1.75 14.25 0.75C13.25 -0.25 11.75 -0.25 10.75 0.75L0.75 10.75C-0.25 11.75 -0.25 13.25 0.75 14.25L10.75 24.25C11.25 24.75 11.75 25 12.5 25C13.25 25 13.75 24.75 14.25 24.25C15.25 23.25 15.25 21.75 14.25 20.75Z" fill="#979797" />
                </svg>
            </div>

            <div className="carousel-track">
                {slides.map((slide, index) => {
                    let position = 'hidden';
                    if (index === current) {
                        position = 'active';
                    } else if (index === (current - 1 + slides.length) % slides.length) {
                        position = 'left';
                    } else if (index === (current + 1) % slides.length) {
                        position = 'right';
                    }

                    return (
                        <img
                            key={slide.id}
                            src={slide.image}
                            alt={slide.alt}
                            className={`slide ${position}`}
                        />
                    );
                })}
            </div>

            <div className="nav nav-button-right" onClick={nextSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="25" viewBox="0 0 15 25" fill="none">
                    <path d="M0.749998 4.25L9 12.5L0.749998 20.75C-0.250002 21.75 -0.250002 23.25 0.749998 24.25C1.75 25.25 3.25 25.25 4.25 24.25L14.25 14.25C15.25 13.25 15.25 11.75 14.25 10.75L4.25 0.749998C3.75 0.249998 3.25 0 2.5 0C1.75 0 1.25 0.249998 0.749998 0.749998C-0.250002 1.75 -0.250002 3.25 0.749998 4.25Z" fill="#979797" />
                </svg>
            </div>

            <div className="carousel-dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${current === index ? 'active' : ''}`}
                        onClick={() => setCurrent(index)}
                    ></span>
                ))}
            </div>
        </div>

    );
};

export default Carousel;
