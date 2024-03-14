import About from './components/About';
import Pricing from './components/Pricing';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PreviousClients from './components/PreviousClients';
import Footer from './components/Footer';
import Services from './components/Services';

function App() {
  return (
    <div id="home">
      <Navbar />
      <Hero />
      <About />
      <PreviousClients />
      <Services />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
