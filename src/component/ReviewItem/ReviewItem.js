import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, key } = props.product;
    return (
        <div className="single-product">
            <div className="product-details">
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <div onClick={() => props.handleRemove(key)} className="add-cart-btn">Remove</div>
            </div>
        </div>
    );
};

export default ReviewItem;