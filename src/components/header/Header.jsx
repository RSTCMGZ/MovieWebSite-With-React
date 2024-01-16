import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import User from '../../img/users/user.png';
import * as Icon from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';


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

    return (
        <div className={colorChange ? "navbar active" : "navbar"}>
            <Navbar
                expand="lg" className="bg-body-black navbar-pad"
            >
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

        </div>

    );
}

export default Header;