import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return (
    <>
      {props.number === 1 ? (
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

export default Card;
