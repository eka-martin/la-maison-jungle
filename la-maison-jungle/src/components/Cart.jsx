import { useState } from 'react'
import '../styles/Cart.css'

//les props 'cart' et 'updateCart' viennent de useState et 
//sont ajoutés ds fonction pour pouvoir etre liés avec App
function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(false)
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    )

    function removeFromCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }
    //const ivyPrice = 10
    //const flowerPrice = 15
    return isOpen ? (<div className='lmj-cart'>
        <button
            className='lmj-cart-toggle-button'
            onClick={() => setIsOpen(false)}>
            Fermer
        </button>
        {cart.length > 0 ? (
            <div>
                <h2>Panier</h2>
                <ul>
                    {cart.map(({ name, price, amount }, index) => (
                        <div key={`${name}-${index}`}>
                            {name} {price}€ x {amount}
                            <button
                                onClick={() => removeFromCart(name, price)}
                                className='lmj-cart-supp-button'>
                                x</button>
                        </div>
                    ))}

                </ul>
                <h3>Total :{total}€</h3>
                <button
                    className='lmj-cart-toggle-button'
                    onClick={() => updateCart([])}>
                    Vider le panier
                </button>
            </div>
        ) : (

            <div>Votre panier est vide</div>
        )}
    </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                onClick={() => setIsOpen(true)}>
                Ouvrir le Panier
            </button>
        </div>
    )
}

export default Cart