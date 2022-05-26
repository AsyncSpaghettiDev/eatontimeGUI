import './styles/PlateDetail.css';

const PlateDetail = ({ img, name, price, quantity }) => {
    return (
        <div className="plate__detail">
            <img className='plate-image' src={img} alt="plate" />
            <h3 className="plate-name"> {name} </h3>
            <p className="plate-price"> {`$${price} mxn`} </p>
            <p className="plate-quantity"> {`Cantidad: ${quantity}`} </p>
            <button className="plate-update">Estado</button>
        </div>
    );
}

export default PlateDetail;