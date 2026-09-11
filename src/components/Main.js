import {Route, Routes} from "react-router-dom";
import {HomePage} from "./HomePage/HomePage";
import {BookingPage} from "./BookingPage/BookingPage";
import {useState} from "react";

export const Main = () => {

    const date = useState("");
    const time = useState("");
    const guests = useState(1);
    const occasion = useState("Birthday");
    const availableTimes = useState([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ]);

    return (
        <Routes>
            <Route path="/"        element={<HomePage />} />
            <Route path="/booking" element={<BookingPage
                date={date}
                time={time}
                guests={guests}
                occasion={occasion}
                availableTimes={availableTimes}
            />} />
        </Routes>
    )
}