import React, { useState } from 'react';
import CartModal from './Cart';
import store from "../../store";
import CheckoutModal from './Checkout';

function NavBar() {
    // Basic nav bar with title on left and cart on right, should stick to top of page while user scrolls down

    const state = store();
    const { cart } = state;
    let [showCart, toggleCart] = useState(false);
    let [showCheckout, toggleCheckout] = useState(false); 

    function handleCartClick() {
        toggleCart(!showCart);
    }

    return <nav className="pl-5 pr-5 w-full h-[10vh] flex flex-row justify-between items-center fixed top-0 left-0">
        <div className="flex flex-row justify-center items-center">
            <img className="size-[50px] rounded-full border-4 border-[#FFB22C]" src="./images/Logo.jpg" alt="Resturaunt logo" />
            <div className="@container">
                <h1 className="text-center resturaunt-title">Goobs</h1>
            </div>
        </div>
        <button className="justify-self-end" onClick={handleCartClick}>Cart ({cart.items.length})</button>

        {showCart ? <CartModal showCart={handleCartClick} /> : null}

        {showCheckout ? <CheckoutModal showCheckout={showCheckout} /> : null}
    </nav>
}

export default NavBar;