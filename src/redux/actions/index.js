import * as types from "../types"

export const setInputSearch = (inputData) => ({
  type: types.SET_INPUT_SEARCH,
  payload: {
    inputData,
  },
});

export const setClickedPokemon = (pokemonNumber) => ({
  type: types.SET_CLICKED_POKEMON,
  payload: {
    pokemonNumber,
  },
});

export const setMyPokemons = (pokemon) => ({
  type: types.SET_MY_POKEMONS,
  payload: {
    pokemon,
  },
});

export const removeMyPokemon = (pokemon) => ({
  type: types.REMOVE_MY_POKEMON,
  payload: {
    pokemon,
  },
});
