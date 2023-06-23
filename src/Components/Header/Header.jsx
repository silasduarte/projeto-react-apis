import logo from "../../assets/img/logopokemon.svg";
import menor from "../../assets/img/menorQue.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { goToHome, goToPokedex } from "../Routers/cordinator";
import { Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [buttonFuction, setButtonFuction] = useState("");
  const { pokemonGlobal, addPokedex, removePokedex, pokedex } =
    useContext(GlobalContext);
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="10%"
      backdropBlur="7px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayTwo />);
  function onCloseModal() {
    onClose();
    if (buttonFuction === "remover") {
      removePokedex(pokemonGlobal);
    }
  }
  return (
    <Grid
      h={"10rem"}
      templateColumns={"repeat(16,1fr)"}
      alignItems={"center"}
      bgColor={"#ffffff"}
    >
      <GridItem colStart={2} colEnd={7}>
        {location.pathname != "/" && (
          <Flex>
            <Image src={menor} />
            <Button
              onClick={() => {
                goToHome(navigate);
              }}
              bgColor={"transparent"}
              textDecoration={"underline"}
              fontWeight={"bolder"}
              fontSize={"1rem"}
              w={"8.5rem"}
            >
              Todos Pokémons
            </Button>
          </Flex>
        )}
      </GridItem>
      <GridItem colStart={7} colEnd={12}>
        <Image src={logo} alt="logo" />
      </GridItem>

      <GridItem colStart={13} colEnd={16}>
        {location.pathname === "/" && (
          <Button
            onClick={() => {
              goToPokedex(navigate);
            }}
            bgColor={"#33A4F5"}
            color={"white"}
            w={"19.938rem"}
            h={"4.625rem"}
            fontSize={"1.5rem"}
          >
            Pokédex
          </Button>
        )}
        {location.pathname.includes("detail") &&
          (!pokedex.find((pokemon) => pokemon.id === pokemonGlobal.id) ? (
            <Button
              onClick={() => {
                setButtonFuction("");
                onOpen();
                addPokedex(pokemonGlobal);
              }}
              bgColor={"#33A4F5"}
              color={"white"}
              w={"19.938rem"}
              h={"4.625rem"}
              fontSize={"1.5rem"}
            >
              Capturar!
            </Button>
          ) : (
            <Button
              onClick={() => {
                setButtonFuction("remover");
                onOpen();
              }}
              bgColor={"#ff6060"}
              color={"white"}
              w={"19.938rem"}
              h={"4.625rem"}
              fontSize={"1.5rem"}
            >
              Remover!
            </Button>
          ))}
      </GridItem>
      <Modal isCentered isOpen={isOpen} onClose={onCloseModal}>
        {overlay}
        <ModalContent>
          <ModalHeader>
            {buttonFuction !== "remover" ? "Gotcha!" : "Ooh no!"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              {buttonFuction !== "remover"
                ? "Pokémon foi capturado com sucesso!"
                : "Pokémon foi removido com sucesso!"}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onCloseModal}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Grid>
  );
}
export default Header;
