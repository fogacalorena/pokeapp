import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonsList from "../../components/PokemonsList";
import { getMyPokemons } from "../../redux/selectors";
import { removeMyPokemon } from "../../redux/actions";
import Navbar from "../../components/Navbar";

const MeusPokemons = () => {
  const myPokemons = useSelector(getMyPokemons);
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const itensPage = 25;

  const removePokemon = (pokemon) => {
    dispatch(removeMyPokemon(pokemon));
  };

  return (
    <>
      <Navbar />
      <PokemonsList
        pokemons={myPokemons}
        buttonFunction={removePokemon}
        buttonName="SOLTAR"
        page={page}
        setPage={setPage}
        itensPage={itensPage}
      />
    </>
  );
};
export default MeusPokemons;
