import React from "react";
import "./Header.css";
import {CallToAction} from "../CallToAction/CallToAction";

const Header = () => {
    return (
        <header>
            <CallToAction />

            <section>
                <img src='/images/restauranfood.jpg' alt='restaurant food' />
            </section>
        </header>
    )
}

export default Header;