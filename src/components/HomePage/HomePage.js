import Header from "../Header/Header";
import "./HomePage.css";
import {Specials} from "../Specials/Specials";
import {CustomersSay} from "../CustomersSay/CustomersSay";
import {Chicago} from "../Chicago/Chicago";
import {Footer} from "../Footer/Footer";

export const HomePage = () => {
    return (
        <div className='home-page'>
            <Header />
            <Specials />
            <CustomersSay />
            <Chicago />
            <Footer />
        </div>
    );
}