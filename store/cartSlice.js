import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    cartItems:[],
    name:'test',
}
export const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers:{},
})

//export const {} = cartSlice.actions
export default cartSlice.reducer;