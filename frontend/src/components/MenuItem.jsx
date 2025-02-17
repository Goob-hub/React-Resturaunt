import React from "react";
import store from "../../store"
import Cookies from "js-cookie";

function MenuItem(props) {
    const state = store();
    const { addToCart } = state;

    return <div className="flex flex-col justify-center items-center">
        <img style={{height:"200px", width: "200px"}} src={`./${props.image_path}`} alt={`Picture of ${props.name}`} />
        <h1>{props.name}</h1>
        <h3>{props.price}</h3>
        <p>{props.description}</p>
        <button onClick={() => addToCart({...props})}>Add to cart</button>
    </div>
}

export default MenuItem;