import About from '../components/About';
import Pricing from '../components/Pricing';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import PreviousClients from '../components/PreviousClients';
import PhotoCarousel from '../components/PhotoCarousel';
import Footer from '../components/Footer';

function App() {
  return (
    <div id="home">
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <PreviousClients />
      <PhotoCarousel />
      <Footer />
    </div>
  );
}

export default App;
