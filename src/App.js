import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import SliderNavbar from './components/header/SliderNavbar';
import SectionCenter from './components/SectionSlider/SectionCenter.jsx';
import AboutMovie from './components/aboutMovie/AboutMovie';
import ServicesDesc from './components/servicesDesc/ServicesDesc';
import BoxOffice from './components/boxOffice/BoxOffice';
import Footer from './components/footer/FooterText';
import { Routes, Route } from 'react-router-dom'
import BlogDetails from '../src/components/blog/BlogDetails.jsx';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/blog' element={<BlogDetails />} />
        </Routes>
      </div>
      <div className="App">
        <Header />
        <SliderNavbar />
        <SectionCenter />
        <AboutMovie />
        <ServicesDesc />
        <BoxOffice />
        <Footer />
      </div>
    </>


  );
}

export default App;
