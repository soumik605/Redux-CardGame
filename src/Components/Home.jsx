import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import OpenCards from "./OpenCards";
import { connect } from "react-redux";
import { showAllCards } from "../service/Actions/actions";

const Home = (props) => {

  

  function refreshPage() {
    window.location.reload(false);
  }


  useEffect(()=>{
    setTimeout(function () {
      props.showAllCards();
    }, 4000);
  },[])


  return (
    <>
      <Main>
        <CardHolder>
          {props.cardData.showAllCards
            ? props.list.map((id) => <OpenCards key={id} number={id} />)
            : props.list.map((id) => (
                <Card
                  key={id}
                  number={id}
                 
                />
              ))}
        </CardHolder>
        <BtnGroup>
          <button onClick={refreshPage}>Reset</button>
          <button>{props.OpenCardReducer.clicks} Clicks</button>
        </BtnGroup>
      </Main>
    </>
  );
};

const Main = styled.div`
  background-image: linear-gradient(to right, #000428, #004e92);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const CardHolder = styled.div`
  width: 750px;
  height: 600px;
  margin-top: calc((100vh - 600px) / 2);
  margin-left: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const BtnGroup = styled.div`
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;

  & > button {
    padding: 15px 20px;
    font-size: 16px;
    background-color: lightblue;
    margin: 20px auto;
    border-radius: 20px;
    border: none;
    box-shadow: 5px 6px 15px 0px black;

    &:hover {
      background-color: #2525ff;
      color: white;
    }
  }
`;

const mapStateToProps = (state) => ({
  cardData: state.showAllCardReducer,
  OpenCardReducer: state.OpenCardReducer,
});

const mapDispatchToProps = (dispatch) => ({
  showAllCards: () => dispatch(showAllCards()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
