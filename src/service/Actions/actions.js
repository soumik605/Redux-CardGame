import {
  CLOSE_A_CARD,
  CLOSE_OPEN_CARDS,
  OPEN_A_CARD,
  SHOW_ALL_CARDS,
  SHOW_CARD,
} from "../Constaints";

export const showAllCards = () => {
  return {
    type: SHOW_ALL_CARDS,
  };
};

export const openACard = (number) => {
  return {
    type: OPEN_A_CARD,
    payload: number,
  };
};

export const closeACard = (number) => {
  return {
    type: CLOSE_A_CARD,
    payload: number,
  };
};

export const closeOpenCards = (numbers) => {
  return {
    type: CLOSE_OPEN_CARDS,
    payload: numbers,
  };
};


export const showCard = (num1,num2) => {
  return {
    type: SHOW_CARD,
    payload: [num1,num2],
  };
};
