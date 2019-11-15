import React from 'react'
import Product from './product'


const ProductList = props => {
    return(
        <div className="content-list">
            {
                props.data.map((item,index) => {
                    return(
                        <Product data = {item}/>
                    )
                })

            }
        </div>
    )
}
export default ProductList;