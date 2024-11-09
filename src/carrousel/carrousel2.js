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

const newMovies = [
    { id: 1, imageUrl: '/doc2.jpg' },
    { id: 2, imageUrl: '/doc3.jpg' },
    { id: 3, imageUrl: '/t2.jpg'},
    { id: 4, imageUrl: '/t3.jpg' },
    { id: 5, imageUrl: '/pb.jpg' },
    { id: 6, imageUrl: '/arc.jpg'},  
    { id: 7, imageUrl: '/qb.jpg' },
    { id: 8, imageUrl: '/p1.jpg' },
    { id: 9, imageUrl: '/kk.jpg'},
    { id: 10, imageUrl: '/sk.jpg' },
    { id: 11, imageUrl: '/k4.jpg' },
    { id: 12, imageUrl: '/sing.jpg'},
  ];

  const newMovies2 = [
    { id: 1, imageUrl: '/k8.jpg' },
    { id: 2, imageUrl: '/k2.jpg' },
    { id: 3, imageUrl: '/k5.jpg'},
    { id: 4, imageUrl: '/k6.jpg' },
    { id: 5, imageUrl: '/k7.jpg' },
    { id: 6, imageUrl: '/k1.jpg'},  
    { id: 7, imageUrl: '/k3.jpg' },
    { id: 8, imageUrl: '/k9.jpg' },
    { id: 9, imageUrl: '/lnd.jpg'},
    { id: 10, imageUrl: '/k10.jpg' },
    { id: 11, imageUrl: '/k4.jpg' },
    { id: 12, imageUrl: '/k11.jpg'},
  ];

  const anime =[
    { id: 1, imageUrl: '/dandadan2.png' },
    { id: 2, imageUrl: '/deathnote.png' },
    { id: 3, imageUrl: '/demonslayer2.png'},
    { id: 4, imageUrl: '/fanletter2.png' },
    { id: 5, imageUrl: '/haikyuu.png' },
    { id: 6, imageUrl: '/hxh.png'},  
    { id: 7, imageUrl: '/jjk.png' },
    { id: 8, imageUrl: '/jojo.png' },
    { id: 9, imageUrl: '/mob.png'},
    { id: 10, imageUrl: '/overlord.png' },
    { id: 11, imageUrl: '/ranma.png' },
    { id: 12, imageUrl: '/spy.png'},
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
const HorizontalCarouselNew = () => {
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
  
    const newMoviesWithClones = [
      ...newMovies.slice(-cloneCount),
      ...newMovies,
      ...newMovies.slice(0, cloneCount)
    ];
  
    return (
      <div className="carousel-container">
        <h2>Top Picks For You</h2>
        <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
        <div
          className="horizontal-scroll"
          ref={carouselRef}
          onScroll={handleScroll}
        >
          {newMoviesWithClones.map((movie, index) => (
            <Card key={index} className="movie-card">
              <Card.Img variant="top" src={movie.imageUrl} />
            </Card>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
      </div>
    );
  };
  const HorizontalCarouselNew2 = () => {
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
  
    const newMoviesWithClones = [
      ...newMovies2.slice(-cloneCount),
      ...newMovies2,
      ...newMovies2.slice(0, cloneCount)
    ];
  
    return (
      <div className="carousel-container">
        <h2>Made in Korea</h2>
        <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
        <div
          className="horizontal-scroll"
          ref={carouselRef}
          onScroll={handleScroll}
        >
          {newMoviesWithClones.map((movie, index) => (
            <Card key={index} className="movie-card">
              <Card.Img variant="top" src={movie.imageUrl} />
            </Card>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
      </div>
    );
  };

  const AnimeCarrousel = () => {
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
  
    const newMoviesWithClones = [
      ...anime.slice(-cloneCount),
      ...anime,
      ...anime.slice(0, cloneCount)
    ];
  
    return (
      <div className="carousel-container">
        <h2>Japanese Anime</h2>
        <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
        <div
          className="horizontal-scroll"
          ref={carouselRef}
          onScroll={handleScroll}
        >
          {newMoviesWithClones.map((movie, index) => (
            <Card key={index} className="movie-card">
              <Card.Img variant="top" src={movie.imageUrl} />
            </Card>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
      </div>
    );
  };
  export { HorizontalCarousel, HorizontalCarouselNew ,HorizontalCarouselNew2, AnimeCarrousel};

