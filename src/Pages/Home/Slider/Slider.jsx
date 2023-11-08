import React, { useState, useEffect } from 'react';

const Slider = () => {
  const slides = [
    {
      image: 'https://i.ibb.co/pXd89nm/tool-white.jpg',
      text: 'Slide 1 Text',
    },
    {
      image: 'https://i.ibb.co/ZJY412T/tool-3.png',
      text: 'Slide 2 Text',
    },
    {
      image: 'https://i.ibb.co/F3JW93C/tool-black.jpg',
      text: 'Slide 3 Text',
    },
    {
      image: 'https://i.ibb.co/xMG8mzG/tool-1.png',
      text: 'Slide 4 Text',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((activeSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((activeSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slides every 5 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, [activeSlide, slides]);

  return (
    <div>
      <div className="carousel w-full h-[600px] relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item w-full absolute ${
              activeSlide === index ? 'opacity-100 h-[600px] ' : 'opacity-0 h-[600px] '
            } transition-opacity`}
          >
            <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              <button
                className="prev-arrow absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-2xl z-10 bg-blue-500 text-white p-2 rounded"
                onClick={prevSlide}
              >
                &lt;
              </button>
              <button
                className="next-arrow absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-2xl z-10 bg-blue-500 text-white p-2 rounded"
                onClick={nextSlide}
              >
                &gt;
              </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
