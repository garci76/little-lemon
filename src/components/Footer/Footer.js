import "./Footer.css";

export const Footer = () => {
    return(
        <footer>
            <img src='/images/lemon.png' alt='logo' />
            <section>
                <div>
                    <h3 className="card-title-font">Doormat Navigation</h3>
                    <ul className="link-font">
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div>
                    <h3 className="card-title-font">Contact</h3>
                    <ul className="link-font">
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div>
                    <h3 className="card-title-font">Social Media Links</h3>
                    <ul className="link-font">
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}
