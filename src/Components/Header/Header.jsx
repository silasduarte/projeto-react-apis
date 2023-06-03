import { BotaoHome, BotaoPokedex, Container, Logo } from "./headerStyled";
import logo from "../../assets/img/logopokemon.svg";
import menor from "../../assets/img/menorQue.svg";

function Header() {
  return (
    <Container>
      <BotaoHome>
        <img src={menor} alt="" />
        <u> Todos Pokémon</u>
      </BotaoHome>
      <Logo src={logo} alt="logo do pokemon" />
      <BotaoPokedex>Pokédex</BotaoPokedex>
    </Container>
  );
}
export default Header;
