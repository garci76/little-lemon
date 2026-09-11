import {BookingForm} from "../BookingForm/BookingForm";
import './BookingPage.css';

export const BookingPage = ({ availableTimes, dispatch, date, time, guests, occasion, submitForm }) => {

    return (
        <main className="booking-page">
            <h1 className="subtitle-font">Reservation details</h1>
            <BookingForm
                date={date}
                time={time}
                guests={guests}
                occasion={occasion}
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
            />
        </main>
    );
};
