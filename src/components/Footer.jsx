import React from "react";
import '../assets/styles/components/Footer.scss';
const Footer = () => (
    <footer className="footer">
        <p className="footer__by">Development by DevSantos 2022 {new Date().toLocaleTimeString()}</p>
    </footer>
)

export default Footer;