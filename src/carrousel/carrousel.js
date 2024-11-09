import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Play, Info } from 'lucide-react';
import './carrousel.css';

const featuredContent = [
  {
    id: 1,
    title: "One Piece FAN LETTER",
    description: "A young girl idolizes Nami and writes her a fan letter in the hopes that she will read it. Meanwhile, two brothers in the Marines struggle to survive the major battles of Marineford and daily life on the seas.",
    imageUrl: "/fanletter.png",
    videoUrl: "https://www.youtube.com/embed/Iszdc1lqqnQ",
    rating: "13+",
    type: "FILM"
  },
  {
    id: 2,
    title: "Stranger Things",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    imageUrl: "/Stranger-Things-logo.png",
    videoUrl: "https://www.youtube.com/embed/b9EkMc79ZSU",
    rating: "16+",
    type: "SERIES"
  },
  {
    id: 3,
    title: "Wednesday",
    description: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.",
    imageUrl: "/Wednesday-Logo.png",
    videoUrl: "https://www.youtube.com/embed/Di310WS8zLk",
    rating: "13+",
    type: "SERIES"
  }
];

const Carrousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleSlideChange = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setActiveIndex((current) => 
          current === featuredContent.length - 1 ? 0 : current + 1
        );
      }, 40000);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel 
        className="hero-carousel"
        interval={null} 
        pause={false}
        controls={true}
        indicators={true}
        onSelect={handleSlideChange}
        activeIndex={activeIndex}
      >
        {featuredContent.map((content, index) => (
          <Carousel.Item key={content.id} className="hero-carousel-item">
            <div className="content-wrapper">
              <div className="video-background">
                {index === activeIndex && (
                  <iframe
                    className="hero-video"
                    src={`${content.videoUrl}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${content.videoUrl.split('/').pop()}`}
                    title={content.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              <div className="content-overlay">
                <div className="content-info">
                  <span className="content-type">{content.type}</span>
                  <h1 className="content-title">{content.title}</h1>
                  <p className="content-description">{content.description}</p>
                  
                  <div className="button-container">
                    <button className="play-button">
                      <Play size={24} />
                      Play
                    </button>
                    <button className="more-info-button">
                      <Info size={24} />
                      More Info
                    </button>
                  </div>
                </div>
                <div className="content-rating">{content.rating}</div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Carrousel;