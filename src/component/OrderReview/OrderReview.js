import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import { deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [cart, setCart] = useCart();
    const history = useHistory();
    const handleRemove = key => {
        const updateCart = cart.filter(product => product.key !== key);
        setCart(updateCart);
        deleteFromDb(key);
    };
    const handlePlaceOrder = () => {
        history.push('/shipping');
        // setCart([]);
        // clearTheCart();

    }

    return (
        <div className="shop-container">
            <div className="products">
                {
                    cart.map(product => <ReviewItem
                        handleRemove={handleRemove}
                        key={product.key}
                        product={product}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="add-cart-btn">Proceed to Shipping</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;