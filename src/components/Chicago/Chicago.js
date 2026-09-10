import "./Chicago.css";

export const Chicago = () => {
    return (
        <section className="chicago">

            <div className="content">
                <div className="description">
                    <h2 id="title" className="title-font">Little Lemon</h2>
                    <h3 className="subtitle-font">Chicago</h3>
                    <p className="subtitle-font">
                        John and Mark and are ready to offer you a fantastic dinner!
                    </p>
                </div>

                <div className="images">
                    <img
                        className="image image-main"
                        src="/images/mark.jpg"
                        alt="A member of the Little Lemon restaurant team"
                    />
                    <img
                        className="image image-secondary"
                        src="/images/john.jpg"
                        alt="A member of the Little Lemon restaurant team"
                    />
                </div>
            </div>

        </section>
    );
};