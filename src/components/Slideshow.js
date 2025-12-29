import React, { useState } from 'react';
import './Slideshow.css';

const Slideshow = ({ images = [] }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div className="slideshow-container">
            <div className="slideshow-wrapper">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                    >
                        <img src={img.src} alt={img.alt || `Slide ${index + 1}`} />
                        {img.caption && <p className="caption">{img.caption}</p>}
                    </div>
                ))}
            </div>

            <button className="prev" onClick={prevSlide}>
                &#10094;
            </button>
            <button className="next" onClick={nextSlide}>
                &#10095;
            </button>

            <div className="dots-container">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;
