import React from "react";
import styled from "styled-components";
import {
  openACard,
  closeACard,
  closeOpenCards,
  showCard,
} from "../service/Actions/actions";
import { connect } from "react-redux";

const Card = (props) => {
  const OpenCardClick = () => {
    if (props.cards.opencards.length === 1) {
      props.closeACard(props.number);
    }
  };

  const CloseCardClick = () => {
    if (props.cards.opencards.length === 0) {
      props.openACard(props.number);
    } else if (props.cards.opencards.length === 1) {
      props.openACard(props.number);

      setTimeout(function () {
        if (
          (props.number === 1 && props.cards.opencards[0] === 2) ||
          (props.number === 2 && props.cards.opencards[0] === 1)
        ) {
          props.showCard(1, 2);
          props.closeOpenCards();
        } else if (
          (props.number === 3 && props.cards.opencards[0] === 4) ||
          (props.number === 4 && props.cards.opencards[0] === 3)
        ) {
          props.showCard(3, 4);
          props.closeOpenCards();
        } else if (
          (props.number === 5 && props.cards.opencards[0] === 6) ||
          (props.number === 6 && props.cards.opencards[0] === 5)
        ) {
          props.showCard(5, 6);
          props.closeOpenCards();
        } else if (
          (props.number === 7 && props.cards.opencards[0] === 8) ||
          (props.number === 8 && props.cards.opencards[0] === 7)
        ) {
          props.showCard(7, 8);
          props.closeOpenCards();
        } else if (
          (props.number === 9 && props.cards.opencards[0] === 10) ||
          (props.number === 10 && props.cards.opencards[0] === 9)
        ) {
          props.showCard(9, 10);
          props.closeOpenCards();
        } else if (
          (props.number === 11 && props.cards.opencards[0] === 12) ||
          (props.number === 12 && props.cards.opencards[0] === 11)
        ) {
          props.showCard(11, 12);
          props.closeOpenCards();
        } else if (
          (props.number === 13 && props.cards.opencards[0] === 14) ||
          (props.number === 14 && props.cards.opencards[0] === 13)
        ) {
          props.showCard(13, 14);
          props.closeOpenCards();
        } else if (
          (props.number === 15 && props.cards.opencards[0] === 16) ||
          (props.number === 16 && props.cards.opencards[0] === 15)
        ) {
          props.showCard(15, 16);
          props.closeOpenCards();
        } else if (
          (props.number === 17 && props.cards.opencards[0] === 18) ||
          (props.number === 18 && props.cards.opencards[0] === 17)
        ) {
          props.showCard(17, 18);
          props.closeOpenCards();
        } else if (
          (props.number === 19 && props.cards.opencards[0] === 20) ||
          (props.number === 20 && props.cards.opencards[0] === 19)
        ) {
          props.showCard(19, 20);
          props.closeOpenCards();
        } else {
          props.closeOpenCards();
        }
      }, 1500);
    }
  };

  return (
    <>
      {props.cards.showcards.length !== 0 &&
      props.cards.showcards.includes(props.number) ? (
        props.number === 1 ? (
          <Cards src="/Images/Book.jpg" />
        ) : props.number === 2 ? (
          <Cards src="/Images/Book.jpg" />
        ) : props.number === 3 ? (
          <Cards src="/Images/Car.webp" />
        ) : props.number === 4 ? (
          <Cards src="/Images/Car.webp" />
        ) : props.number === 5 ? (
          <Cards src="/Images/Flower.jpg" />
        ) : props.number === 6 ? (
          <Cards src="/Images/Flower.jpg" />
        ) : props.number === 7 ? (
          <Cards src="/Images/Nature.jpg" />
        ) : props.number === 8 ? (
          <Cards src="/Images/Nature.jpg" />
        ) : props.number === 9 ? (
          <Cards src="/Images/Ben.jpg" />
        ) : props.number === 10 ? (
          <Cards src="/Images/Ben.jpg" />
        ) : props.number === 11 ? (
          <Cards src="/Images/doraemon.png" />
        ) : props.number === 12 ? (
          <Cards src="/Images/doraemon.png" />
        ) : props.number === 13 ? (
          <Cards src="/Images/Hulk.webp" />
        ) : props.number === 14 ? (
          <Cards src="/Images/Hulk.webp" />
        ) : props.number === 15 ? (
          <Cards src="/Images/ShinChan.jpg" />
        ) : props.number === 16 ? (
          <Cards src="/Images/ShinChan.jpg" />
        ) : props.number === 17 ? (
          <Cards src="/Images/TJ.jpg" />
        ) : props.number === 18 ? (
          <Cards src="/Images/TJ.jpg" />
        ) : props.number === 19 ? (
          <Cards src="/Images/Thor.jpg" />
        ) : (
          props.number === 20 && <Cards src="/Images/Thor.jpg" />
        )
      ) : props.cards.opencards &&
        props.cards.opencards.includes(props.number) ? (
        props.number === 1 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="/Images/Book.jpg"
          />
        ) : props.number === 2 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="/Images/Book.jpg"
          />
        ) : props.number === 3 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="/Images/Car.webp"
          />
        ) : props.number === 4 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="/Images/Car.webp"
          />
        ) : props.number === 5 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="/Images/Flower.jpg"
          />
        ) : props.number === 6 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="/Images/Flower.jpg"
          />
        ) : props.number === 7 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="/Images/Nature.jpg"
          />
        ) : props.number === 8 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="/Images/Nature.jpg"
          />
        ) : props.number === 9 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="/Images/Ben.jpg"
          />
        ) : props.number === 10 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="/Images/Ben.jpg"
          />
        ) : props.number === 11 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="/Images/doraemon.png"
          />
        ) : props.number === 12 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="/Images/doraemon.png"
          />
        ) : props.number === 13 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="/Images/Hulk.webp"
          />
        ) : props.number === 14 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="/Images/Hulk.webp"
          />
        ) : props.number === 15 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="/Images/ShinChan.jpg"
          />
        ) : props.number === 16 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="/Images/ShinChan.jpg"
          />
        ) : props.number === 17 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="/Images/TJ.jpg"
          />
        ) : props.number === 18 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="/Images/TJ.jpg"
          />
        ) : props.number === 19 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="/Images/Thor.jpg"
          />
        ) : (
          props.number === 20 && (
            <Cards
              style={{ backgroundColor: "grey" }}
              onClick={() => OpenCardClick()}
              src="/Images/Thor.jpg"
            />
          )
        )
      ) : (
        <Cards
          onClick={() => CloseCardClick()}
          src={"/Images/CardBack.jpg"}
          alt=""
        />
      )}
    </>
  );
};

const Cards = styled.img`
  margin: 10px;
  width: 130px;
  height: 130px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 1px black;
`;

const mapStateToProps = (state) => ({
  cards: state.OpenCardReducer,
});

const mapDispatchToProps = (dispatch) => ({
  openACard: (number) => dispatch(openACard(number)),
  closeACard: (number) => dispatch(closeACard(number)),
  closeOpenCards: () => dispatch(closeOpenCards()),
  showCard: (num1, num2) => dispatch(showCard(num1, num2)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
