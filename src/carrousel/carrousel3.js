import React, { useRef, useEffect,useState } from 'react';
import { Card } from 'react-bootstrap';
import './HorizontalCarousel.css';

const movies = [
  { id: 1, imageUrl: '/onepiece.jpg', progress: 40 ,videoUrl:"https://www.youtube.com/embed/MCb13lbVGE0",description:"Episode 1 Season 1"},
  { id: 2, imageUrl: '/lnd.jpg', progress: 60 ,videoUrl:"https://www.youtube.com/embed/C3TpiZndAOo",description:"Episode 3 Season 1"},
  { id: 3, imageUrl: '/venom.jpg', progress: 50 ,videoUrl:"https://www.youtube.com/embed/F4Ygcigj0Gk",description:"47 of 97m"},
  { id: 4, imageUrl: '/dandadan.jpg', progress: 20 ,videoUrl:"https://www.youtube.com/embed/TCtxmkV2MCQ",description:"Episode 5 Season 1"},
  { id: 5, imageUrl: '/k1.jpg', progress: 70 ,videoUrl:"https://www.youtube.com/embed/AGF16szMOmo",description:"Episode 11 Season 1"},
  { id: 6, imageUrl: '/k2.jpg', progress: 10 ,videoUrl:"https://www.youtube.com/embed/BhP1eYQ5Pxk",description:"Episode 5 Season 1"},
  { id: 7, imageUrl: '/twilight.jpg', progress: 80 ,videoUrl:"https://www.youtube.com/embed/fX3jaAYgu2E",description:"91 if 121m"},
  { id: 8, imageUrl: '/nge.jpg', progress: 90 ,videoUrl:"https://www.youtube.com/embed/3bdjDmYc8J4",description:"Episode 25 Season 1"},
  { id: 9, imageUrl: '/bridgerton.jpg', progress: 70 ,videoUrl:"https://www.youtube.com/embed/AdBweWvuG68",description:"Episode 1 Season 2"},
  { id: 10, imageUrl: '/cmbyn.jpg', progress: 15 ,videoUrl:"https://www.youtube.com/embed/Lj72RYJ0zNs",description:"30 of 130m"},
  { id: 11, imageUrl: '/mg.jpg', progress: 63 ,videoUrl:"https://www.youtube.com/embed/re5veV2F7eY",description:"68 of 112 min"},
  { id: 12, imageUrl: '/gu.jpg', progress: 5 ,videoUrl:"https://www.youtube.com/embed/SOwJJPZKIys",description:"15 of 102m"},
  { id: 13, imageUrl: '/admv.jpg', progress: 86 ,videoUrl:"https://www.youtube.com/embed/F0v_CPBbHFo",description:"96 of 116m"},
  { id: 14, imageUrl: '/dahmer.jpg', progress: 50 ,videoUrl:"https://www.youtube.com/embed/Ro3iCwDUWFI",description:"Episode 2 Season 1"},
  { id: 15, imageUrl: '/menendez.jpg', progress: 30 ,videoUrl:"https://www.youtube.com/embed/ta3aqgNIkzY",description:"30 of 118m"},
  { id: 16, imageUrl: '/doc.jpg', progress: 20 ,videoUrl:"https://www.youtube.com/embed/j181O1b6N4A",description:"Episode 1 Season 1"}
];

const cloneCount = 4;

const HorizontalCarousel2 = () => {
  const carouselRef = useRef(null);
  const [hoveredMovieId, setHoveredMovieId] = useState(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = cloneCount * 150;
    }
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -800,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 800,
        behavior: 'smooth',
      });
    }
  };

  const handleMouseEnter = (movieId) => {
    setHoveredMovieId(movieId);
  };

  const handleMouseLeave = () => {
    setHoveredMovieId(null);
  };

  const moviesWithClones = [
    ...movies.slice(-cloneCount),
    ...movies,
    ...movies.slice(0, cloneCount),
  ];

  return (
    <div className="carousel-container">
    <h2>Continue Watching</h2>
    <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
    <div className="horizontal-scroll" ref={carouselRef}>
      {moviesWithClones.map((movie, index) => (
        <Card
          key={index}
          className="movie-card"
          onMouseEnter={() => handleMouseEnter(movie.id)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Show video on hover, otherwise show image */}
          {hoveredMovieId === movie.id ? (
            <iframe
              className="movie-video"
              src={`${movie.videoUrl}?autoplay=1&mute=1&loop=1&playlist=${movie.videoUrl.split('/').pop()}`}
              title={movie.title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
            />
          ) : (
            <Card.Img variant="top" src={movie.imageUrl} alt={`Movie ${movie.title}`} />
          )}

          <div className="progress-bar-container">
            <div
              className="progress-bar-background"
              style={{
                width: '100%',
                height: '3px',
                backgroundColor: '#cccccc',
                position: 'relative',
                marginTop: '5px'
              }}
            >
              <div
                className="progress-bar-fill"
                style={{
                  width: `${movie.progress}%`,
                  height: '3px',
                  backgroundColor: '#e50914',
                  position: 'absolute',
                  top: '0',
                  left: '0'
                }}
              ></div>
            </div>
          </div>

          {hoveredMovieId === movie.id && (
            <div className="movie-hover-content">
              <div className="movie-buttons-container">
                <div className="movie-content">
                  <div className="movie-title">{movie.title}</div>
                  <div className="movie-description">{movie.description}</div>
                </div>
                <div className="movie-buttons" style={{ marginBottom: '10px' }}>
                  <button style={{ marginBottom: '10px' }}><img src='/play.png' height={5} alt="Play" /></button>
                  <button style={{ marginBottom: '10px' }}><img src='/more.png' height={5} alt="More Info" /></button>
                  <button style={{ marginBottom: '10px' }}><img src='/like2.png' height={5} alt="Like" /></button>
                  <button style={{ marginBottom: '10px' }}><img src='/drop.png' height={5} alt="Dropdown" /></button>
                </div>     
              </div>
            </div>
          )}
        </Card>
      ))}
    </div>
    <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
  </div>
);
};

export default HorizontalCarousel2;
