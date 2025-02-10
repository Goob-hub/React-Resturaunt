import React from "react";

function CartItem(props) {
    return (
        <li>
            <p>Name - Amount x $Cost</p>
            <button>+</button>
            <p>Amount</p>
            <button>-</button>
        </li>
    );
}

export default CartItem