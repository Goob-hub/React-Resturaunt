import React, { useState } from "react";
import CartItem from "./CartItem";
import store from "../../store"

function CartModal(props) {
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

    const state = store();
    const { updateCart, cart } = state;

    return <div className="fixed top-0 right-0 h-full w-full bg-black/50 flex flex-row justify-center items-center">
        <section className="flex flex-col items-start justify-between bg-[#F2EFE7] text-black p-5 min-w-[50vw] max-h-[50vh] rounded-md">
            <h1 className="pl-2 p-0 text-left text-2xl font-semibold">Your cart</h1>
            <ul style={{margin: "auto"}} className="pt-2 w-full overflow-y-auto">
                {cart.items.length === 0 ? <h1>No items in your cart :(!</h1> : cart.items.map((item, id) => {
                    return <CartItem key={id} total={cart.total} updateCart={updateCart} {...item} />
                })}
            </ul>
            <h3 className="text-right self-end justify-self-end mt-3 mb-3">${cart.total.toFixed(2)}</h3>
            <div className="flex flex-row items-end justify-end justify-self-end self-end">
                <button className="text-black bg-transparent p-3 mr-5" onClick={props.showCart}>Close</button>
                <button className="text-black bg-[#FFB22C] rounded-md p-3" onClick={() => {
                    console.log("Show checkout");
                }}>Go To Checkout</button>
            </div>
        </section>
    </div>
}

export default CartModal;