import { useState } from 'react';

import './Shop.css'
import { useEffect } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = []
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])

    const handleAddToCart = (product) => {

        // const newCart = [...cart, product]
        // setCart(newCart);
        // addToDb(product.id)
        let newCart = []
        const exists = products.find(pd => pd.id === product.id)
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exists.quantity = exists.quantity + 1
        }
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className="cart-container">
            <div className="products">

                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Products>)
                }


            </div>

            <div className="order-summary">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;