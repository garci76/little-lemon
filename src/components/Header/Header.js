import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className='header'>
            <section>
                <div>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/Booking"><button aria-label="On Click">Reserve Table</button></Link>
                </div>
            </section>
            <section>
                <img src='/images/restauranfood.jpg' alt='restaurant food' />
            </section>
        </header>
    )
}

export default Header;