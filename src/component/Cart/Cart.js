import React from 'react';

const Cart = (props) => {
    const { cart } = props;

    // const total = cart.reduce((previous, current) => previous + current.price, 0);
    let total = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shippingCharge = total * 0.1;
    const beforeTax = total + shippingCharge;
    const tax = beforeTax * 0.10;
    const grandTotal = beforeTax + tax;


    return (
        <div>
            <table className="table">
                <tbody>
                    <tr>
                        <td colSpan="2">Order Summary</td>
                    </tr>
                    <tr>
                        <td>Items ordered:</td>
                        <td>{totalQuantity}</td>
                    </tr>
                    <tr>
                        <td>Total Product Price</td>
                        <td>${total.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Shipping & Handling:</td>
                        <td>${shippingCharge.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Total before tax:</td>
                        <td>${beforeTax.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax:</td>
                        <td>${tax.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Total Price:</td>
                        <td>${grandTotal.toFixed(2)}</td>
                    </tr>

                </tbody>
            </table>
            {props.children}
        </div>
    );
};

export default Cart;