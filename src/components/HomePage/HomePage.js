import Header from "../Header/Header";
import "./HomePage.css";
import {Specials} from "../Specials/Specials";
import {CustomersSay} from "../CustomersSay/CustomersSay";

export const HomePage = () => {
    return (
        <div className='home-page'>
            <Header />
            <Specials />
            <CustomersSay />
        </div>
    );
}