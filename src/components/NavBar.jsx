import React from 'react';
import Cart from './Cart';
import Checkout from './Checkout'

function NavBar() {
    // Basic nav bar with title on left and cart on right, should stick to top of page while user scrolls down
    return <nav>
        <div>
            <img src="" alt="Resturaunt logo" />
            <h1>Goobs resturaunt</h1>
        </div>
        <Cart />
        <Checkout />
    </nav>
}

export default NavBar;