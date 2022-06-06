// Styles
import './styles/MenuPlate.css';

// Components

const MenuPlate = ({ id, img, name, description, onClick }) => {
    // Handlers
    const onClickHandler = () => {
        onClick(id);
    }
    return (
        <div className="menu__plate__detail"
        onClick={onClickHandler}
        >
            <img className='plate-image' src={img} alt="plate" />
            <h3 className="plate-name"> {name} </h3>
            <p className="plate-desc"> {description} </p>
        </div>
    );
}

export default MenuPlate;