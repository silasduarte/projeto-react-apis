import {
  BoxInfoAndType,
  CapturarButtom,
  CardBox,
  Container,
  DetailButtom,
  IdPokemon,
  InfoBox,
  NomePokemon,
  PokemonImage,
  TypeImg,
} from "./pokemonCardStyles";
import pokebola from "../../assets/img/pokebola.svg";
import tipo1 from "../../assets/img/fire.svg";
import charmander from "../../assets/img/charmander.svg";

function PokemonCard() {
  return (
    <>
      <Container>
        <PokemonImage src={charmander} alt="Pokemon" />
        <CardBox>
          <InfoBox>
            <BoxInfoAndType>
              <IdPokemon>#04</IdPokemon>
              <NomePokemon>Charmander</NomePokemon>
              <TypeImg src={tipo1} alt="" />
            </BoxInfoAndType>
            <DetailButtom>
              <u> Detalhes</u>
            </DetailButtom>
          </InfoBox>
          <img src={pokebola} alt="" />
        </CardBox>
        <CapturarButtom>Capturar!</CapturarButtom>
      </Container>
    </>
  );
}
export default PokemonCard;
