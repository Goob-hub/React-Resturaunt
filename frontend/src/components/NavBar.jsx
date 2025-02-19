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
            <h1 className="ml-2 tracking-widest text-2xl font-bold text-[#ffc404] text-center resturaunt-title">GOOBS</h1>
        </div>
        <button className="justify-self-end text-2xl text-[#ffc404] tracking-wider" onClick={handleCartClick}>Cart ({cart.items.length})</button>

        {showCart ? <CartModal showCart={handleCartClick} /> : null}

        {showCheckout ? <CheckoutModal showCheckout={showCheckout} /> : null}
    </nav>
}

export default NavBar;