export const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type){
        case "ADD_TO_CART":
            return { ...state, cartList: payload.products };

        case "REMOVE_FROM_CART":
            return { ...state, cartList: payload.products };

        case "UPDATE_CART":
            return { ...state, totalPrice: payload.totalPrice };

            default:
                throw new Error("No such action type found in cart reducer");
    }

}