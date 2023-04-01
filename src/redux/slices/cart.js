import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: []
    },
    reducers: {
        submitCart: (prevState, action) => {
            return {
                ...prevState,
                cartList: [...prevState.cartList, action.payload]
            }
        }
    }
})

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;