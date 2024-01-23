import './Card.css'
import itemImage from '../../Assets/item.png'


const Card = ({ name, description, buyItem }) => {
    return (
        <div className="card" onClick={() => buyItem(name)}>
            <h3>{ name }</h3>
            <img src={ itemImage } />
            <div className="description">
                
                <p>{ description }</p>
            </div>
        </div>
    );
};

export default Card;