import React from "react";

function CartItem(props) {
    return (
        <li className="flex flex-row justify-between items-start w-full p-2">
            <p>{props.name} - {props.amount} x ${props.price}</p>
            <div className="flex flex-row">
                <button onClick={() => {props.updateCart(props.name, props.amount - 1)}} className="flex flex-row items-end justify-center text-[#FFB22C] bg-black w-5 h-5 rounded-full font-bold">-</button>
                <p className="pl-2 pr-2">{props.amount}</p>
                <button onClick={() => {props.updateCart(props.name, props.amount + 1)}} className="flex flex-row items-end justify-center text-[#FFB22C] bg-black w-5 h-5 rounded-full font-bold">+</button>
            </div>
        </li>
    );
}

export default CartItem;