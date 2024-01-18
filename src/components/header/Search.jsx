import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import "../css/search.css"
function Search() {
    const handleCloseClick = () => {
        const overlay = document.querySelector('.overlay-search-active ')
        overlay.classList.remove('overlay-search-active')
    }
    return (
        <div className='space'>
            <div className='close-btn'>
                <Icon.XCircle onClick={handleCloseClick} />
            </div>
            <div className='input'>
                <input type="text " placeholder='Search Movie' />
                <Icon.Search className='input-search' />
            </div>
        </div>
    )
}

export default Search