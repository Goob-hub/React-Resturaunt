import React, { useState } from "react";
import CartItem from "./CartItem";

function CartModal() {
    /* 
    The cart should persist even when the user closes the browser, store cart data in users browser
    
    Hide a modal window and use state to manage if the modal should be displayed
    -----------------------------------------
    The modal should contain the following: 
    -----------------------------------------
    1. The current items within the users cart and buttons for the user to add more of the same items or remove them
    2. The total price of the users cart
    3. A button to close the modal and a button that takes the user to the checkout page (or another modal?)
    */

    return <div>
        <section>
            <h1>Your cart</h1>
            <ul>
                <CartItem />
            </ul>
            <h3>Total cost</h3>
            <div>
                <button>Close</button>
                <button>Checkout</button>
            </div>
        </section>
    </div>
}

export default CartModal;