export function goToHome(navigate) {
  navigate("/");
}
export function goToPokedex(navigate) {
  navigate("/pokedex");
}
export function goToDetail(navigate, pokemon) {
  navigate("/detail", { state: { prop: pokemon } });
}
