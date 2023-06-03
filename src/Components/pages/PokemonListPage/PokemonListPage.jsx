import PokemonCard from "../../pokemonCard/PokemonCard";
import { CardsContainer, TituloDaPagina } from "./pokemonListPageStyle";
function PokemonListPage() {
  return (
    <>
      <TituloDaPagina>Todos Pokémons</TituloDaPagina>
      <CardsContainer>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </CardsContainer>
    </>
  );
}
export default PokemonListPage;
