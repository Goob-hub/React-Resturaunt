import React from "react";

function MenuItem(props) {
    return <div>
        <img style={{height:"200px", width: "200px"}} src={`./${props.image_path}`} alt={`Picture of ${props.name}`} />
        <h1>{props.name}</h1>
        <h3>{props.price}</h3>
        <p>{props.description}</p>
        <button>Add to cart</button>
    </div>
}

export default MenuItem;