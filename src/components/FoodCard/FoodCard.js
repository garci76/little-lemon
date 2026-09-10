import "./FoodCard.css";
import motorcycleIcon from '../../assets/motorcycle.svg';

export const FoodCard = ({ image, title, price, description }) => {
    return (
        <article className="food-card">

            <img className="image" src={image} alt='food' />

            <div className="content">

                <div className="heading">
                    <h2 className="card-title-font">{title}</h2>
                    <span className="price highlight-text-font">{price}</span>
                </div>

                <p className="paragraph-font primary">{description}</p>

                <a className="link highlight-text-font dark-gray-color" href="#delivery">
                    Order a delivery
                    <img src={motorcycleIcon} alt="Motorcycle Icon" className="link-icon" />
                </a>

            </div>
        </article>
    );
};
