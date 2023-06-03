import Header from "./Components/Header/Header";
import PokemonListPage from "./Components/pages/PokemonListPage/PokemonListPage";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <PokemonListPage />
    </>
  );
}

export default App;
