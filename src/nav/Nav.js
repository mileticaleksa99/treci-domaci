import React from 'react';
import {Link, useLocation} from "react-router-dom";
import batman_icon from '../assets/batman-icon.png';
import envelope from '../assets/envelope.png';
import '../App.css';

export default function Nav() {
    const location = useLocation();

    const getNavPosition = () => {
        switch (location.pathname){
            case '/':
                return "nav-about";
            case '/contact':
                return "nav-contact";

            default: return "nav-about";
        }
    }

    const getTitle = () => {
        switch (location.pathname){
            case '/':
                return "Missions";
            case '/contact':
                return "Contact";

            default: return "";
        }
    }

    const navPosition = getNavPosition();
    const title = getTitle();

    const isCurrentPage = (navClass) => {
        return navClass === navPosition;
    }

    const renderNavLink = (to, imgSrc, altText, navClass) => {
        const isCurrent = isCurrentPage(navClass);
        const linkClass = isCurrent ? 'nav-link-current' : 'nav-link';

        return (
            <Link to={to} className={linkClass}>
                <img src={imgSrc} alt={altText}/>
                {isCurrent && <h1 className="page-title">{title}</h1> }
            </Link>
        );
    }


    return (
        <nav className={`nav ${navPosition}`}>
            {renderNavLink(
                "/",
                batman_icon,
                "astronaut helmet icon",
                "nav-about"
            )}
            {renderNavLink(
                "/contact",
                envelope,
                "envelope icon",
                "nav-contact"
            )}
        </nav>
    );
}

