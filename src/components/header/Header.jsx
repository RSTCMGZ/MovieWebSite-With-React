import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import User from '../../img/users/user.png';
// import icon from '../../img/users/icon1.png';
// import icon2 from '../../img/users/icon2.png';
// import icon3 from '../../img/users/icon3.png';
// import icon4 from '../../img/users/icon4.png';
import * as Icon from 'react-bootstrap-icons';


function Header() {
    return (
        <div>

            <Navbar expand="lg" className="bg-body-black navbar-pad">
                <Container>


                    <Navbar.Brand href="#home" className='text-white'>LOGO</Navbar.Brand>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end w-100 ">
                            <Nav.Link href="#home" className='text-white '>Reşat Çamgöz
                            </Nav.Link>
                            <div className='draw '>
                                <img src={User} roundedCircle alt='' />
                            </div>
                            <div className='position-relative mx-2'>
                                <Nav.Link className='text-white ' href="#link">My tickets  </Nav.Link>
                                <span className='my-tickets position-absolute '>0</span>
                            </div>

                        </Nav>
                        <Nav.Link href="#home">
                            <div className='d-flex'>
                                <Icon.Search className='text-white fs-4 mx-3' />
                                <Icon.Justify className='text-white fs-4 mx-2' />
                            </div>
                        </Nav.Link>
                    </Navbar.Collapse>

                </Container>

            </Navbar>
            {/*          
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
                            <div className='position-relative d-lg-flex  d-none '>
                                <div className='path position-absolute '>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width={100}>
                                        <path fill="transparent" stroke="rgba(255,255,255, 1)" stroke-width="7" d="M 99.98034553584341 3.500002001543862 A 96.5 96.5 0 1 1 99.86596343597608 3.5000930870940863 Z" class="circles-maxValueStroke"></path>
                                        <path fill="transparent" stroke="#fb802d" stroke-width="7" d="M 99.98034553584341 3.500002001543862 A 96.5 96.5 0 1 1 25.599787321455736 38.54385015812184 " class="circles-valueStroke"></path>
                                    </svg>
                                    <p className='mt-2 text-white'> IMDB Ratffing </p>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width={100}>
                                        <path fill="transparent" stroke="rgba(255,255,255, 1)" stroke-width="7" d="M 99.98034553584341 3.500002001543862 A 96.5 96.5 0 1 1 99.86596343597608 3.5000930870940863 Z" class="circles-maxValueStroke"></path>
                                        <path fill="transparent" stroke="#fb802d" stroke-width="7" d="M 99.98034553584341 3.500002001543862 A 96.5 96.5 0 1 1 25.599787321455736 38.54385015812184 " class="circles-valueStroke"></path>
                                    </svg>
                                    <p className='text-white '>  Rotten Rating  </p>
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
            </div> */}
        </div>

    );
}

export default Header;