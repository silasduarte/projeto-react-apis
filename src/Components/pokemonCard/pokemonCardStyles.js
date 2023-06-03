import styled from "styled-components";

export const Container = styled.div`
  width: 25vw;
  height: 29vh;
  display: flex;
  align-items: flex-end;
  position: relative;
`;

export const CardBox = styled.div`
  width: 30vw;
  height: 23vh;
  background-color: #eaab7d;
  border-radius: 0.6vw;
  display: flex;
  justify-content: space-between;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 1.1vw;
  overflow: hidden;
`;

export const BoxInfoAndType = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6vh;
  font-family: "Inter";
`;

export const DetailButtom = styled.button`
  background-color: transparent;
  border: none;
  width: 4.5vw;
  color: #ffffff;
  cursor: pointer;
  font-size: 0.8vw;
`;

export const IdPokemon = styled.p`
  font-size: 0.8vw;
`;

export const NomePokemon = styled.p`
  font-size: 1.4vw;
`;

export const TypeImg = styled.img`
  width: 4.5vw;
`;

export const PokemonImage = styled.img`
  position: absolute;
  top: 0;
  right: 0.1vw;
  height: 10vw;
`;

export const CapturarButtom = styled.button`
  position: absolute;
  bottom: 2vh;
  right: 1.8vw;
  background-color: #ffffff;
  position: absolute;
  width: 7.6vw;
  height: 4.2vh;
  border-radius: 0.7vw;
  cursor: pointer;
  font-size: 1vw;
  border: none;
`;
