import React from "react";
import Cookies from "js-cookie";

function MenuItem(props) {

    function addToCart() {
        if(!Cookies.get('cart')) Cookies.set('cart', JSON.stringify([]), 7);

        let cart = JSON.parse(Cookies.get('cart'));
        let cartItem = {...props};
        let hasItem = false;

        delete cartItem.image_path;
        cartItem.amount = 1;

        cart.forEach(item => {
            if(item.id === cartItem.id) {
                hasItem = true;
                item.amount++;
            }
        });

        if(!hasItem) {
            cart.push(cartItem);
        }

        Cookies.set('cart', JSON.stringify(cart), { expires: 7 });
    }

    return <div className="flex flex-col justify-center items-center">
        <img style={{height:"200px", width: "200px"}} src={`./${props.image_path}`} alt={`Picture of ${props.name}`} />
        <h1>{props.name}</h1>
        <h3>{props.price}</h3>
        <p>{props.description}</p>
        <button onClick={addToCart}>Add to cart</button>
    </div>
}

export default MenuItem;