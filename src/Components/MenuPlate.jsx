// Styles
import './styles/MenuPlate.css';

// Components

const MenuPlate = ({ id, img, name, price, description, onAsk }) => {

    const handlerAsk = () => {
        setTimeout(() => {
            onAsk(id);
        }, 250)
    }

    return (
        <div className="menu__plate__detail" onClick={handlerAsk}>
            <img className='plate-image' src={img} alt="plate" />
            <h3 className="plate-name"> {name} </h3>
            <p className="plate-price"> {`Ordenar $${price} MXN`} </p>
            <p className="plate-desc"> {description} </p>
        </div>
    );
}

export default MenuPlate;