import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import SliderNavbar from './components/header/SliderNavbar';
import SectionCenter from './components/section/SectionCenter';
import AboutMovie from './components/aboutMovie/AboutMovie';


function App() {
  return (
    <div className="App">
      <Header />
      <SliderNavbar />
      <SectionCenter />
      <AboutMovie />
    </div>
  );
}

export default App;
