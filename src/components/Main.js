import {Route, Routes} from "react-router-dom";
import {HomePage} from "./HomePage/HomePage";
import {BookingPage} from "./BookingPage";

export const Main = () => {
    return (
        <Routes>
            <Route path="/"        element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
        </Routes>
    )
}