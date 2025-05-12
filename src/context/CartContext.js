import { createContext } from "react";
import { cartReducer } from "../reduser/cartReducer";
import { useContext, useReducer } from "react";

const initialState = {
  cartList: [],
  totalPrice: 0,
};

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (product) => {
        const updatedCart = state.cartList.concat(product);
        calculateTotalItems(updatedCart);
        dispatch({
            type: "ADD_TO_CART",
            payload: {
               products: updatedCart,
            },
        })
    }

    const removeFromCart = (product) => {
        const updatedCart = state.cartList.filter(item => item.id !== product.id);
        calculateTotalItems(updatedCart);
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
              products: updatedCart,
            },
        })
    }

    const calculateTotalItems = (products) => {
          let totalPrice = 0;

            products.forEach(product => {totalPrice = totalPrice + product.price});

            dispatch({
                type: "UPDATE_CART",
                payload: {
                    totalPrice: totalPrice
                }
            })
    }


    const value = {
        cartList: state.cartList,
        totalPrice: state.totalPrice,
        addToCart,
        removeFromCart
    }
    
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
return context;
}