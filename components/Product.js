import React, { useState } from 'react';
const Product = (props) => {
    const {name,description,price,quantity,imageUrl} = props.data;
    return (
        <div>
            <img src={imageUrl}/>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{quantity} Lefts</p>
            <p>{price} BAHT</p>

        </div>


    )
}
export default Product;