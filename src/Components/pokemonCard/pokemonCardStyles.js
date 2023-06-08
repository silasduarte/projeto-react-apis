import styled from "styled-components";
import tema from "../../tema";
const getBackgroundColor = (types) => {
  if (types.length > 0) {
    if (types[0].type.name === "normal" && types[1]) {
      return tema.colors.backgroundCard[types[1].type.name];
    }
  }
  return tema.colors.backgroundCard[types[0].type.name] || "#ffffff";
};
console.log(tema);

export const Container = styled.div`
  width: 30vw;
  height: 29vh;
  display: flex;
  align-items: end;
  margin-left: 1vw;
  position: relative;
`;
export const PokemonImage = styled.img`
  position: absolute;
  top: -1.5vh;
  width: 12vw;
  right: 0.4vw;
`;

export const CardBox = styled.div`
  width: 29.9vw;
  height: 23vh;
  background-color: ${({ types }) => getBackgroundColor(types)};
  border-radius: 0.6vw;
  display: flex;
  justify-content: space-between;
`;

export const InfoBox = styled.div`
  display: flex;
  padding: 3%;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
  width: 50%;
`;

export const BoxInfoAndType = styled.div`
  color: #ffffff;
  font-size: 3rem;
  font-style: bold;
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

export const BoxTipo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const IdPokemon = styled.p`
  font-size: 2vw;
`;
export const NomePokemon = styled.p`
  font-size: 2vw;
`;
export const DetailButtom = styled.button`
  color: #ffffff;
  text-decoration: underline;
  background: transparent;
  border: none;
  font-size: 2vw;
  z-index: 2;
  cursor: pointer;
`;

export const TypeImg = styled.img`
  width: 7vw;
  height: 4vh;
`;

export const CapturarButtom = styled.button`
  position: absolute;
  right: 0;
  height: 4.2vh;
  width: 7.6vw;
  margin-bottom: 1vh;
  margin-right: 1.9vw;
  border-radius: 0.4vw;
  border: none;
  font-size: 1vw;
`;
