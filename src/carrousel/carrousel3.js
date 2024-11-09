import React, { useRef, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './HorizontalCarousel.css';

const movies = [
  { id: 1, imageUrl: '/outerbanks.png', title: 'Outer Banks', progress: 30 },
  { id: 2, imageUrl: '/scream.jpg', title: 'Scream', progress: 60 },
  { id: 3, imageUrl: '/venom.jpg', title: 'Venom', progress: 50 },
  // Add the progress values you want for each movie
];

const cloneCount = 4;

const HorizontalCarousel2 = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      carousel.scrollLeft = cloneCount * 150;
    }
  }, []);

  const handleScroll = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft = carousel.scrollWidth - (cloneCount * 150 * 2);
      }
      if (
        carousel.scrollLeft >=
        carousel.scrollWidth - carousel.clientWidth
      ) {
        carousel.scrollLeft = cloneCount * 150;
      }
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -800,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 800,
        behavior: 'smooth'
      });
    }
  };

  const moviesWithClones = [
    ...movies.slice(-cloneCount), 
    ...movies,
    ...movies.slice(0, cloneCount) 
  ];

  return (
    <div className="carousel-container">
      <h2>New on Netflix</h2>
      <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
      <div
        className="horizontal-scroll"
        ref={carouselRef}
        onScroll={handleScroll}
      >
        {moviesWithClones.map((movie, index) => (
          <div key={index} className="movie-card-container">
            <Card className="movie-card">
              <Card.Img variant="top" src={movie.imageUrl} alt={`Movie ${movie.title}`} />
            </Card>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${movie.progress}%` }}></div>
            </div>
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
    </div>
  );
};

export default HorizontalCarousel2;
