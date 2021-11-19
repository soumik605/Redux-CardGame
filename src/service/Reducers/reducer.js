import { SHOW_ALL_CARDS } from "../Constaints";

const initialState = {
  showAllCards: true,
};

export default function showAllCardReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ALL_CARDS:
      return {
        showAllCards: false,
      };

    default:
      return state;
  }
}
