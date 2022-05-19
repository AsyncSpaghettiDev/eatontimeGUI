// Imports
import { useEffect, useState } from "react";

// Components
import MenuPlate from '../Components/MenuPlate.jsx';

const MenuPreview = ({ triggerStep, nextStep }) => {
    const [plates, setPlates] = useState([]);
    // UseEffect
    useEffect(() => {
        setPlates([
            { id: 1, img: 'https://picsum.photos/id/237/400/400', name: 'Nam libero', price: 75 },
            { id: 2, img: 'https://picsum.photos/id/107/400/400', name: 'non provident', price: 95 },
            { id: 3, img: 'https://picsum.photos/id/98/400/400', name: 'molestie in', price: 130 },
            { id: 4, img: 'https://picsum.photos/id/192/400/400', name: 'Cras suscipit', price: 105 },
            { id: 5, img: 'https://picsum.photos/id/305/400/400', name: 'molestias excepturi', price: 45 }
        ])
    }, [])

    // Event Handlers
    const handlerTrigger = () => {
        if (nextStep != undefined)
            triggerStep({ one: false, two: false, three: false, [nextStep]: true })
    }
    return (
        <div className="menu__preview">
            <h1 className="menu__title">hi</h1>
            {plates.map(plate => <MenuPlate key={plate.id} img={plate.img} name={plate.name} price={plate.price} />)};
            {nextStep != undefined ? <button onClick={handlerTrigger}>Hi</button> : null}
        </div>
    )
}

export default MenuPreview;