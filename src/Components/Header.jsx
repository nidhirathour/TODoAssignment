import React from 'react'
import './CSS files/Header.css';

const Header = () => {
    return (
        <div className='titlecontainer'>
            <h1>todos</h1>
            <p>items will presist in the browser local storage</p>
        </div>
    )
}

export default Header