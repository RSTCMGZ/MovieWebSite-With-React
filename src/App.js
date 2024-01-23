import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import SliderNavbar from './components/header/SliderNavbar';
import AboutMovie from './components/aboutMovie/AboutMovie';
import SectionCenter from './components/SectionSlider/SectionCenter';
import ServicesDesc from './components/servicesDesc/ServicesDesc';
import BoxOffice from './components/boxOffice/BoxOffice';
import Footer from './components/footer/FooterText';
import Blog from './components/blog/BlogDetails';
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  { path: "/", element: <Header /> },
])
const router2 = createBrowserRouter([
  { path: "/", element: <SliderNavbar /> },
])
const router3 = createBrowserRouter([
  { path: "/", element: <SectionCenter /> },
])
const router4 = createBrowserRouter([
  { path: "/", element: <AboutMovie /> },
])
const router5 = createBrowserRouter([
  { path: "/", element: <ServicesDesc /> },
])
const router6 = createBrowserRouter([
  { path: "/", element: <BoxOffice /> },
])
const router7 = createBrowserRouter([
  { path: "/", element: <Footer /> },
])
const router8 = createBrowserRouter([
  { path: "/blog", element: <Blog /> },
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <RouterProvider router={router2} />
      <RouterProvider router={router3} />
      <RouterProvider router={router4} />
      <RouterProvider router={router5} />
      <RouterProvider router={router6} />
      <RouterProvider router={router7} />
      <RouterProvider router={router8} />
    </div>
  );
}

export default App;
