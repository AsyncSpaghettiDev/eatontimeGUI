import './styles/MenuPlate.css';

const MenuPlate = ({ img, name, price }) => {
    return (
        <div className="menu__plate__detail">
            <img className='plate-image' src={img} alt="plate" />
            <h3 className="plate-name"> {name} </h3>
            <p className="plate-price"> {`$${price} mxn`} </p>
            <button className="plate-selecte">Seleccionar</button>
        </div>
    );
}

export default MenuPlate;