import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
    //Cela nous permet de déclarer directement nos deux variables  
    //scaleValue   et  careType  , et de les assigner aux valeurs passées en props. 
    //On peut même directement l'écrire dans les paramètres de function
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? (
        <img src={Sun} alt='sun-icon' />
    ) : (
        <img src={Water} alt='water-icon' />
    )
    return <div>
        {range.map((rangeElem) =>
        scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
        
        )}</div>
}
    
export default CareScale