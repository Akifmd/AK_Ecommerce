const initialstate = {
  products: [],
};

export const getProductReducer = (state = initialstate, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case "GetProducts":
      return { ...state, products: payload };
    default:
      return state;
  }
};

const initial_state = {
  product: [],
};
export const getSingleProductReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "SingleProduct":
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

const INIT_STATE = {
  carts: [],
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const IteamIndex = state.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );

      if (IteamIndex >= 0) {
        state.carts[IteamIndex].qnty += 1;
        return {
          ...state,
          carts: [...state.carts],
        };
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "DEL_CART":
      return {
        carts: [],
      };
    case "RMV_CART":
      const data = state.carts.filter(
        (element) => element.id !== action.payload.id
      );
      return {
        ...state,
        carts: data,
      };

    case "RMV_ONE":
      const IteamIndex_dec = state.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );

      if (state.carts[IteamIndex_dec].qnty > 1) {
        const dltiteams = (state.carts[IteamIndex_dec].qnty -= 1);

        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[IteamIndex_dec].qnty === 1) {
        const data = state.carts.filter((el) => el.id !== action.payload.id);

        return {
          ...state,
          carts: data,
        };
      }
      break;
    default:
      return state;
  }
};
