const { createSlice } = require("@reduxjs/toolkit")

const initialstate=[];

const cartSlice = createSlice({
  name: "cart",

  initialState:initialstate,

  reducers: {
    add(state, action) {
      // Redux says We cannot mutate state directly //
      alert(action.payload);
      state.push(action.payload); 
    },
    remove(state, action) {
      state=state.filter(item=>item.id !==action.payload);
    }
    
  }

});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;