import React, { useState } from 'react';
import CartModal from './Cart';
import CheckoutModal from './Checkout';

function NavBar() {
    // Basic nav bar with title on left and cart on right, should stick to top of page while user scrolls down

    let [cartShown, showCart] = useState(false);
    let [checkoutShown, showCheckout] = useState(false);

    return <nav>
        <div>
            <img src="./images/Logo.png" alt="Resturaunt logo" />
            <h1>Goobs resturaunt</h1>
        </div>

        <button>Cart button</button>

        {cartShown ? <CartModal /> : null}

        {checkoutShown ? <CheckoutModal /> : null}
    </nav>
}

export default NavBar;