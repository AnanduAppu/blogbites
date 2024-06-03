import React, { useEffect, useState,useRef } from 'react'
import { gsap } from 'gsap';

function Imgslide() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const imageRefs = useRef([]);
    const images = [
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg'
    ];

    const slideCount = images.length;

    const nextSlide = () => {
        const nextIndex = (currentIndex + 1) % slideCount;
        gsap.fromTo(imageRefs.current[nextIndex], { opacity: 0 }, { opacity: 1, duration: 2, ease: 'power2.inOut' });
        setCurrentIndex(nextIndex);
    };

    const prevSlide = () => {
        const prevIndex = (currentIndex - 1 + slideCount) % slideCount;
        gsap.fromTo(imageRefs.current[prevIndex], { opacity: 0 }, { opacity: 1, duration: 2, ease: 'power2.inOut' });
        setCurrentIndex(prevIndex);
    };

    const goToSlide = (index) => {
        gsap.fromTo(imageRefs.current[index], { opacity: 0 }, { opacity: 1, duration: 2, ease: 'power2.inOut' });
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, [currentIndex]);


  return (
            <div className="relative w-full" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                            currentIndex === index ? 'block' : 'hidden'
                        }`}
                        data-carousel-item
                    >
                        <img
                            ref={(el) => (imageRefs.current[index] = el)}
                            src={src}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>

            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${
                            currentIndex === index ? 'bg-gray-800' : 'bg-white'
                        }`}
                        aria-current={currentIndex === index}
                        aria-label={`Slide ${index + 1}`}
                        data-carousel-slide-to={index}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>

            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
                onClick={prevSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
                onClick={nextSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
  )
}

export default Imgslide