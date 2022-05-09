import React from "react";
import '../assets/styles/components/Navhome.scss';

const NavHome = ({ children }) => {
    return (
        <div className="nav">
            <div className="nav__content">
                { children }
            </div>
        </div>
    );
}

export default NavHome;