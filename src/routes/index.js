import { BrowserRouter, Route, Switch } from "react-router-dom";
import Catalogo from "../pages/Catalogo";
import MeusPokemons from "../pages/MeusPokemons";
import Pokebola from "../pages/Pokebola";

function Routes() {
    return (
        <BrowserRouter>

            <Switch>

                <Route
                    path="/"
                    component={Catalogo}
                    exact
                />

                <Route
                    path="/pokebola"
                    component={Pokebola}
                />

                <Route
                    path="/mypokemons"
                    component={MeusPokemons}
                />

            </Switch>

        </BrowserRouter>
    )
}

export default Routes