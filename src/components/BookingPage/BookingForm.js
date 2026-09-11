import "./BookingForm.css"

export const BookingForm = ({ availableTimes, dispatch, date: dateState, time: timeState,
                              guests: guestsState, occasion: occasionState }) => {

    const [date, setDate] = dateState;
    const [time, setTime] = timeState;
    const [guests, setGuests] = guestsState;
    const [occasion, setOccasion] = occasionState;

    return (
        <form className="booking-form">
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={(event) => {
                    setDate(event.target.value);
                    dispatch(event.target.value);
                }}
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
            >
                <option value="">Select a time</option>
                {availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                        {availableTime}
                    </option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={(event) => setGuests(Number(event.target.value))}
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(event) => setOccasion(event.target.value)}
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" />
        </form>
    )
}