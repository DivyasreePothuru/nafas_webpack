// https://www.kindacode.com/article/react-how-to-create-an-image-carousel-from-scratch/


import React from "react";
import { useState } from 'react';

import "./Slider.css";

// this array holds the data for the carousel
const photos = [
  {
    id: 'p1',
    title: 'Photo One',
    url: 'images/slider 1.jpg',
  },
  {
    id: 'p2',
    title: 'Photo Two',
    url: 'images/slider 2.jpg',
  },
  {
    id: 'p3',
    title: 'Photo Three',
    url: 'images/slider 3.jpg',
  },
  {
    id: 'p4',
    title: 'Photo Four',
    url: 'images/slider 4.jpg',
  },
  {
    id: 'p5',
    title: 'Photo',
    url: 'images/slider 5.jpg',
  },
  {
    id: 'p6',
    title: 'Photo',
    url: 'images/slider 6.jpg',
  },
  {
    id: 'p7',
    title: 'Photo',
    url: 'images/slider 7.jpg',
  }
];


export default function Slider() {

  // show the photo with this index
  const [currentIndex, setCurrentIndex] = useState(0);

  // move to the next photo
  // if we are at the end, go to the first photo
  const next = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  // move to the previous photo
  // if we are at the beginning, go to the last photo
  const prev = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };


  return (
    <>
      {/* Render the carousel/slider */}
      <div className='slider-container'>
        {photos.map((photo) => (
          <div
            key={photo.id}

            // if the photo is the current photo, show it
            className={
              photos[currentIndex].id === photo.id ? 'fade' : 'slide fade'
            }
          >
            <img src={photo.url} alt={photo.title} className='photo' />
            <div className='caption'>{photo.title}</div>
            <div className="shade"></div>
            {/* {console.log(photo.url)}; */}
          </div>
        ))}

        {/* Previous button */}
        <button onClick={prev} className='prev'>
          &lt;
        </button>

        {/* Next button */}
        <button onClick={next} className='next'>
          &gt;
        </button>
      </div>

      {/* Render dots indicator */}
      <div className='dots'>
        {photos.map((photo) => (
          <span
            key={photo.id}
            // highlight the dot that corresponds to the current photo
            className={
              photos[currentIndex].id === photo.id ? 'dot active' : 'dot'
            }
            // when the user clicks on a dot, go to the corresponding photo
            onClick={() => setCurrentIndex(photos.indexOf(photo))}
          ></span>
        ))}
      </div>
    </>
  );
}
