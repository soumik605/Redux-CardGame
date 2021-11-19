import {
  OPEN_A_CARD,
  CLOSE_A_CARD,
  CLOSE_OPEN_CARDS,
  SHOW_CARD,
} from "../Constaints";

const initialState = {
  opencards: [],
  showcards: [],
  clicks: 0,
};

export default function OpenCardReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_A_CARD:
      return {
        ...state,
        opencards: [...state.opencards, action.payload],
        clicks: state.clicks + 1,
      };

    case CLOSE_A_CARD:
      return {
        ...state,
        opencards: state.opencards.filter(
          (card) => card !== action.payload
        ),
      };

    case CLOSE_OPEN_CARDS:
      return {
        ...state,
        opencards: [],
      };

    case SHOW_CARD:
      return {
        ...state,
        showcards: [...state.showcards, action.payload[0], action.payload[1]],
      };

    default:
      return state;
  }
}
