import { useSelector } from "react-redux";
import { getPokemonClicked } from "../../redux/selectors"

function Pokebola() {
    const pokemonClicked = useSelector(getPokemonClicked);
    console.log(pokemonClicked)

    return(
        <div>Pokebola</div>
    )
}

export default Pokebola
