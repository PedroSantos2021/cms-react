import React from "react";
import '../assets/styles/components/MSButtonMenu.scss';

const MSButtonMenu = ({icon,value, ...rest}) => {
    return (
        <button className="btnMenu" {...rest}>
            <i className={icon + " btnMenu__icon "}></i>
            <span className="btnMenu__text">{value}</span>
        </button>
    );
}
export default MSButtonMenu;