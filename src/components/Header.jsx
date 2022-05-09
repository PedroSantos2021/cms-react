import React from 'react';
import '../assets/styles/components/Header.scss';
const Header = () => (
    <header className='header'>
        <div className='header__brand'>
            <h3>juzgados civiles y familiares</h3>
        </div>
        <div className='header__user'>
            
            <a>Pedro Ernesto Santos Diaz</a>
            <span>|</span>
            <button className='header__user-exit'>Cerrar Sesión</button>
            
        </div>
    </header>
    
);
export default Header;