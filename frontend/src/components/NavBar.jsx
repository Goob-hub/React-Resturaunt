import React, { useState } from 'react';
import CartModal from './Cart';
import CheckoutModal from './Checkout';
import Cookie from "js-cookie";

function NavBar() {
    // Basic nav bar with title on left and cart on right, should stick to top of page while user scrolls down

    let [showCart, toggleCart] = useState(false);
    let [showCheckout, toggleCheckout] = useState(false); 

    function handleCartClick() {
        toggleCart(!showCart);
    }

    return <nav className="max-w-9/10 h-[10vh] flex flex-row justify-between items-center">
        <div className="flex flex-row justify-center items-center">
            <img className="size-[50px]" src="./images/Logo.png" alt="Resturaunt logo" />
            <div className="@container">
                <h1 className="text-center resturaunt-title">Goobs resturaunt</h1>
            </div>
        </div>
        <button className="justify-self-end" onClick={handleCartClick}>Cart button</button>

        {showCart ? <CartModal showCart={handleCartClick} /> : null}

        {showCheckout ? <CheckoutModal showCheckout={showCheckout} /> : null}
    </nav>
}

export default NavBar;