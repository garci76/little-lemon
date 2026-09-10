import "./Specials.css";
import { FoodCard } from "../FoodCard/FoodCard";
import React from "react";

export const Specials = () => {

    return (
        <div className="specials">
            <section className='title'>
                <p className='title-font'>This weeks specials!</p>
                <button className='action-button card-title-font'>
                    Online Menu
                </button>
            </section>

            <section className='foods'>
                <FoodCard image='/images/greek salad.jpg' title='Greek salad'
                          price='$12.99'
                          description='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'/>

                <FoodCard image='/images/bruchetta.png' title='Bruchetta'
                          price='$5.99'
                          description='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'/>

                <FoodCard image='/images/lemon dessert.jpg' title='Lemon Dessert'
                          price='$5.00'
                          description='This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'/>
            </section>
        </div>
    )
}