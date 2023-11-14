export const cartReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        const updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        saveCartToLocalStorage(updatedCart);
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        const updatedCart = [...state.cart, { ...product, quantity: 1 }];
        saveCartToLocalStorage(updatedCart);
        return {
          ...state,
          cart: updatedCart,
        };
      }
    }
    case "FETCH_CART_FROM_LOCALSTORAGE": {
      const cartData = JSON.parse(localStorage.getItem("cart")) || [];
      return {
        ...state,
        cart: cartData,
      };
    }
    case "REMOVE_FROM_CART": {
      const product = action.payload;
      const updatedCart = state.cart.filter((item) => item.id !== product.id);
      saveCartToLocalStorage(updatedCart);
      return {
        ...state,
        cart: updatedCart,
      };
    }
    // case "REMOVE_CART": {
    //   removeCart();
    //   return { ...state, cart: [] };
    // }
    default: {
      return state;
    }
  }
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// const removeCart = () => {
//   if (typeof localStorage !== "undefined") {
//     localStorage.setItem("cart", JSON.stringify([]));
//   }
// };
