import React from 'react'
import Products from './excerise/mapping comp/product'
import Produ from './excerise/mapping comp/vschoolProducts'

function App(){
    const product_1 = Produ.map(pro =>
        <Products key={pro.id} prod={pro} />)
        // 声明一个变量，fetch数据用map提取，html来表达， 必须要声明一个key，可以用数据中的id或者无关紧要的数据
        
    return(
        <div>
            {product_1}
        </div>
    )
}

export default App