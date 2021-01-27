import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setMyPokemons } from "../../redux/actions";
import PokemonsList from "../../components/PokemonsList";
import Navbar from "../../components/Navbar";

function Catalogo() {
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const itensPage = 25;

  useEffect(() => {
    (async () => {
      const dataInAPI = (
        await axios.get(
          `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=${itensPage}`
        )
      ).data;
      const resultFormatted = dataInAPI.results?.map(async (item, index) => {
        const urlInfo = await axios.get(item.url);
        const { data } = await Promise.resolve(urlInfo);
        return {
          name: item.name,
          id: data.id,
          image: data?.sprites.front_default,
          types: data?.types,
          count: dataInAPI.count,
        };
      });
      const result = await Promise.all(resultFormatted);
      setPokemons(result);
    })();
  }, [page]);

  const addPokemon = (pokemon) => {
    dispatch(setMyPokemons(pokemon));
  };

  return (
    <>
      <Navbar />
      <PokemonsList
        pokemons={pokemons}
        buttonFunction={addPokemon}
        buttonName="CAPTURAR"
        page={page}
        setPage={setPage}
        itensPage={itensPage}
      />
    </>
  );
}

export default Catalogo;
