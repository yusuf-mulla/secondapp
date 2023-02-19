const initialState = {
  cart: [],
  product:[],
  category:[],
  counterNew:0
};
export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: action.payload,
      };
      break;
    case "ADD_PRODUCT":
      return {
        ...state,
        product: action.payload,
      };
      break;
    case "ADD_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
      break;
    case "ADD_COUNTER":
      return {
        ...state,
        counterNew: action.payload,
      };
      break;
  }
  return state;
};
