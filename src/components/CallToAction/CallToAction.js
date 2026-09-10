import React from "react";
import "./CallToAction.css";
import {Link} from "react-router-dom";

export const CallToAction = () => {
    return (
        <section className='call-to-action'>
            <h2 className="title-font">Little Lemon</h2>
            <h3 className="subtitle-font">Chicago</h3>
            <p className="lead-text-font">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to="/Booking">
                <button className='action-button card-title-font'>
                    Reserve Table
                </button>
            </Link>
        </section>
    )
}