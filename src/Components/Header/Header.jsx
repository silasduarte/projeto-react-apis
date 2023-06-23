import logo from "../../assets/img/logopokemon.svg";
import menor from "../../assets/img/menorQue.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { goToHome, goToPokedex } from "../Routers/cordinator";
import { Button, Flex, Grid, GridItem, Image } from "@chakra-ui/react";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
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
      </GridItem>
    </Grid>
  );
}
export default Header;
