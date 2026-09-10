import React from "react";
import "./Nav.css";

export const Nav = () => {
    return (
        <nav>
            <img src='/images/Logo.svg' alt="Little Lemon Logo" ></img>
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
