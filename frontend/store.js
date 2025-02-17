import { create } from 'zustand';
import Cookies from 'js-cookie';

const store = create((set, get) => ({
  cart: !Cookies.get("cart") ? {items: [], total: 0} : JSON.parse(Cookies.get("cart")),
  addToCart: (item) => {
    let cart = get().cart;
    let cartItem = {...item};
    let hasItem = false;

    delete cartItem.image_path;
    cartItem.amount = 1;

    cart.items.forEach(item => {
        if(item.id === cartItem.id) {
          item.amount++;
          hasItem = true;
        }
    });

    if(!hasItem) { cart.items.push(cartItem); }

    cart.total += parseFloat(cartItem.price);

    set({cart: cart});
    Cookies.set("cart", JSON.stringify(cart), { expires: 7 });
  },
  updateCart: (itemName, newAmount) => {
    let oldCart = get().cart;
    let newTotal = 0;
    let newItems;
    let newCart;

    newItems = oldCart.items.filter(item => {
      if(item.name === itemName) {
        item.amount = newAmount;
      }
      
      newTotal += parseFloat(item.price * item.amount);
      
      if(item.amount > 0) {
        return true;
      }
    });

    newCart = {items: newItems, total: newTotal};

    set({cart: newCart});
    Cookies.set("cart", JSON.stringify(newCart), { expires: 7 });
  },
}));

export default store;