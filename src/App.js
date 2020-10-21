import React from 'react'
import Products from './excerise/mapping comp/product'
import Produ from './excerise/mapping comp/vschoolProducts'

function App(){
    const product_1 = Produ.map(produc =>
        <Products key={produc.id} price={produc.price} name={produc.name} description={produc.description} />)
    return(
        <div>
            {product_1}
        </div>
    )
}

export default App