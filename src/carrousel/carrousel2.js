import React, { useRef, useEffect,useState } from 'react';
import { Card } from 'react-bootstrap';
import './HorizontalCarousel.css';

const movies = [
  { id: 1, imageUrl: '/outerbanks.png', title: 'Outer Banks' ,videoUrl:"https://www.youtube.com/embed/uk_hFfUFXh4",description:"|+16 |    4 Seasons \n Thriller • Exciting • Adventure"},
  { id: 2, imageUrl: '/scream.jpg', title: 'Scream',videoUrl:"https://www.youtube.com/embed/h74AXqw4Opc" ,description:"|+16 |    2 h 3 min \n Gruesome • Scary • Teen"},
  { id: 3, imageUrl: '/venom.jpg', title: 'Venom',videoUrl:"https://www.youtube.com/embed/F4Ygcigj0Gk",description:"|+13 |    1 h 37 min \n Adrenaline Rush • Slick • Alien Sci Fi" },
  { id: 4, imageUrl: '/dandadan.jpg', title: 'Dandadan',videoUrl:"https://www.youtube.com/embed/TCtxmkV2MCQ",description:"|+16 |    6 Episodes \n Offbeat • Irreverent • Horror Anime" },
  { id: 5, imageUrl: '/tbah.jpg', title: 'The Boy and the Heron',videoUrl:"https://www.youtube.com/embed/yncJ5HKs93o",description:"|+13 |    2 h 4 min \n Imaginative • Heartfelt • Parallel World" },
  { id: 6, imageUrl: '/monsters.jpg', title: 'Monsters',videoUrl:"https://www.youtube.com/embed/hkLYf2f1LUw" ,description:"|+18 |    9 Episodes \n Thriller • Psychological • Dark"},
  { id: 7, imageUrl: '/Love-Is-Blind-Season-7.png', title: 'Love is Blind',videoUrl:"//www.youtube.com/embed/KTKV-RKC7LE",description:"|+16 |    7 Seasons \n Romantic • Reality TV • Competition" },
  { id: 8, imageUrl: '/ab2.jpg', title: 'Angry Birds Summer Madness',videoUrl:"https://www.youtube.com/embed/It3ds82O3xo" ,description:"|+7 |    3 Seasons \n Irreverent • Goofy • Kids" },
  { id: 9, imageUrl: '/jwd.jpg', title: 'Jurassic World Dominion',videoUrl:"https://www.youtube.com/embed/9m9yRauMJIQ"  ,description:"|+13 |    2 h 27 min \n Adrenaline Rush • Imaginative • Sci Fi Adventure"},
  { id: 10, imageUrl: '/naruto.jpg', title: 'Naruto Shippuden' ,videoUrl:"https://www.youtube.com/embed/22R0j8UKRzY" ,description:"|+13 |    9 Seasons \n Goofy • Exciting • Action Anime"},
  { id: 11, imageUrl: '/dgd.jpg', title: 'Dragon Ball Daima' ,videoUrl:"https://www.youtube.com/embed/_f8aqbnda3E" ,description:"|+10 |    5 Episodes \n Imaginative • Exciting • Action Anime"},
  { id: 12, imageUrl: '/minions.jpg', title: 'Minions: The Rise of Gru' ,videoUrl:"//www.youtube.com/embed/EgXQmSW16YY" ,description:"|+7 |    1 h 30 min \n Feel-Good • Goofy • Kids"},
  { id: 13, imageUrl: '/ron.jpg', title: 'Ready or not',videoUrl:"https://www.youtube.com/embed/ZtYTwUxhAoI",description:"|+16 |    1 h 30 min \n Offbeat • Violent • Horror Comedy"},
  { id: 14, imageUrl: '/cobra.jpg', title: 'Cobra Kai' ,videoUrl:"https://www.youtube.com/embed/CfOuYm8EnBA",description:"|+13 |    6 Seasons \n Nostalgic • Rousing • Action " },
  { id: 15, imageUrl: '/paul.jpg', title: 'Paul vs Tyson' ,videoUrl:"https://www.youtube.com/embed/A9FeEm6wLXk",description:"|+16 |    2 h 40 min \n Rousing • Exciting • Sports Event "},
  { id: 16, imageUrl: '/dnd.jpg', title: 'Dungeons and Dragons' ,videoUrl:"https://www.youtube.com/embed/IiMinixSXII",description:"|+13 |    2 h 15 min \n Imaginative • Irreverent • Epic World"},

];

