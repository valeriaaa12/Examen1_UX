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
    { id: 1, imageUrl: '/k8.jpg' ,title: 'Nevertheless' ,videoUrl:"https://www.youtube.com/embed/0x8cJUD6MMo",description:"|+13 |    10 Episodes \n Bittersweet • Intimate • Drama"},
    { id: 2, imageUrl: '/k2.jpg' ,title: 'True Beauty' ,videoUrl:"https://www.youtube.com/embed/BhP1eYQ5Pxk",description:"|+13 |    Limited Series \n Swoonworthy • Romantic • Comedy"},
    { id: 3, imageUrl: '/k5.jpg',title: 'Business Proposal' ,videoUrl:"https://www.youtube.com/embed/mh4R-WXRhQo",description:"|+16 |    12 Episodes \n Swoonworthy • Charming • Romantic"},
    { id: 4, imageUrl: '/k6.jpg' ,title: 'Tomorrow' ,videoUrl:"https://www.youtube.com/embed/BsNRPkOV_Mo",description:"|+16 |    16 Episodes \n Emotional • Exciting • Drama"},
    { id: 5, imageUrl: '/k7.jpg',title: 'Hometown Cha-Cha-Cha' ,videoUrl:"https://www.youtube.com/embed/z66fazyp3-M",description:"|+13 |    16 Episodes \n Charming • Feel-Good • Intimate" },
    { id: 6, imageUrl: '/k1.jpg',title: 'King the Land' ,videoUrl:"https://www.youtube.com/embed/AGF16szMOmo",description:"|+13 |    Limited Series \n Swoonworthy • Romantic • Comedy"},  
    { id: 7, imageUrl: '/k3.jpg',title: 'Twenty Five Twenty-One' ,videoUrl:"https://www.youtube.com/embed/gYp4cKumTwU",description:"|+13 |    16 Episodes \n Nostalgic • Inspiring • Intimate" },
    { id: 8, imageUrl: '/k9.jpg',title: 'A Virtuous Business' ,videoUrl:"https://www.youtube.com/embed/2PsOxGQcMTU",description:"|+13 |    Limited Series \n Nostalgic • Exciting • Raunchy" },
    { id: 9, imageUrl: '/lnd.jpg',title: 'Love Next Door' ,videoUrl:"https://www.youtube.com/embed/C3TpiZndAOo",description:"|+13 |    Limited Series \n Charming • Feel-Good • Romantic"},
    { id: 10, imageUrl: '/k10.jpg' ,title: 'Squid Game' ,videoUrl:"https://www.youtube.com/embed/oqxAJKy0ii4",description:"|+16 |    1 Season \n Thriller • Violent • Suspenful"},
    { id: 11, imageUrl: '/k4.jpg' ,title: 'Queen of Tears' ,videoUrl:"https://www.youtube.com/embed/Gg2D8zrzlOA",description:"|+13 |    16 Episodes \n Swoonworthy • Romantic • Comedy"},
    { id: 12, imageUrl: '/mydemon.jpg',title: 'My Demon' ,videoUrl:"https://www.youtube.com/embed/D-bAfFqvxZg",description:"|+13 |    16 Episodes \n Intimate • Romantic • Comedy"},
  ];

  const anime =[
    { id: 1, imageUrl: '/dandadan2.png', title: 'Dandadan',videoUrl: "https://www.youtube.com/embed/TCtxmkV2MCQ",description:"|+16 |    6 Episodes \n Offbeat • Irreverent • Horror Anime" },
    { id: 2, imageUrl: '/deathnote.png', title: 'Death Note',videoUrl: "https://www.youtube.com/embed/oc0i0F_Q0go", description:"|+13 |    37 Episodes \n Chilling • Cerebral • Horror Anime"},
    { id: 3, imageUrl: '/ScottP.png', title: 'Scott Pilgrim: Takes Off!',videoUrl: "https://www.youtube.com/embed/SWGSLxqy4Ms", description:"|13+ |    8 Episodes \n Action Anime • Anime Series • US TV Shows"},
    { id: 4, imageUrl: '/fanletter2.png', title: 'One Piece FanLetter',videoUrl: "https://www.youtube.com/embed/xpKfRwX_8Ws", description:"|13+ |    24m \n Imaginative • Heartfelt • Action Anime"},
    { id: 5, imageUrl: '/haikyuu.png', title: 'Haikyu!!!',videoUrl: "https://www.youtube.com/embed/5UiaQ3jVOpw", description:"|13+ |    4 Seasons \n Shounen Anime • Japanese • Teen TV Shows"},
    { id: 6, imageUrl: '/hxh.png', title: 'Hunter x Hunter',videoUrl: "https://www.youtube.com/embed/l5ZjHhsdLSQ", description:"|16+ |    6 Seasons \n Shounen Anime • Sci-Fi & Fantasy Anime • Action Anime"},  
    { id: 7, imageUrl: '/jjk.png', title: 'Jujutsu Kaisen',videoUrl: "https://www.youtube.com/embed/NyPf5ipLFkU", description:"|16+ |    24 Episodes \n Imaginative • Dark • Fantasy Anime"},
    { id: 8, imageUrl: '/jojo.png', title: 'Jojos Bizarre Adventure',videoUrl: "https://www.youtube.com/embed/AQx_KMoCgJU", description:"|16+ |    5 Seasons \n Exciting • Fantasy Anime • Ensemble"},
    { id: 9, imageUrl: '/mob.png', title: 'Mob Psycho 100',videoUrl: "https://www.youtube.com/embed/Ah7lTT-NKMw", description:"|13+ |    3 Seasons \n Deadpan • Witty • Comedy Anime"},
    { id: 10, imageUrl: '/overlord.png', title: 'Overlord',videoUrl: "https://www.youtube.com/embed/vci9YwpFFcA", description:"|16+ |    4 Seasons \n Sci-Fi & Fantasy Anime • Action Anime • Japanese"},
    { id: 11, imageUrl: '/ranma.png', title: 'Ranma 1/2',videoUrl: "https://www.youtube.com/embed/cfgPnq4sssU", description:"|13+ |    7 Episodes \n Goofy • Exciting • Romantic Anime"},
    { id: 12, imageUrl: '/spy.png', title: 'Spy X Family',videoUrl: "https://www.youtube.com/embed/ofXigq9aIpo", description:"|16+ |    25 Episodes \n Slick • Offbeat • Comedy Anime"},
  ];

  const horror=[
    { id: 1, imageUrl: '/h1.png', title: 'Smile', videoUrl: "https://www.youtube.com/embed/n42mdgKaGv0", description:"|18+ |    1h 56m \n Gruesome • Gory • Supernatural Horror"},
    { id: 2, imageUrl: '/h2.png', title: 'Late Night with the Devil', videoUrl: "https://www.youtube.com/embed/cvt-mauboTc", description:"|16+ |    1h 26 m \n Scary • Horror • Independent" },
    { id: 3, imageUrl: '/h3.png', title: 'Scream', videoUrl: "https://www.youtube.com/embed/beToTslH17s", description:"|16+ |    1h 51m \n Gruesome • Scary • Teen Scream"},
    { id: 4, imageUrl: '/h4.png', title: 'Split', videoUrl: "https://www.youtube.com/embed/U58Om9LXYFs", description:"|16+ |    1h 57m \n Psychological • Scary • Supernatural Horror"},
    { id: 5, imageUrl: '/h5.png', title: 'Halloween', videoUrl:"https://youtu.be/ek1ePFp-nBI?si=xvPWiYiWf3DEiLh5", description:"|18+ |    1h 45m \n Gruesome • Gory • Teen Scream"},
    { id: 6, imageUrl: '/h6.png', title: 'Ouija: Origin of Devil', videoUrl:"https://www.youtube.com/embed/MJIcZGEjjwo", description:"|13+ |    1h 38m \n Chilling • Ominous • Teen Scream"},  
    { id: 7, imageUrl: '/h7.png', title: 'Get Out', videoUrl:"https://www.youtube.com/embed/DzfpyUB60YY", description:"|16+ |    1h 44m \n Ominous • Scary • Satire"},
    { id: 8, imageUrl: '/h8.png', title: 'Scream 2', videoUrl:"https://www.youtube.com/embed/QXjofSo5Je0", description:"|16+ |    2h \n Gruesome • Gory • Teen "},
    { id: 9, imageUrl: '/h9.png', title: 'Train to Busan', videoUrl:"https://www.youtube.com/embed/1ovgxN2VWNc", description:"|16+ | 1h 57m \n Gruesome • Suspenseful • Asian Action"},
    { id: 10, imageUrl: '/h10.png', title: 'The Deliverance', videoUrl:"https://www.youtube.com/embed/PDcDagDcwPA", description:"|16+ | 1h 52m \n Ominous • Psychological • Supernatural Horror"},
    { id: 11, imageUrl: '/h11.png', title: 'Under Paris', videoUrl:"https://www.youtube.com/embed/jnCefPQIH98", description:"|16+ |    1h 44m \n Ominous • Scary • Creature Feature"},
    { id: 12, imageUrl: '/h12.png', title: 'Wrong Turn', videoUrl:"https://www.youtube.com/embed/YngNdakEa2U", description:"|16+ |    1h 24m \n Gory • Violent • Horror"},
  ];

  const awards=[
    { id: 1, imageUrl: '/a1.png', title: 'Arcane', videoUrl:"https://www.youtube.com/embed/9YkyGz8ErA0", description:"|+16 |    2 Seasons \n Slick • Gritty • Adventure"},
    { id: 2, imageUrl: '/a2.png', title: 'The Office', videoUrl:"https://www.youtube.com/embed/lC5lsemxaJo", description:"|13+ |    9 Seasons \n Witty • Irreverent • Sitcom"},
    { id: 3, imageUrl: '/a3.png', title: 'Brooklyn Nine-Nine', videoUrl:"https://www.youtube.com/embed/HlBYdiXdUa8", description:"|13+ |    8 Seasons \n Sitcom • Sharp Dialogue • Workplace"},
    { id: 4, imageUrl: '/a4.png', title: 'Dr. House', videoUrl:"https://youtu.be/PfEIoIa8b5o?si=xm8gT-w8Q-RwpDik", description:"|16+ |    8 Seasons \n Irreverent • Dark • Drama"},
    { id: 5, imageUrl: '/a5.png', title: 'Breaking Bad', videoUrl:"https://www.youtube.com/embed/HhesaQXLuRY", description:"|16+ |    5 Seasons \n Violent • Gritty • Thriller"},
    { id: 6, imageUrl: '/a6.png', title: 'Dexter', videoUrl:"https://www.youtube.com/embed/mjXccGxvxhU", description:"|16+ |    8 Seasons \n Ominous • Dark • Mistery"},  
    { id: 7, imageUrl: '/a7.png', title: 'Stranger Things', videoUrl:"https://www.youtube.com/embed/yXnk3n-qNrI", description:"|16+ |    4 Seasons \n Ominous • Nostalgic • Horror"},
    { id: 8, imageUrl: '/a8.png', title: 'One Piece', videoUrl:"https://www.youtube.com/embed/JoO7TGG2Kms", description:"|13+ |    8 Episodes \n Rousing • Imaginative • Irreverent"},
    { id: 9, imageUrl: '/a9.png', title: 'Better Call Saul', videoUrl:"https://www.youtube.com/embed/HN4oydykJFc", description:"|16+ |    6 Seasons \n Offbeat • Gritty • Drama"},
    { id: 10, imageUrl: '/a10.png', title: 'Regular Show', videoUrl:"https://www.youtube.com/embed/VkWzAZRXi5k", description:"|10+ |    3 Seasons \n Absurd • Imaginative • Family"},
    { id: 11, imageUrl: '/a11.png', title: 'Bojack Horseman', videoUrl:"https://youtu.be/i1eJMig5Ik4?si=1lIdonbatyis6Mbg", description:"|16+ |    6 Seasons \n Deadpan • Witty • Dark Comedy"},
    { id: 12, imageUrl: '/a12.png', title: 'The Queen\'s Gambit', videoUrl:"https://www.youtube.com/embed/oZn3qSgmLqI", description:"|+16 |    Limited Series \n Cerebral • Intimate • Drama "},
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
      ...newMovies2.slice(-cloneCount),
      ...newMovies2,
      ...newMovies2.slice(0, cloneCount)
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

  const AnimeCarrousel = () => {
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

    const handleMouseEnter = (movieId) => {
      setHoveredMovieId(movieId);
    };
  
    const handleMouseLeave = () => {
      setHoveredMovieId(null);
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

  const HorrorCarrousel = () => {
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

    const handleMouseEnter = (movieId) => {
      setHoveredMovieId(movieId);
    };
  
    const handleMouseLeave = () => {
      setHoveredMovieId(null);
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

  const AwardWinners = () => {
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

    const handleMouseEnter = (movieId) => {
      setHoveredMovieId(movieId);
    };
  
    const handleMouseLeave = () => {
      setHoveredMovieId(null);
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
  export { HorizontalCarousel, HorizontalCarouselNew ,HorizontalCarouselNew2, AnimeCarrousel, HorrorCarrousel, AwardWinners};

