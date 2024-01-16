import Carousel from 'react-bootstrap/Carousel';
import NavbarImg from '../../img/users/header.png'
import NavbarImg2 from '../../img/users/feature-item.jpg'
import icon from '../../img/users/icon1.png';
import icon2 from '../../img/users/icon2.png';
import icon3 from '../../img/users/icon3.png';
import icon4 from '../../img/users/icon4.png';
import * as Icon from 'react-bootstrap-icons';
import Nav from 'react-bootstrap/Nav';

function SliderNavbar() {
    return (
        <Carousel>
            <Carousel.Item>
                <img className='img-fluid img-slider' src={NavbarImg} alt='' />
                <Carousel.Caption>
                    <div className='d-flex container position-relative'>
                        <div className="row content mx-0">
                            <div className="col-sm-12">
                                <div className='text-white slider-content'>
                                    <div className="title ">
                                        <p>
                                            The Battle of Algiers <br /> (Di Algeri) <i>(1967)</i>

                                        </p>
                                    </div>
                                    <div className='slider-right d-flex gap-4'>
                                        <Icon.CollectionPlay className='icon-color' />
                                        <Nav.Link className='text-white hover-color ' href="#link">WATCH TRAILER</Nav.Link>
                                        <Icon.Cart className='icon-color ' />
                                        <Nav.Link className='text-white hover-color' href="#link">BUY TICKET</Nav.Link>

                                    </div>
                                    <ul className='d-flex gap-3 mt-5 icons'>
                                        <li>
                                            <img src={icon} alt="" />
                                        </li>
                                        <li>
                                            <img src={icon2} alt="" />
                                        </li>
                                        <li>
                                            <img src={icon3} alt="" />
                                        </li>
                                        <li>
                                            <img src={icon4} alt="" />
                                        </li>
                                    </ul>
                                    <div className='position-relative d-lg-flex gap-5 d-none '>
                                        <div className='path position-absolute gap-5 '>
                                            <div className='d-flex gap-2 flex-column justify-content-center  align-items-center '>

                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width={100}>
                                                    <path fill="transparent" stroke="rgba(255,255,255, 1)" stroke-width="7" d="M 99.98034553584341 3.500002001543862 A 96.5 96.5 0 1 1 99.86596343597608 3.5000930870940863 Z" class="circles-maxValueStroke"></path>
                                                    <path fill="transparent" stroke="#fb802d" stroke-width="7" d="M 99.98034553584341 3.500002001543862 A 96.5 96.5 0 1 1 25.599787321455736 38.54385015812184 " class="circles-valueStroke"></path>
                                                </svg>

                                                <p className='mt-2 text-white'> IMDB Ratffing </p>
                                            </div>
                                            <div className='d-flex gap-2 flex-column justify-content-center  align-items-center '>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width={100}>
                                                    <path fill="transparent" stroke="rgba(255,255,255, 1)" stroke-width="7" d="M 99.98034553584341 3.500002001543862 A 96.5 96.5 0 1 1 99.86596343597608 3.5000930870940863 Z" class="circles-maxValueStroke"></path>
                                                    <path fill="transparent" stroke="#fb802d" stroke-width="7" d="M 99.98034553584341 3.500002001543862 A 96.5 96.5 0 1 1 25.599787321455736 38.54385015812184 " class="circles-valueStroke"></path>
                                                </svg>

                                                <p className='text-white '>  Rotten Rating  </p>

                                            </div>
                                            <div className='desc'>
                                                <p>8.6</p>
                                            </div>
                                            <div className='desc-2'>
                                                <p>8.2</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='img-fluid img-slider' src={NavbarImg2} alt='' />
                <Carousel.Caption>
                    <div className='d-flex container position-relative'>
                        <div className="row content mx-0">
                            <div className="col-sm-12">
                                <div className='text-white slider-content'>
                                    <div className="title ">
                                        <p>
                                            The Battle of Algiers <br /> (Di Algeri) <i>(1967)</i>

                                        </p>
                                    </div>
                                    <div className='slider-right d-flex gap-4'>
                                        <Icon.CollectionPlay className='icon-color' />
                                        <Nav.Link className='text-white hover-color ' href="#link">WATCH TRAILER</Nav.Link>
                                        <Icon.Cart className='icon-color ' />
                                        <Nav.Link className='text-white hover-color' href="#link">BUY TICKET</Nav.Link>

                                    </div>
                                    <ul className='d-flex gap-3 mt-5 icons'>
                                        <li>
                                            <img src={icon} alt="" />
                                        </li>
                                        <li>
                                            <img src={icon2} alt="" />
                                        </li>
                                        <li>
                                            <img src={icon3} alt="" />
                                        </li>
                                        <li>
                                            <img src={icon4} alt="" />
                                        </li>
                                    </ul>
                                    <div className='position-relative d-lg-flex gap-5 d-none '>
                                        <div className='path position-absolute gap-5 '>
                                            <div className='d-flex gap-2 flex-column justify-content-center  align-items-center '>

                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width={100}>
                                                    <path fill="transparent" stroke="rgba(255,255,255, 1)" stroke-width="7" d="M 99.98034553584341 3.500002001543862 A 96.5 96.5 0 1 1 99.86596343597608 3.5000930870940863 Z" class="circles-maxValueStroke"></path>
                                                    <path fill="transparent" stroke="#fb802d" stroke-width="7" d="M 99.98034553584341 3.500002001543862 A 96.5 96.5 0 1 1 25.599787321455736 38.54385015812184 " class="circles-valueStroke"></path>
                                                </svg>

                                                <p className='mt-2 text-white'> IMDB Ratffing </p>
                                            </div>
                                            <div className='d-flex gap-2 flex-column justify-content-center  align-items-center '>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width={100}>
                                                    <path fill="transparent" stroke="rgba(255,255,255, 1)" stroke-width="7" d="M 99.98034553584341 3.500002001543862 A 96.5 96.5 0 1 1 99.86596343597608 3.5000930870940863 Z" class="circles-maxValueStroke"></path>
                                                    <path fill="transparent" stroke="#fb802d" stroke-width="7" d="M 99.98034553584341 3.500002001543862 A 96.5 96.5 0 1 1 25.599787321455736 38.54385015812184 " class="circles-valueStroke"></path>
                                                </svg>

                                                <p className='text-white '>  Rotten Rating  </p>

                                            </div>
                                            <div className='desc'>
                                                <p>8.6</p>
                                            </div>
                                            <div className='desc-2'>
                                                <p>8.2</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}

export default SliderNavbar;