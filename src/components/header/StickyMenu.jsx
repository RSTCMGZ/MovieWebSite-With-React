import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import Nav from 'react-bootstrap/Nav';
import "../css/stickMenu.css"

function StickyMenu() {

    const handleCloseClick = () => {
        const overlay = document.querySelector('.sticky-menu-active')
        overlay.classList.remove('sticky-menu-active')
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
                    <Nav.Link className='text-black ' href="#link">Blog  </Nav.Link>
                    <Nav.Link className='text-black ' href="#link">Sıngle  </Nav.Link>
                    <Nav.Link className='text-black ' href="#link">Order  </Nav.Link>
                </Nav>
            </div>
        </div>
    )
}

export default StickyMenu