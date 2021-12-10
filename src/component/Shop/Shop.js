import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [matchedProducts, setMacthedProducts] = useState([]);
    const [cart, setCart] = useCart();
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0);
    const size = 10;
    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
            .then(response => response.json())
            .then(data => {
                setProducts(data.products)
                setMacthedProducts(data.products)
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            })
    }, [page]);
    //get data from local storage
    useEffect(() => {
        if (products.length) {
            const storedProducts = getStoredCart();
            const updateCart = [];
            for (const key in storedProducts) {
                const newStoredProduct = products.find(product => product.key === key);
                if (newStoredProduct) {
                    const quantity = storedProducts[key];
                    newStoredProduct.quantity = quantity;
                    updateCart.push(newStoredProduct);
                }

            }
            // setCart(updateCart);
        }
    }, [products]);

    const handleAddToCart = product => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const remaining = cart.filter(pd => pd.key !== product.key);
            exists.quantity += 1;
            newCart = [...remaining, product]
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDb(product.key);
    }

    const handleSearchBox = event => {
        const searchText = event.target.value;
        const filteredProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setMacthedProducts(filteredProduct);
    }
    return (
        <div>
            <div className="search-container">
                <input type="text"
                    onChange={handleSearchBox}
                    placeholder="search products" />
            </div>
            <div className="shop-container">
                <div className="products">
                    {
                        matchedProducts.map(product => <Product
                            productInfo={product}
                            key={product.key}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                    <div className="pagination">
                        {
                            [...Array(pageCount).keys()].map(number => <button
                                key={number}
                                onClick={() => setPage(number)}
                                className={number === page ? "selected" : ""}
                            >{number + 1}</button>
                            )
                        }
                    </div>
                </div>
                <div className="cart-container">
                    {
                        <Cart cart={cart}>
                            <Link to='/orders'>
                                <button className="add-cart-btn">Review your Order</button>
                            </Link>
                        </Cart>
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;