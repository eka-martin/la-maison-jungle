import CareScale from "./CareScale"
import '../styles/PlantItem.css'



function PlantItem({ id, water, light, name, cover }) {
    function handleClick(plantName) {
        alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
    }
    return (

        <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>

            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            {/* {plant.isBestSale ? <span>🔥</span> : null} */}
            {/* {plant.isBestSale && <span>🔥</span>} */}
            {/* {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>} */}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>

    )
}
export default PlantItem