import React, {useState, useEffect} from "react"
import axios from "axios"
import MenuItem from "./MenuItem"

function Menu() {
    /* 
    --------------------------
    How the menu should work:
    --------------------------

    1. Use axios to call our backend server to fetch menu data
    2. Map out menu item data from array to menu item component using props

    */

    let apiUrl = "http://localhost:4000/menu"

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        axios.get(apiUrl)
            .then(function (response) {
                setMenu(response.data);
                setLoading(false);
            })
            .catch(function (error) {
                setError(error);
                setLoading(false);
            });
      }, []);

      if(loading) {
        return <h1>Loading...</h1>
      }

      if(error) {
        return <h1> {`Error: ${error}`}</h1>
      }

    return <section>
        {menu.map((menuItem, index) => {
            let { id, name, price, description, image_path } = menuItem
            return <MenuItem key={index} id={id} name={name} price={price} description={description} image_path={image_path} />
        })}
    </section>
}

export default Menu;