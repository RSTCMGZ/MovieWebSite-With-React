import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import SliderNavbar from './components/header/SliderNavbar';
import AboutMovie from './components/aboutMovie/AboutMovie';
import SectionCenter from './components/SectionSlider/SectionCenter';
import ServicesDesc from './components/servicesDesc/ServicesDesc';
import BoxOffice from './components/boxOffice/BoxOffice';
import Footer from './components/footer/FooterText';


function App() {
  return (
    <div className="App">
      <Header />
      <SliderNavbar />
      <SectionCenter />
      <AboutMovie />
      <ServicesDesc />
      <BoxOffice />
      <Footer />
    </div>
  );
}

export default App;
