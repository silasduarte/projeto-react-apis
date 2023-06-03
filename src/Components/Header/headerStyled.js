import styled from "styled-components";

export const Container = styled.header`
  border: 1px solid black;
  height: 15vh;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
`;
export const BotaoPokedex = styled.button`
  color: white;
  width: 15vw;
  max-width: 25vh;
  min-height: 10vh;
  background: #33a4f5;
  border-radius: 1vw;
  border: none;
  cursor: pointer;
  font-size: 2vw;
  font-family: "Poppins", sans-serif;
`;

export const Logo = styled.img`
  max-width: 15vw;
  min-height: 20vw;
`;

export const BotaoHome = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5vw;
  width: 14vw;
  img {
    height: 2vh;
  }
`;
