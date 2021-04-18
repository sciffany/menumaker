import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    activeRestaurant: "",
    activeCategory: 0,
    categories: [],
  },
  reducers: {
    changeActiveRestaurant: (state, action) => {
      state.activeRestaurant = action.payload;
    },
    addCategory: (state, action) => {
      state.activeCategory = action.payload;
      state.categories.push({ name: action.payload, foods: [] });
    },
    addFood: (state, action) => {
      state.categories[action.payload.categoryIndex].foods.push({
        url: action.payload.url,
        name: action.payload.name,
      });
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {
  addCategory,
  addFood,
  decrement,
  changeActiveRestaurant,
  incrementByAmount,
} = menuSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCategories = (state) => state.menu.categories;
export const selectRestaurant = (state) => state.menu.activeRestaurant;

export default menuSlice.reducer;
