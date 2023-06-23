import { Box, Flex, Image, Progress, Text } from "@chakra-ui/react";
import bigPokeBola from "../../../assets/img/pokemonTypes/pokeballBackGroundDetail.png";
import miniPokebola from "../../../assets/img/pokemonTypes/pokeballDetailInsideBackground.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../api";
import typeImage from "../../../Util/types";
import cor from "../../../Util/themes";

const PokemonDetailPage = () => {
  let total = 0;
  let moveCount = 0;
  const params = useParams();
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    api.get("/pokemon/" + params.id).then((response) => {
      setPokemon(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!loading) {
    for (const stat of pokemon.stats) {
      total += stat.base_stat;
    }
  }
  return (
    <Box position={"relative"}>
      <Text
        fontSize={"3rem"}
        fontFamily={"Poppins"}
        position={"absolute"}
        top={"3rem"}
        left={"2.5rem"}
        color={"white"}
        fontWeight={700}
      >
        Detalhes!
      </Text>

      <Image
        position={"absolute"}
        w={"56.812rem"}
        h={"56.812rem"}
        top={"-3.125rem"}
        left={"50%"}
        transform={"translate(-50%)"}
        src={bigPokeBola}
        alt=""
      />

      <Box
        position={"absolute"}
        w={"86.821rem"}
        h={"41.438rem"}
        left={"50%"}
        top={"11.75rem"}
        transform={"translate(-50%)"}
        bgColor={cor.colors.backgroundCard[pokemon?.types[0].type.name]}
        borderRadius={"2.368rem"}
      >
        <Image
          position={"absolute"}
          top={0}
          right={0}
          h={"41.438rem"}
          src={miniPokebola}
          alt=""
        />

        <Image
          src={pokemon.sprites?.other["official-artwork"].front_default}
          alt=""
          zIndex={1}
          position={"absolute"}
          top={"-8.25rem"}
          left={"67.75rem"}
          h={"16.875rem"}
          w={"16.875rem"}
        />
        <Flex
          position={"absolute"}
          bgColor={"white"}
          w={"17.625rem"}
          h={"17.625rem"}
          left={"2.75rem"}
          top={"1.625rem"}
          borderRadius={"0.5rem"}
          border={"0.125rem solid white"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            width={"35%"}
            height={"35%"}
            src={
              pokemon.sprites.versions["generation-v"]["black-white"].animated
                .front_default
            }
          />
        </Flex>

        <Flex
          position={"absolute"}
          bgColor={"white"}
          w={"17.625rem"}
          h={"17.625rem"}
          left={"2.75rem"}
          top={"22.188rem"}
          borderRadius={"0.5rem"}
          border={"0.125rem solid white"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            width={"35%"}
            height={"35%"}
            src={
              pokemon.sprites.versions["generation-v"]["black-white"].animated
                .back_default
            }
          />
        </Flex>

        <Box
          position={"absolute"}
          bgColor={"white"}
          w={"21.438rem"}
          h={"38.313rem"}
          left={"22.5rem"}
          top={"1.5rem"}
          borderRadius={"0.75rem"}
        >
          {pokemon.stats.map((stat) => {
            return (
              <>
                <Text textTransform="capitalize">
                  {stat.stat.name} {stat.base_stat}
                </Text>
                <Progress
                  value={stat.base_stat}
                  colorScheme={`hsl(${stat.base_stat * 0.8}, 80%, 50%)}`}
                />
              </>
            );
          })}
          <Text>Total: {total}</Text>
        </Box>

        <Box
          position={"absolute"}
          bgColor={"white"}
          w={"18.25rem"}
          h={"28.313rem"}
          left={"48.188rem"}
          top={"11.5rem"}
          borderRadius={"0.5rem"}
        >
          <Text
            fontWeight={800}
            fontSize={"1.5rem"}
            marginBottom={"1rem"}
            marginTop={"1rem"}
          >
            Moves:
          </Text>
          {pokemon.moves.map((move) => {
            if (moveCount < 5) {
              moveCount++;
              return (
                <Text
                  alignItems={"flex-start"}
                  bgColor={"#ECECEC"}
                  border={"1px dashed rgba(0, 0, 0, 0.14)"}
                  borderRadius={"12px"}
                  w={"10rem"}
                  h={"2.313rem"}
                  textTransform={"capitalize"}
                  marginLeft={"1rem"}
                  marginBottom={"1rem"}
                  fontFamily={"Poppins"}
                  paddingLeft={"0.625rem"}
                >
                  {move.move.name}
                </Text>
              );
            }
          })}
        </Box>

        <Text
          fontSize={"1rem"}
          fontFamily={"Inter"}
          position={"absolute"}
          top={"1.5rem"}
          left={"48.375rem"}
          color={"white"}
        >
          # {pokemon.id < 10 ? `0${pokemon.id}` : pokemon.id}
        </Text>

        <Text
          fontSize={"3rem"}
          fontFamily={"Inter"}
          position={"absolute"}
          top={"2.438rem"}
          left={"48.188rem"}
          color={"white"}
          textTransform={"capitalize"}
        >
          {pokemon.name}
        </Text>

        <Flex
          gap={"0.3rem"}
          position={"absolute"}
          left={"48.375rem"}
          top={"6.625rem"}
        >
          {pokemon.types.map((type, i) => {
            return <Image key={i} src={typeImage[type.type.name]} />;
          })}
        </Flex>
      </Box>
    </Box>
  );
};

export default PokemonDetailPage;
