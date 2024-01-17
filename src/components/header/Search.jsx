import React, { useState } from 'react'
import * as Icon from 'react-bootstrap-icons';
import "../css/search.css"
function Search() {

    const [hidden, setHidden] = useState(false)
    const handleHiddenClick = () => {
        setHidden(true)
    }

    console.log(handleHiddenClick);
    return (

        <div className={hidden ? "overlay-search-active " : "overlay-search"}>
            <div className='close-btn'>
                <Icon.XCircle onClick={handleHiddenClick} />
            </div>
            <div className='input'>
                <input type="text " placeholder='Search Movie' />
                <Icon.Search className='input-search' />
            </div>
        </div>
    )
}

export default Search