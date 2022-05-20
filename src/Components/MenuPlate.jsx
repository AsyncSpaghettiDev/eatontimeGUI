import './styles/MenuPlate.css';

const MenuPlate = ({ img, name, price , onConfirm, description}) => {
    const handlerConfirmSelect = () => {
        if(window.confirm("¿Seguro?")) onConfirm();
    }
    return (
        <div className="menu__plate__detail" onClick={handlerConfirmSelect}>
            <img className='plate-image' src={img} alt="plate" />
            <h3 className="plate-name"> {name} </h3>
            <p className="plate-price"> {`$${price} mxn`} </p>
            <p className="plate-desc"> {description} </p>
        </div>
    );
}

export default MenuPlate;