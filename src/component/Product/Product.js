import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, seller, stock, price } = props.productInfo;
    return (
        <div className="single-product">
            <img src={img} alt="" />
            <div className="product-details">
                <h4>{name}</h4>
                <h5>Price: ${price}</h5>
                <p>By: {seller}</p>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={() => props.handleAddToCart(props.productInfo)} className="add-cart-btn">Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;