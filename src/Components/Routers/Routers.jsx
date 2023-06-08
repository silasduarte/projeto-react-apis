import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import PokemonListPage from "../pages/PokemonListPage/PokemonListPage";
import PokemonDetailPage from "../pages/PokemonDetailPage/PokemonDetailPage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<PokemonListPage />} />
        <Route path="/detail" element={<PokemonDetailPage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
      </Routes>
    </BrowserRouter>
  );
};
