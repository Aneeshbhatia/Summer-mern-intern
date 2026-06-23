import {Link} from 'react-router-dom';

function Cart({cartItems}){
    if(cartItems.length === 0){
        return (
        <section className="cartPage emptyCart">
            <h1>Your Cart is Empty</h1>
            <p>You have not added any key chain yet</p>

            <Link to="/" class="continueShoppingBtn">Continue Shopping</Link>
        </section>
        )
    }

    const totalAmount= cartItems.reduce((total, item)=> total + item.price*item.quantity, 0);

    return (
      <section className="cartPage">
        <h1>Cart Summary</h1>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </section>
    )
}

export default Cart;