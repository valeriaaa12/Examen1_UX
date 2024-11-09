import React, { useRef, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './HorizontalCarousel.css';

const movies = [
  { id: 1, imageUrl: '/outerbanks.png', title: 'Outer Banks' },
  { id: 2, imageUrl: '/scream.jpg', title: 'Scream' },
  { id: 3, imageUrl: '/venom.jpg', title: 'Venom' },
  { id: 4, imageUrl: '/dandadan.jpg', title: 'Dandadan' },
  { id: 5, imageUrl: '/tbah.jpg', title: 'TBH' },
  { id: 6, imageUrl: '/monsters.jpg', title: 'Monsters' },
  { id: 7, imageUrl: '/Love-Is-Blind-Season-7.png', title: 'Love is Blind' },
  { id: 8, imageUrl: '/ab2.jpg', title: 'AB2' },
  { id: 9, imageUrl: '/jwd.jpg', title: 'JWD' },
  { id: 10, imageUrl: '/naruto.jpg', title: 'Naruto' },
  { id: 11, imageUrl: '/dgd.jpg', title: 'Dragon Ball' },
  { id: 12, imageUrl: '/minions.jpg', title: 'Minions' },
  { id: 13, imageUrl: '/ron.jpg', title: 'Ready or not' },
  { id: 14, imageUrl: '/cobra.jpg', title: 'Cobra Kai' },
  { id: 15, imageUrl: '/paul.jpg', title: 'Paul vs Tyson' },
  { id: 16, imageUrl: '/dnd.jpg', title: 'dungeons and dragons' },

];

const cloneCount = 4;

const HorizontalCarousel = () => {
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
          <Card key={index} className="movie-card">
            <Card.Img variant="top" src={movie.imageUrl} alt={`Movie ${movie.title}`} />
          </Card>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
    </div>
  );
};

export default HorizontalCarousel;

