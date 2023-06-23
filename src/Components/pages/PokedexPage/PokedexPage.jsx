import { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import PokemonCard from "../../pokemonCard/PokemonCard";
import { Grid, Text } from "@chakra-ui/react";

function PokedexPage() {
  const { pokedex } = useContext(GlobalContext);
  return (
    <>
      <Text
        fontSize={"3rem"}
        fontWeight={800}
        color={"white"}
        fontFamily={"Poppins"}
        paddingLeft={"1rem"}
      >
        Meus Pokémons
      </Text>
      <Grid templateColumns={"repeat(3,1fr)"} justifyItems={"center"}>
        {" "}
        {pokedex.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
        })}
      </Grid>
    </>
  );
}
export default PokedexPage;
