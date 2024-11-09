import React, { useRef, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './HorizontalCarousel.css';

const movies = [
  { id: 1, imageUrl: '/onepiece.jpg', progress: 40 },
  { id: 2, imageUrl: '/lnd.jpg', progress: 60 },
  { id: 3, imageUrl: '/venom.jpg', progress: 50 },
  { id: 4, imageUrl: '/dandadan.jpg', progress: 20 },
  { id: 5, imageUrl: '/k1.jpg', progress: 70 },
  { id: 6, imageUrl: '/k2.jpg', progress: 10 },
  { id: 7, imageUrl: '/twilight.jpg', progress: 40 },
  { id: 8, imageUrl: '/nge.jpg', progress: 90 },
  { id: 9, imageUrl: '/bridgerton.jpg', progress: 70 },
  { id: 10, imageUrl: '/cmbyn.jpg', progress: 15 },
  { id: 11, imageUrl: '/mg.jpg', progress: 63 },
  { id: 12, imageUrl: '/gu.jpg', progress: 5 },
  { id: 13, imageUrl: '/admv.jpg', progress: 86 },
  { id: 14, imageUrl: '/dahmer.jpg', progress: 50 },
  { id: 15, imageUrl: '/menendez.jpg', progress: 30 },
  { id: 16, imageUrl: '/doc.jpg', progress: 20 }
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
            <div
                className="progress"
                style={{
                        width: `${movie.progress}%`,
                        height: '3px',  
                        backgroundColor: '#e50914' ,
                        marginTop:'10px'
                }}
            ></div>
            </div>
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
    </div>
  );
};

export default HorizontalCarousel2;
