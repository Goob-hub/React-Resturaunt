import React, { useEffect } from "react";
import store from "../../store";
import axios from "axios";

function CheckoutModal(props) {
    /* 
    Similar to the cart, use state to pop up the checkout modal if clicked
    */

    const state = store();
    const { cart } = state;
    const apiUrl = "http://localhost:4000/orders";

    function handleOrder(formData) {
        const data = {};
        
        for (const key of formData.keys()) {
            data[key] = formData.get(key);
        }

        console.log(data);

        axios.post(apiUrl, data)
            .then(function (response) {
            console.log(response.status);
            })
            .catch(function (error) {
            console.error(error.status);
            }).finally(function () {
            props.showCheckout();
            });
    }

    return (
        <div className="fixed top-0 right-0 h-full w-full bg-black/50 flex flex-row justify-center items-center">
            <form action={handleOrder} autoComplete="off" className="flex flex-col items-start justify-between bg-[#F2EFE7] text-black p-5 min-w-[50vw] max-h-[50vh] rounded-md">
                <h1 className="p-0 text-left text-2xl font-semibold">Checkout</h1>

                <p className="">Total amount: ${cart.total.toFixed(2)}</p>

                <div className="overflow-y-auto flex flex-col items-start justify-between py-3">
                    <label htmlFor="fullName" className="font-bold">Full Name</label>
                    <input required defaultValue="balls" className="block rounded-md focus:border-indigo-500 my-2 focus:border-solid focus:border-2 bg-white min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" type="text" name="full_name" id="fullName" placeholder="Your name" />
                    
                    <label htmlFor="Email" className="font-bold">E-Mail Adress</label>
                    <input required defaultValue="balls" className="block rounded-md focus:border-indigo-500 my-2 focus:border-solid focus:border-2 bg-white min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" type="text" name="email" id="Email" placeholder="Your email" />

                    <label htmlFor="Street" className="font-bold">Street</label>
                    <input required defaultValue="balls" className="block rounded-md focus:border-indigo-500 my-2 focus:border-solid focus:border-2 bg-white min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" type="text" name="street" id="Street" placeholder="Your street"/>

                    <div className="flex flex-row flex-wrap justify-start items-center">
                        <div className="flex flex-col justify-center items-center mr-3">
                            <label className="self-start font-bold" htmlFor="PostalCode">Postal Code</label>
                            <input required defaultValue="balls" className="block rounded-md focus:border-indigo-500 my-2 focus:border-solid focus:border-2 bg-white min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" type="text" name="postal_code" id="PostalCode" placeholder="Your postal code"/>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label className="self-start font-bold" htmlFor="City">City</label>
                            <input required defaultValue="balls" className="block rounded-md focus:border-indigo-500 my-2 focus:border-solid focus:border-2 bg-white min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" type="text" name="city" id="City" placeholder="Your city"/>
                        </div>
                    </div>

                </div>
                <div className="flex flex-row items-end justify-end justify-self-end self-end">
                    <button type="button" className="text-black bg-transparent p-3 mr-5" onClick={props.showCheckout}>Close</button>
                    <button type="submit" className="text-black bg-[#FFB22C] rounded-md p-3">Submit order</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutModal;