import { Type } from "./action.type";

export const initialState = {
  basket: [],
  user: null,
  language: { code: "EN", name: "English", flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" },
};

export const reducer = (state, action) => {
  switch (action.type) {

    case Type.ADD_TO_BASKET: {
      const { item } = action;
      // Ensure price is a number and amount is valid
      const price = Number(item.price) || 0;

      const existingItem = state.basket.find(
        (basketItem) => basketItem.id === item.id
      );

      if (!existingItem) {
        return {
          ...state,
          basket: [
            ...state.basket,
            { ...item, price, amount: 1 }
          ],
        };
      }

      return {
        ...state,
        basket: state.basket.map((basketItem) =>
          basketItem.id === item.id
            ? { ...basketItem, amount: basketItem.amount + 1 }
            : basketItem
        ),
      };
    }

    case Type.REMOVE_FROM_BASKET: {
      const index = state.basket.findIndex(item => item.id === action.id);

      if (index === -1) return state;

      const newBasket = [...state.basket];

      if (newBasket[index].amount > 1) {
        newBasket[index] = {
          ...newBasket[index],
          amount: newBasket[index].amount - 1,
        };
      } else {
        newBasket.splice(index, 1);
      }

      return {
        ...state,
        basket: newBasket,
      };
    }
    case Type.EMPTY_BASKET:
      return {
        ...state,
        basket: [],
      }
    case Type.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case Type.SET_LANGUAGE:
      return {
        ...state,
        language: action.language,
      };

    default:
      return state;
  }
};
