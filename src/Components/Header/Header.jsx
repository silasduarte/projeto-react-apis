import {
  BotaoHome,
  BotaoPokedex,
  ButtonRemovePokemon,
  Container,
  Logo,
} from "./headerStyled";
import logo from "../../assets/img/logopokemon.svg";
import menor from "../../assets/img/menorQue.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { goToHome, goToPokedex } from "../Routers/cordinator";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Container>
      {location.pathname !== "/" && (
        <BotaoHome
          onClick={() => {
            goToHome(navigate);
          }}
        >
          <img src={menor} alt="" />
          <u> Todos Pokémon</u>
        </BotaoHome>
      )}
      <Logo src={logo} alt="logo do pokemon" />
      {location.pathname === "/" && (
        <BotaoPokedex
          onClick={() => {
            goToPokedex(navigate);
          }}
        >
          Pokédex
        </BotaoPokedex>
      )}
      {location.pathname.includes("/detail") && (
        <ButtonRemovePokemon
          onClick={() => (
            aler("Pokemon Removido da pokedex"), goToPokedex(navigate)
          )}
        >
          Excluir da Pokédex
        </ButtonRemovePokemon>
      )}
    </Container>
  );
}
export default Header;
