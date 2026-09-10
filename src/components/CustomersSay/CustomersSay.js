import "./CustomersSay.css";
import {FeedbackCard} from "../FeedbackCard/FeedbackCard";

export const CustomersSay = () => {
    return (
        <section className="customers-say">
            <span className='title subtitle-font'>Testimonials</span>

            <section className="cards">
                <FeedbackCard name='Sara Lopez'
                              description="Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!"
                              rating={5}
                              image="/images/sara-lopez.jpg"
                />

                <FeedbackCard name='Jon Do'
                              description="We had such a great time celebrating my grandmothers bitthday!"
                              rating={5}
                              image="/images/jon-do.jpg"
                />

                <FeedbackCard name='Anna Lopez'
                              description="Best Feta Salad in town. Flawless everytime!"
                              rating={5}
                              image="/images/anna-lopez.jpg"
                />

                <FeedbackCard name='Marc'
                              description="Such a chilled out atmosphere - love it!"
                              rating={5}
                              image="/images/marc.jpg"
                />
            </section>
        </section>
    );
}