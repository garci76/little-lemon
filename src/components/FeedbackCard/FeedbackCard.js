import "./FeedbackCard.css";

export const FeedbackCard = ({ name, description, rating, image }) => {

    return (
        <article className="feedback-card">
            <div
                className="rating"
                role="img"
                aria-label='rating'
            >
                {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>
                        {star <= rating ? "★" : "☆"}
                    </span>
                ))}
            </div>

            <div className="name">
                {image && <img className="image" src={image} alt="" />}
                <span className="card-title-font">{name}</span>
            </div>

            <div className="description paragraph-font">
                “{description}”
            </div>
        </article>
    );
};
