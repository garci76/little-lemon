import {BookingForm} from "./BookingForm";

export const BookingPage = ({ availableTimes, date, time, guests, occasion }) => {

    return (
        <main>
            <BookingForm
                date={date}
                time={time}
                guests={guests}
                occasion={occasion}
                availableTimes={availableTimes}
            />
        </main>
    );
};
