import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import Nav from 'react-bootstrap/Nav';
import "../css/stickMenu.css"
import { useNavigate } from 'react-router-dom'


function StickyMenu() {

    const handleCloseClick = () => {
        const overlay = document.querySelector('.sticky-menu-active')
        overlay.classList.remove('sticky-menu-active')
    }
    const navigate = useNavigate()
    const handleNewPage = () => {
        const sticky = document.querySelector(".sticky-menu")
        const App = document.querySelector(".App")
        navigate('/blog')
        sticky.style.display = 'none'
        App.style.display = 'none'
    }
    return (
        <div className='space'>
            <div className='close-btn'>
                <Icon.XCircle onClick={handleCloseClick} />
            </div>
            <div className='menu'>
                <Nav className=" w-100 text-uppercase">
                    <Nav.Link href="#home" className='text-black '>Home
                    </Nav.Link>

                    <button onClick={handleNewPage}>Blog</button>

                    <Nav.Link href="#home" className='text-black '>Blog
                    </Nav.Link>
                    <Nav.Link className='text-black ' href="">Sıngle  </Nav.Link>
                    <Nav.Link className='text-black ' href="">Order  </Nav.Link>
                </Nav>

            </div>
        </div>
    )
}

export default StickyMenu