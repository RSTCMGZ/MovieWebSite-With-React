import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import SliderNavbar from './components/header/SliderNavbar';
import AboutMovie from './components/aboutMovie/AboutMovie';
import SectionCenter from './components/SectionSlider/SectionCenter';
import ServicesDesc from './components/servicesDesc/ServicesDesc';


function App() {
  return (
    <div className="App">
      <Header />
      <SliderNavbar />
      <SectionCenter />
      <AboutMovie />
      <ServicesDesc />
    </div>
  );
}

export default App;
