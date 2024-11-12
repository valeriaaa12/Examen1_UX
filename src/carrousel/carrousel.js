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
  },
  {
    id: 4,
    title: "Love Next Door",
    description: "A woman attempting to reboot her life returns to Korea and becomes entangled with her childhood friend — with whom she shares a complicated history.",
    imageUrl: "/AAAAQQdXat-FiWSV2bBBkvTzXOWSLOsm2D3CfuVXWqGdr8qXNOyGSgrUjNNcGfCSaKuGvGn79UdytbRZpGrp-2LPHJTaxFJ4-5Kp5xHvW8AznndskRBydzHQgxIZrSQ4t8m3Pkon124MRFKbZ_YtMyOIjnQBPVQ.jpg",
    videoUrl: "https://www.youtube.com/embed/C3TpiZndAOo",
    rating: "13+",
    type: "SERIES"
  },
  {
    id: 5,
    title: "Demon Slayer",
    description: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly.",
    imageUrl: "/demonslayer.jpg",
    videoUrl: "https://www.youtube.com/embed/VQGCKyvzIM4",
    rating: "13+",
    type: "SERIES"
  },
  {
    id: 6,
    title: "Twilight",
    description: "When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire..",
    imageUrl: "/demonslayer.jpg",
    videoUrl: "https://www.youtube.com/embed/fX3jaAYgu2E",
    rating: "13+",
    type: "FILM"
  },
  {
    id: 7,
    title: "White Chicks",
    description: "Two disgraced FBI agents go way undercover in an effort to protect hotel heiresses the Wilson sisters from a kidnapping plot.",
    imageUrl: "/demonslayer.jpg",
    videoUrl: "https://www.youtube.com/embed/aeVkbNka9HM",
    rating: "16+",
    type: "FILM"
  }
];

const Carrousel = () => {
  const [index, setIndex] = useState(0);

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex(prev => prev === featuredContent.length - 1 ? 0 : prev + 1);
  };

  return (
    <div className="carousel-container">
      <button 
        className="carousel-control-prev" 
        style={{ position: 'absolute', left: 0, zIndex: 2 }}
      >
        <span className="carousel-control-prev-icon" />
      </button>

      <Carousel
        className="hero-carousel"
        activeIndex={index}
        controls={false}
        indicators={true}
      >
        {featuredContent.map((content, idx) => (
          <Carousel.Item key={content.id} className="hero-carousel-item">
            <div className="content-wrapper">
              <div className="video-background">
                {idx === index && (
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

      <button 
        className="carousel-control-next" 
        onClick={handleNext}
        style={{ position: 'absolute', right: 0, zIndex: 2 }}
      >
        <span className="carousel-control-next-icon" />
      </button>
    </div>
  );
};

export default Carrousel;