// Styles
import './styles/MenuPlate.css';

// Components

const MenuPlate = ({  img, name, description }) => {
    return (
        <div className="menu__plate__detail" onClick={() => alert('Details')}>
            <img className='plate-image' src={img} alt="plate" />
            <h3 className="plate-name"> {name} </h3>
            <p className="plate-desc"> {description} </p>
        </div>
    );
}

export default MenuPlate;