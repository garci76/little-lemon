import React from "react";
import "./Nav.css";
import hamburger from "../../assets/hamburger.svg";
import basket from "../../assets/basket.svg";

export const Nav = () => {
    return (
        <nav>
            <button>
                <img className='hamburger' src={hamburger} alt="Hamburger Menu" />
            </button>

            <img className='logo' src='/images/Logo.svg' alt="Little Lemon Logo" />

            <button>
                <img className='basket' src={basket} alt="basket" />
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
