import { useEffect, useState } from "react";
import { api } from "../../../api";
import PokemonCard from "../../pokemonCard/PokemonCard";
import { CardsContainer, TituloDaPagina } from "./pokemonListPageStyle";
import { Grid, Text } from "@chakra-ui/react";

function PokemonListPage() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api.get("/pokemon").then((res) => {
      const results = res.data.results;
      console.log(results);
      const promise = results.map((result) => api.get(result.url));
      Promise.all(promise).then((responses) => {
        const pokemonData = responses.map((res) => res.data);
        console.log(pokemonData);
        setPokemons(pokemonData);
      });
    });
  }, []);
  return (
    <>
      <Text
        color={"white"}
        fontFamily={"Poppins"}
        fontSize={"3rem"}
        marginTop={"3.75rem"}
        marginLeft={"5.8rem"}
      >
        Todos Pokémons
      </Text>
      <Grid templateColumns={"repeat(3,1fr)"} justifyItems={"center"}>
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id}></PokemonCard>
        ))}
      </Grid>
    </>
  );
}
export default PokemonListPage;
