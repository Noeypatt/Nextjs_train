import React, { useState } from 'react'
import Nav from '../components/nav'
import AddProductForm from '../components/layout/AddProductForm';
import ProductList from '../components/layout/ProductList';

const defaultProducts = [
    {
        name: "Pea",
        desciption: "xxxxx",
        price: 20,
        quantity: 100,
        imageUrl: ""
    },
    {
        name: "Book",
        desciption: "xxxxx",
        price: 120,
        quantity: 100,
        imageUrl: ""
    },
    {
        name: "Notebook",
        desciption: "xxxxx",
        price: 15,
        quantity: 100,
        imageUrl: ""
    },


]

const testProduct = {
    name: "Pea",
    desciption: "xxxxx",
    price: 20,
    quantity: 100,
    imageUrl: ""
}


const Products = () => {

    const [products, setProduct] = useState([])

    const handelCreate = (data) => {
        // handelCreate(AddProduct)

        products.push(data)
        const temp = products

        setProduct([...temp])

        console.log(products);
        

    }

    return (
        <div className="warp-products">
            <Nav />
            <div className="products-text">
                <div className="content-form">
                    <h3>Add New Products</h3>
                </div>
                <div className="content-list">
                    <h3>Product List</h3>
                </div>
            </div>

            <div className="products-content">
                <AddProductForm onCreate={handelCreate} />
                <ProductList data={products} />
            </div>


        </div>
    )
}
export default Products;