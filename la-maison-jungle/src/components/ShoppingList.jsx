import { plantList } from "../datas/plantList"

function ShoppingList() {
    //https://learn.javascript.ru/array-iteration
    // const categories = plantList.reduce(
    //     (acc, plant) =>
    //     acc.includes(plant.category) ? acc : acc.concat(plant.category),
    //     []
    // )

    const categories = plantList.forEach((plant) =>
    plant.forEach((acc, category) =>
        acc.includes(plant.category) ? acc : acc.concat(plant.category),
        [])
    )
    return (
        <div>
        <ul>
            {categories.map((cat) => (
                <li key={cat}>{cat}</li>
            ))}
        </ul>
        <ul>
            {plantList.map((plant) => (
                <li key={plant.id}>{plant.name}</li>
            ))}
        </ul>
        </div>
    )
}

export default ShoppingList