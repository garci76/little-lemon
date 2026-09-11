import React from "react";
import "./Nav.css";
import hamburger from "../../assets/hamburger.svg";
import basket from "../../assets/basket.svg";

export const Nav = () => {
    return (
        <nav aria-label="Main navigation">
            <button type="button" aria-label="Open navigation menu">
                <img className='hamburger' src={hamburger} alt="" />
            </button>

            <img className='logo' src='/images/Logo.svg' alt="Little Lemon Logo" />

            <button type="button" aria-label="Shopping basket">
                <img className='basket' src={basket} alt="" />
            </button>

            <ul className='link-font'>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservations</a></li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>
            </ul>
        </nav>
    )
}
