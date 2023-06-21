import './Cart.css'
const Cart = ({ cart }) => {
    let total = 0;
    let totalShipping = 0;
    let quantity = 0
    for (const product of cart) {
        // product.quantity= product.quantity ||1;
        total += product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity
    }
    const tax = total * 7 / 100;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h2>Order section  </h2>

            <p>Cart Item: {quantity}</p>

            <p>Total Price:${total}</p>
            <p>Total Shipping Price:$ {totalShipping}</p>
            <p>Tax:$ {tax.toFixed(2)}</p>
            <h3>Grand Total:${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;