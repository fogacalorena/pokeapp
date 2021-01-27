import { combineReducers } from "redux";
import search from "./search";
import pokemons from "./pokemons";

export default combineReducers({
  search,
  pokemons,
});
