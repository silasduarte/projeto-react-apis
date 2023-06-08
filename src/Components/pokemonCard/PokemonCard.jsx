import {
  BoxInfoAndType,
  BoxTipo,
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
import { useNavigate } from "react-router-dom";
import pokemonTypes from "../../pokemonTypes";
import { goToDetail } from "../Routers/cordinator";

function PokemonCard({ name, image, id, types, pokemon }) {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <PokemonImage src={image} alt="Pokemon" />
        <CardBox types={types}>
          <InfoBox>
            <BoxInfoAndType>
              <IdPokemon>{id}</IdPokemon>
              <NomePokemon>{name}</NomePokemon>
              <BoxTipo>
                {types.map((type) => (
                  <TypeImg
                    key={type.type.name}
                    src={pokemonTypes[type.type.name]}
                    alt={type.type.name}
                  />
                ))}
              </BoxTipo>
            </BoxInfoAndType>
            <DetailButtom
              onClick={() => {
                goToDetail(navigate, pokemon);
              }}
            >
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
