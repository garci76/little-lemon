import {Link} from "react-router-dom";
import './ConfirmedBooking.css';

export const ConfirmedBooking = () => {
    return (
        <main className="confirmed-booking">
            <div className="confirmation-message">
                <h1 className="subtitle-font">Booking has been confirmed!</h1>
                <p className="paragraph-font">Thank you for your reservation. We look forward to serving you!</p>
            </div>

            <Link className="home-button section-title-font" to="/">
                <button className='highlight-text-font' aria-label="On Click">
                    Returns to home
                </button>
            </Link>
        </main>
    )
}