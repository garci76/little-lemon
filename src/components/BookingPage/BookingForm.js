import { useState } from "react";
import "./BookingForm.css"

export const BookingForm = ({ availableTimes, dispatch, date: dateState, time: timeState,
                              guests: guestsState, occasion: occasionState, submitForm }) => {

    const [date, setDate] = dateState;
    const [time, setTime] = timeState;
    const [guests, setGuests] = guestsState;
    const [occasion, setOccasion] = occasionState;
    const [errors, setErrors] = useState({});

    const validate = () => {
        const validationErrors = {};

        if (!date) validationErrors.date = "Please choose a date.";
        if (!time) validationErrors.time = "Please choose a time.";
        if (!guests || guests <= 0) validationErrors.guests = "Number of guests must be greater than 0.";
        if (!occasion) validationErrors.occasion = "Please choose an occasion.";

        return validationErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            submitForm({ date, time, guests, occasion });
        }
    };

    return (
        <form className="booking-form" aria-label="Restaurant reservation form" noValidate onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                required
                onChange={(event) => {
                    setDate(event.target.value);
                    dispatch(event.target.value);
                }}
            />
            {errors.date && <span className="error">{errors.date}</span>}

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                required
                onChange={(event) => setTime(event.target.value)}
            >
                <option value="">(Select a time)</option>
                {availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                        {availableTime}
                    </option>
                ))}
            </select>
            {errors.time && <span className="error">{errors.time}</span>}

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                min="1"
                max="10"
                id="guests"
                value={guests}
                required
                onChange={(event) => setGuests(Number(event.target.value))}
            />
            {errors.guests && <span className="error">{errors.guests}</span>}

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                required
                onChange={(event) => setOccasion(event.target.value)}
            >
                <option value="">(Select an occasion)</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            {errors.occasion && <span className="error">{errors.occasion}</span>}

            <input type="submit" value="Make Your reservation" />
        </form>
    )
}