"use client";
import React, { useState, useEffect } from 'react';
import slider1 from '/public/logo/banner1.png';
import slider2 from '/public/logo/banner2.png';
import slider3 from '/public/logo/banner3.png';
import Image from 'next/image';

type ImageType = {
    id: number;
    image: string;
};

const images: ImageType[] = [
    {
        id: 1,
        image: slider1.src,
    },
    {
        id: 2,
        image: slider2.src,
    },
    {
        id: 3,
        image: slider3.src,
    },
];

const Slider = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length); // Loop through images
        }, 2000); // Change image every 2 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    // Handle dot click navigation
    const handleDotClick = (index: number) => {
        setCurrentImage(index);
    };

    return (
        <div className="relative overflow-hidden">
            <div className="transition-all duration-1000">
                <Image
                    src={images[currentImage].image}
                    width={1000}
                    height={500}
                    alt={`Image ${images[currentImage].id}`}
                    className='md:h-[430px]'
                />
            </div>
            
            {/* Dot navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-4 h-4 rounded-full bg-black ${
                            currentImage === index ? 'bg-gray-800' : 'bg-opacity-50'
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Slider;
