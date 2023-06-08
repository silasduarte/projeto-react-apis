import styled from "styled-components";

export const Container = styled.header`
  background-color: #ffffff;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  width: 100%;
  align-items: center;
  height: 10rem;
`;
export const BotaoPokedex = styled.button`
  grid-column: 13/16;
  width: 14.125rem;
  height: 3.563rem;
  border: none;
  border-radius: 0.5rem;
  padding: 0.25rem, 0.625rem, 0.25rem, 0.625rem;
  background: #33a4f5;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: #ffffff;
  cursor: pointer;
`;

export const Logo = styled.img`
  grid-column: 7/11;
  width: 19.188rem;
  height: 7.063rem;
`;

export const BotaoHome = styled.button`
  z-index: 2;
  grid-column: 2/5;
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  width: 15rem;
  height: 2.25rem;
  background: transparent;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  img {
    width: 1.563;
    height: 1.563;
    text-decoration: none;
  }
`;

export const ButtonRemovePokemon = styled.button`
  height: 30%;
  border: none;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 0.8vw;
  color: #ffffff;
  cursor: pointer;
  align-self: center;
  grid-column: 13/16;
  width: 70%;
  background: #ff6262;
  border-radius: 0.4vw;
  z-index: 2;
`;
