import React from "react";
import store from "../../store"

function MenuItem(props) {
    const state = store();
    const { addToCart } = state;

    return <div className="flex flex-col justify-center items-center bg-[#1d1a16] rounded-lg space-y-3">
        <div className="w-full h-1/4">
            <img style={{height:"100%", width: "100%"}} src={`./${props.image_path}`} alt={`Picture of ${props.name}`} />
        </div>
        <h1 className="text-4xl font-semibold pr-3 pl-3">{props.name}</h1>
        <h3 className="text-md pt-1 pb-1 pl-6 pr-6 text-[#ffc404] bg-gradient-to-r from-[#29251c] to-[#2c2306]">{props.price}</h3>
        <p className="text-md pr-3 pl-3">{props.description}</p>
        <button className="text-lg bg-[#ffc404] text-[#46443c] font-medium p-3 mb-4 mt-2 rounded-md hover:bg-[#ffab04]" onClick={() => addToCart({...props})}>Add to cart</button>
    </div>
}

export default MenuItem;