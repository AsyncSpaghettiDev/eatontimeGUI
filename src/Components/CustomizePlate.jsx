const CustomizePlate = ({ img, name, price, description }) => {
    return (
        <div className="customize__plate">

            <img className='plate-image' src={img} alt="plate" />
            <h3 className="plate-name"> {name} </h3>
            <p className="plate-price"> {`Ordenar $${price} MXN`} </p>
            <p className="plate-desc"> {description} </p>
        </div>
    )
}

export default CustomizePlate;