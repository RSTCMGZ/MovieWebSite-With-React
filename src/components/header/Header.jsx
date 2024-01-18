import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import User from '../../img/users/user.png';
import * as Icon from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
import Search from './Search';
import StickyMenu from './StickyMenu';
import Ticket from './Ticket';


function Header() {
    const [colorChange, setColorChange] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setColorChange(true)
        } else {
            setColorChange(false)
        }
    }
    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })



    const handleHiddenClick = () => {
        const overlay = document.querySelector('.overlay-search ')
        overlay.classList.add('overlay-search-active')
    }
    const handleHiddenMenu = () => {
        const overlay = document.querySelector('.sticky-menu ')
        overlay.classList.add('sticky-menu-active')
    }
    const handleClickOpen = () => {
        const overlay = document.querySelector('.ticket-search ')
        overlay.classList.add('ticket-search-active')
    }

    return (
        <div className={colorChange ? "navbar active" : "navbar"}>


            <Navbar
                expand="lg" className="bg-body-black navbar-pad"
            >
                <Container>
                    <Navbar.Brand href="#home" className='text-white'>LOGO</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="d-xl-flex  justify-content-end w-100 ">
                            <Nav.Link href="#home" className='text-white d-xl-flex d-none '>Reşat Çamgöz
                            </Nav.Link>
                            <div className='draw d-xl-flex d-none '>
                                <img src={User} roundedCircle alt='' />
                            </div>
                            <div className='position-relative mx-2'>
                                <Nav.Link className='text-white ' href="#link" onClick={handleClickOpen}>My tickets  </Nav.Link>
                                <span className='my-tickets position-absolute '>0</span>
                            </div>

                        </Nav>
                        <Nav.Link href="#home">
                            <div className='d-flex'>
                                <Icon.Search onClick={handleHiddenClick} className='text-white fs-4 mx-3' />
                                <Icon.Justify onClick={handleHiddenMenu} className='text-white fs-4 mx-2' />
                            </div>
                        </Nav.Link>
                    </Navbar.Collapse>

                </Container>

            </Navbar>
            <div className='overlay-search'>
                <Search />

            </div>
            <div className='sticky-menu'>
                <StickyMenu />
            </div>
            <div className='ticket-search'>
                <Ticket />
            </div>
        </div>

    );
}

export default Header;