const newMovies = [
    { id: 1, imageUrl: '/doc2.jpg' ,title: 'Surviving Paradise : A Family Tale' ,videoUrl:"https://www.youtube.com/embed/80yPDHB-YJY",description:"|+7 |    1 h 19 min \n Captivating • Dcumentary • Doing Green"},
    { id: 2, imageUrl: '/doc3.jpg',title: 'Predators' ,videoUrl:"https://www.youtube.com/embed/IppeDxHHf-o",description:"|+10 |    5 Episodes \n Captivating • Docuseries • Visually Striking" },
    { id: 3, imageUrl: '/t2.jpg',title: 'Twilight: New Moon' ,videoUrl:"https://www.youtube.com/embed/q58iQSHhZGg",description:"|+13 |   2 h 10 min \n Ominous • Suspenseful • Fantasy Movie"},
    { id: 4, imageUrl: '/t3.jpg' ,title: 'Twilight: Breaking Dawn Part 2' ,videoUrl:"https://www.youtube.com/embed/Ocz50YJOFTM",description:"|+13 |    1 h 55 min \n Ominous • Suspenseful • Fantasy Movie"},
    { id: 5, imageUrl: '/pb.jpg' ,title: 'Peaky Blinders' ,videoUrl:"https://www.youtube.com/embed/oVzVdvGIC7U",description:"|+16 |    6 Seasons \n Violent • Period Piece • Notable Soundtrack"},
    { id: 6, imageUrl: '/arc.jpg',title: 'Arcane' ,videoUrl:"https://www.youtube.com/embed/fXmAurh012s",description:"|+16 |    2 Seasons \n Slick • Gritty • Adventure"},  
    { id: 7, imageUrl: '/qb.jpg' ,title: 'The Queens Gambit' ,videoUrl:"https://www.youtube.com/embed/oZn3qSgmLqI",description:"|+16 |    Limited Series \n Cerebral • Intimate • Drama"},
    { id: 8, imageUrl: '/p1.jpg' ,title: 'Dont Move' ,videoUrl:"https://www.youtube.com/embed/YjTZMEbpKsc",description:"|+16 |    1 h 32 min \n Thriller • Dark • Ominous"},
    { id: 9, imageUrl: '/kk.jpg',title: 'Kakegurui' ,videoUrl:"https://www.youtube.com/embed/cTlHQiRNVl0",description:"|+13 |    2 Seasons \n Psychological • Exciting • Drama Anime"},
    { id: 10, imageUrl: '/sk.jpg' ,title: 'The Disastrous Life of Saiki K' ,videoUrl:"https://www.youtube.com/embed/sbw7QB6nrTc",description:"|+13 |    3 Seasons \n Deadpan • Absurd • Offbeat"},
    { id: 11, imageUrl: '/k4.jpg' ,title: 'Queen of Tears' ,videoUrl:"https://www.youtube.com/embed/Gg2D8zrzlOA",description:"|+13 |    16 Episodes \n Swoonworthy • Romantic • Comedy"},
    { id: 12, imageUrl: '/sing.jpg',title: 'Sing' ,videoUrl:"https://www.youtube.com/embed/9qPgK_u4vX8",description:"|ALL|    1 h 48 min \n Rousing • Goofy • Musical"},
  ];

  const newMovies2 = [
    { id: 1, imageUrl: '/k8.jpg' ,title: 'Outer Banks' ,videoUrl:"https://www.youtube.com/embed/uk_hFfUFXh4",description:"|+16 |    4 Seasons \n Thriller • Exciting • Adventure"},
    { id: 2, imageUrl: '/k2.jpg' ,title: 'Outer Banks' ,videoUrl:"https://www.youtube.com/embed/uk_hFfUFXh4",description:"|+16 |    4 Seasons \n Thriller • Exciting • Adventure"},
    { id: 3, imageUrl: '/k5.jpg',title: 'Outer Banks' ,videoUrl:"https://www.youtube.com/embed/uk_hFfUFXh4",description:"|+16 |    4 Seasons \n Thriller • Exciting • Adventure"},
    { id: 4, imageUrl: '/k6.jpg' ,title: 'Outer Banks' ,videoUrl:"https://www.youtube.com/embed/uk_hFfUFXh4",description:"|+16 |    4 Seasons \n Thriller • Exciting • Adventure"},
    { id: 5, imageUrl: '/k7.jpg',title: 'Outer Banks' ,videoUrl:"https://www.youtube.com/embed/uk_hFfUFXh4",description:"|+16 |    4 Seasons \n Thriller • Exciting • Adventure" },
    { id: 6, imageUrl: '/k1.jpg',title: 'Outer Banks' ,videoUrl:"https://www.youtube.com/embed/uk_hFfUFXh4",description:"|+16 |    4 Seasons \n Thriller • Exciting • Adventure"},  
    { id: 7, imageUrl: '/k3.jpg',title: 'Outer Banks' ,videoUrl:"https://www.youtube.com/embed/uk_hFfUFXh4",description:"|+16 |    4 Seasons \n Thriller • Exciting • Adventure" },
    { id: 8, imageUrl: '/k9.jpg',title: 'Outer Banks' ,videoUrl:"https://www.youtube.com/embed/uk_hFfUFXh4",description:"|+16 |    4 Seasons \n Thriller • Exciting • Adventure" },
    { id: 9, imageUrl: '/lnd.jpg',title: 'Outer Banks' ,videoUrl:"https://www.youtube.com/embed/uk_hFfUFXh4",description:"|+16 |    4 Seasons \n Thriller • Exciting • Adventure"},
    { id: 10, imageUrl: '/k10.jpg' ,title: 'Outer Banks' ,videoUrl:"https://www.youtube.com/embed/uk_hFfUFXh4",description:"|+16 |    4 Seasons \n Thriller • Exciting • Adventure"},
    { id: 11, imageUrl: '/k4.jpg' ,title: 'Outer Banks' ,videoUrl:"https://www.youtube.com/embed/uk_hFfUFXh4",description:"|+16 |    4 Seasons \n Thriller • Exciting • Adventure"},
    { id: 12, imageUrl: '/k11.jpg',title: 'Outer Banks' ,videoUrl:"https://www.youtube.com/embed/uk_hFfUFXh4",description:"|+16 |    4 Seasons \n Thriller • Exciting • Adventure"},
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

  const horror=[
    { id: 1, imageUrl: '/h1.png' },
    { id: 2, imageUrl: '/h2.png' },
    { id: 3, imageUrl: '/h3.png'},
    { id: 4, imageUrl: '/h4.png' },
    { id: 5, imageUrl: '/h5.png' },
    { id: 6, imageUrl: '/h6.png'},  
    { id: 7, imageUrl: '/h7.png' },
    { id: 8, imageUrl: '/h8.png' },
    { id: 9, imageUrl: '/h9.png'},
    { id: 10, imageUrl: '/h10.png' },
    { id: 11, imageUrl: '/h11.png' },
    { id: 12, imageUrl: '/h12.png'},
  ];

  const awards=[
    { id: 1, imageUrl: '/a1.png' },
    { id: 2, imageUrl: '/a2.png' },
    { id: 3, imageUrl: '/a3.png'},
    { id: 4, imageUrl: '/a4.png' },
    { id: 5, imageUrl: '/a5.png' },
    { id: 6, imageUrl: '/a6.png'},  
    { id: 7, imageUrl: '/a7.png' },
    { id: 8, imageUrl: '/a8.png' },
    { id: 9, imageUrl: '/a9.png'},
    { id: 10, imageUrl: '/a10.png' },
    { id: 11, imageUrl: '/a11.png' },
    { id: 12, imageUrl: '/a12.png'},
  ];

const cloneCount = 4;

const HorizontalCarousel = () => {
  const carouselRef = useRef(null);
  const [hoveredMovieId, setHoveredMovieId] = useState(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = cloneCount * 150;
    }
  }, []);

  const handleScroll = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft = carousel.scrollWidth - (cloneCount * 150 * 2);
      }
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
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

  const handleMouseEnter = (movieId) => {
    setHoveredMovieId(movieId);
  };

  const handleMouseLeave = () => {
    setHoveredMovieId(null);
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
      <div className="horizontal-scroll" ref={carouselRef} onScroll={handleScroll}>
        {moviesWithClones.map((movie, index) => (
          <Card
            key={index}
            className="movie-card"
            onMouseEnter={() => handleMouseEnter(movie.id)}
            onMouseLeave={handleMouseLeave}
          >
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
                          {hoveredMovieId === movie.id && (
              <div className="movie-hover-content">
                <div className="movie-buttons-container">
                  <div className="movie-buttons">
                    <button><img src='/play.png' height={5}></img></button>
                    <button><img src='/more.png' height={5}></img></button>
                    <button><img src='/like2.png' height={5}></img></button>
                    <button><img src='/drop.png' height={5}></img></button>
                  </div>
                  <div className="movie-content">
                    <div className="movie-title">{movie.title}</div>
                    <div className="movie-description">{movie.description}</div>
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

const HorizontalCarouselNew = () => {
  const carouselRef = useRef(null);
  const [hoveredMovieId, setHoveredMovieId] = useState(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = cloneCount * 150;
    }
  }, []);

  const handleScroll = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft = carousel.scrollWidth - (cloneCount * 150 * 2);
      }
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
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

  const handleMouseEnter = (movieId) => {
    setHoveredMovieId(movieId);
  };

  const handleMouseLeave = () => {
    setHoveredMovieId(null);
  };

  const moviesWithClones = [
    ...newMovies.slice(-cloneCount),
    ...newMovies,
    ...newMovies.slice(0, cloneCount)
  ];

  return (
    <div className="carousel-container">
      <h2>Top Picks For You</h2>
      <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
      <div className="horizontal-scroll" ref={carouselRef} onScroll={handleScroll}>
        {moviesWithClones.map((movie, index) => (
          <Card
            key={index}
            className="movie-card"
            onMouseEnter={() => handleMouseEnter(movie.id)}
            onMouseLeave={handleMouseLeave}
          >
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
                          {hoveredMovieId === movie.id && (
              <div className="movie-hover-content">
                <div className="movie-buttons-container">
                  <div className="movie-buttons">
                    <button><img src='/play.png' height={5}></img></button>
                    <button><img src='/more.png' height={5}></img></button>
                    <button><img src='/like2.png' height={5}></img></button>
                    <button><img src='/drop.png' height={5}></img></button>
                  </div>
                  <div className="movie-content">
                    <div className="movie-title">{movie.title}</div>
                    <div className="movie-description">{movie.description}</div>
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

  const HorrorCarrousel = () => {
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
      ...horror.slice(-cloneCount),
      ...horror,
      ...horror.slice(0, cloneCount)
    ];
  
    return (
      <div className="carousel-container">
        <h2>Horror Movies</h2>
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

  const AwardWinners = () => {
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
      ...awards.slice(-cloneCount),
      ...awards,
      ...awards.slice(0, cloneCount)
    ];
  
    return (
      <div className="carousel-container">
        <h2>Award Winning TV Shows</h2>
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
  export { HorizontalCarousel, HorizontalCarouselNew ,HorizontalCarouselNew2, AnimeCarrousel, HorrorCarrousel, AwardWinners};

