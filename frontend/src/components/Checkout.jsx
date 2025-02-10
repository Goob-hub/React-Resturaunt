import React from "react";

function CheckoutModal() {
    /* 
    Similar to the cart, use state to pop up the checkout modal if clicked
    */
    return (
        <form method="post">
            <h1>Checkout</h1>

            <p>Total amount: $0.00</p>

            <label htmlFor="fullName">Full Name</label>
            <input type="text" name="full_name" id="fullName" placeholder="Your name" />
            
            <label htmlFor="Email">E-Mail Adress</label>
            <input type="text" name="email" id="Email" placeholder="Your email" />

            <label htmlFor="Street">Street</label>
            <input type="text" name="street" id="Street" placeholder="Your street"/>

            <div>
                <label htmlFor="PostalCode">Postal Code</label>
                <input type="text" name="postal_code" id="PostalCode" placeholder="Your postal code"/>

                <label htmlFor="City">City</label>
                <input type="text" name="city" id="City" placeholder="Your city"/>
            </div>

            <div>
                <button>Close</button>
                <button type="submit">Submit</button>
            </div>

        </form>
    )
}

export default CheckoutModal;