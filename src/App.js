import './App.css';
import Header from "./components/Header/Header";
import {Booking} from "./components/Booking";
import { Route, Routes } from "react-router-dom";
import {Nav} from "./components/Nav";
import {Main} from "./components/Main";
import {Footer} from "./components/Footer";

function App() {
    return (
        <>
            <Header />
            <Nav />
            <Main />
            <Footer />

            <Routes>
                <Route path="/booking" element={<Booking />} />
                <Route path="/"        element={<Booking />} />
            </Routes>
        </>
    );
}

export default App;
