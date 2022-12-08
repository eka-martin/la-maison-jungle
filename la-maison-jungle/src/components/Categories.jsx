import '../styles/Categories.css'

//les trois props  viennent de useState et 
//sont ajoutés ds fonction pour pouvoir etre liés avec ShoppingList
function Categories({ setActiveCategory, categories, activeCategory  }) {
            return (
                <div className='lmj-categories'>
                <select
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className='lmj-categories-select'
                >
                    <option value=''>---</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
                <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
            </div>
    )

}

export default Categories