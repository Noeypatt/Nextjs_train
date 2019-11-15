import React from 'react'


const Product = props => {

    const { name, desciption, price, quantity, imageUrl } = props.data

    return (
        <div>
            <img src={imageUrl} />
            <h3>{name}</h3>
            <p>{desciption != null ? "คำอธิบาย " : ""}{desciption}</p>
            <p>{quantity != null ? " จำนวน " : ""} {quantity} {quantity != null ? " ชิ้น" : ""}</p>
            <p>{price}{price != null ? " บาท" : ""}</p>
        </div >
    )
}
export default Product;