import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import typeImage from "../../Util/types";
import cor from "../../Util/themes";
import pokebola from "../../assets/img/pokebola.svg";
import { goToDetail } from "../Routers/cordinator";
import { useNavigate } from "react-router-dom";

function PokemonCard({ pokemon }) {
  const navigate = useNavigate();
  return (
    <>
      <Box
        position={"relative"}
        w={"27.5rem"}
        h={"16.438rem"}
        margin={"1px solid black"}
      >
        <Image
          src={pokemon.sprites.other["official-artwork"].front_default}
          position={"absolute"}
          w={"12.063rem"}
          h={"12.063rem"}
          zIndex={1}
          right={0}
        />
        <Box
          position={"absolute"}
          bottom={0}
          bgColor={cor.colors.backgroundCard[pokemon?.types[0].type.name]}
          w={"27.5rem"}
          h={"13.125rem"}
          borderRadius={"0.8rem"}
          color={"white"}
        >
          <Text
            position={"absolute"}
            fontSize={"1rem"}
            top={"1.563rem"}
            left={"1.438rem"}
          >
            # {pokemon.id < 10 ? `0${pokemon.id}` : pokemon.id}
          </Text>
          <Text
            position={"absolute"}
            fontSize={"2remn"}
            top={"2.5rem"}
            left={"1.438rem"}
            textTransform={"capitalize"}
          >
            {pokemon.name}
          </Text>
          <Flex position={"absolute"} top={"5.563rem"} left={"1.438rem"}>
            {pokemon.types.map((type, i) => {
              return <Image key={i} src={typeImage[type.type.name]} />;
            })}
          </Flex>
          <Button
            onClick={() => {
              goToDetail(navigate, pokemon.id);
            }}
            position={"absolute"}
            left={"1rem"}
            bottom={"1rem"}
            w={"4.5rem"}
            h={"2rem"}
            background={"transparent"}
            color={"white"}
            textDecoration={"underline"}
          >
            Detalhes!
          </Button>
          <Button
            position={"absolute"}
            right={"2rem"}
            bottom={"2rem"}
            w={"9.125rem"}
            borderRadius={"0.5rem"}
            fontSize={"1rem"}
            bgColor={"#ffffff"}
            fontFamily={"Poppins"}
          >
            Capturar!
          </Button>
          <Image
            src={pokebola}
            alt="pokebola"
            position={"absolute"}
            right={0}
            top={0}
          />
        </Box>
      </Box>
    </>
  );
}

export default PokemonCard;
