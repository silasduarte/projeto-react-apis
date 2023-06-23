import { createContext, useState } from "react";

export const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [pokedex, setPokedex] = useState([]);
  const [pokemonGlobal, setPokemonGlobal] = useState({});
  function addPokedex(pokemon) {
    setPokedex([...pokedex, pokemon]);
  }
  function removePokedex(pokemon) {
    setPokedex(
      pokedex.filter((pokemonFilter) => pokemon.id !== pokemonFilter.id)
    );
  }
  return (
    <GlobalContext.Provider
      value={{
        pokedex,
        setPokedex,
        addPokedex,
        removePokedex,
        pokemonGlobal,
        setPokemonGlobal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export default GlobalContextProvider;
