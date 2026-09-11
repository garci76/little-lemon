import {Route, Routes, useNavigate} from "react-router-dom";
import {HomePage} from "./HomePage/HomePage";
import {BookingPage} from "./BookingPage/BookingPage";
import {useReducer, useState} from "react";
import {ConfirmedBooking} from "./ConfirmedBooking/ConfirmedBooking";

// Note: the proxy of my company blocks the download of the api.js file from the url 'https://raw.githubusercontent.com/courseraap/capstone/main/api.js',
//       so I've downloaded it and pasted the functions here...

// Start of api.js code...

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

const submitAPI = function(formData) {
    console.log('Data used to submit:', formData);
    return true;
};

// End of api.js code.

export const initializeTimes = () => {
    return fetchAPI(new Date());
}

export const updateTimes = (availableTimes, date) => {
    return fetchAPI(new Date(date));
};

export const Main = () => {

    const date = useState("");
    const time = useState("");
    const guests = useState(1);
    const occasion = useState("");
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    const navigate = useNavigate();

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    }

    return (
        <Routes>
            <Route path="/"        element={<HomePage />} />
            <Route path="/booking" element={<BookingPage
                date={date}
                time={time}
                guests={guests}
                occasion={occasion}
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
            />} />
            <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
    )
}