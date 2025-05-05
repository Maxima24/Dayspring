import { createSlice, current } from "@reduxjs/toolkit";
const initialState ={
   
    cart:[
       
    ]

    }



const cartSlice = createSlice({
    name:"cart",initialState,reducers:{
        addToCart:(state,action)=>{
            const items = action.payload
            
            state.cart.push({...items, quantity:1})

        },
        // removing from shop;
        deleteFromCart:(state,action)=>{
          state.cart=  state.cart.filter((item=>item.id !== action.payload))
        },
        clearCart:(state)=>{
            state.cart=[]
        },
        increaseQuantity:(state,action)=>{
            // console.log(state.cart.cart)
            console.log(state.cart)           // ← this is your array (a Proxy‑draft)
            const id = action.payload;
            // find on the array:
            const item = state.cart.find(item => item.id === id);
            if (item) {
              item.quantity += 1;
              item.totalPrice = item.quantity * item.price;
            }
            console.log(current(state.cart))
            
            // const item = state.cart.find((items)=>items.id === action.payload)
            // console.log(item)
            // state.cart.cart.quantity=item.quantity++

        },
      
         decreaseQuantity:(state,action)=>{
            console.log(state.cart)           // ← this is your array (a Proxy‑draft)
            const id = action.payload;
            // find on the array:
            const item = state.cart.find(item => item.id === id);
            if (item) {
              item.quantity -= 1;
              item.totalPrice = item.quantity * item.price;
            }
            console.log(current(state.cart))

        }




    }
})
export const {addToCart,deleteFromCart,clearCart,increaseQuantity,decreaseQuantity} = cartSlice.actions
export default cartSlice.reducer