import './App.css';
import NavScrollExample from './navbar/navbar';
import Carrousel from './carrousel/carrousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HorizontalCarousel, HorizontalCarouselNew,HorizontalCarouselNew2, AnimeCarrousel, HorrorCarrousel, AwardWinners } from './carrousel/carrousel2';
import HorizontalCarousel2 from './carrousel/carrousel3';
import Footer from './Footer/Footer';

function App() {
  return (
    <div classname="netflix-clone">
    <NavScrollExample/>
    <Carrousel/>
    <HorizontalCarousel/>
    <HorizontalCarousel2/>
    <HorizontalCarouselNew/>
    <HorizontalCarouselNew2/>
    <AnimeCarrousel/>
    <HorrorCarrousel/>
    <AwardWinners/>
    <Footer/>
    </div>
  );
}

export default App;
