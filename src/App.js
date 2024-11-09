import './App.css';
import NavScrollExample from './navbar/navbar';
import Carrousel from './carrousel/carrousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HorizontalCarousel, HorizontalCarouselNew,HorizontalCarouselNew2, AnimeCarrousel, HorrorCarrousel } from './carrousel/carrousel2';
import HorizontalCarousel2 from './carrousel/carrousel3';

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
    </div>
  );
}

export default App;
