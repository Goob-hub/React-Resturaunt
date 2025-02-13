import React, { useState } from "react";
import CartItem from "./CartItem";
import Cookies from "js-cookie";

function CartModal(props) {

    let [cart, editCart] = useState(JSON.parse(Cookies.get("cart")) || []);

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

    function updateCart(itemName, newAmount) {
        let newCart = cart.filter(item => {
            if(item.name === itemName) {
                item.amount = newAmount;
            }

            if(item.amount > 0) {
                return true;
            }
        });

        editCart(newCart);

        Cookies.set("cart", JSON.stringify(newCart));
    }

    return <div className="fixed top-0 right-0 h-full w-full bg-black/50 flex flex-row justify-center items-center">
        <section className="flex flex-col items-start justify-between bg-[#F2EFE7] text-black p-5 min-w-[50vw] min-h-[50vh] rounded-md">
            <h1 className="pl-5 p-0 text-left">Your cart</h1>
            <ul className="pl-5 flex flex-row justify-center items-center w-full">
                {cart.map((item, id) => {
                    return <CartItem key={id} updateCart={updateCart} {...item} />
                })}
            </ul>
            <h3 className="text-right self-end justify-self-end">Total cost</h3>
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