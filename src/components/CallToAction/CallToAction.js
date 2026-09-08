import React from "react";
import "./CallToAction.css";
import {Link} from "react-router-dom";

export const CallToAction = () => {
    return (
        <section className='call-to-action'>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to="/Booking">
                <button aria-label="On Click" className='action-button'>
                    Reserve Table
                </button>
            </Link>
        </section>
    )
}