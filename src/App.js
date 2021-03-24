// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Services from './components/Services';
import Footer from './components/Footer';
import LatestNews from './components/LatestNews';
import BannerImage from './components/BannerImage';
import Testimonials from './components/Testimonials';
import OneCallAway from './components/OneCallAway';
import About from './components/About';
import HeroImg from './components/HeroImage';

function App () {
  return (
    <div className="App">
      <Header />
      <HeroImg />
      <Services />
      <About />
      <Testimonials />
      <BannerImage />
      <LatestNews />
      <OneCallAway />
      <Footer></Footer>
    </div>
  );
}

export default App;
