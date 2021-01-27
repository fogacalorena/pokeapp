// import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom";

import { AppBar, Typography, Button } from "@material-ui/core";
import * as S from "./styles"

// import { setInputSearch } from "../../redux/actions"

function Navbar() {
  // const dispatch = useDispatch();
  const history = useHistory()
  return (
    <AppBar>
      <S.ToolbarStyled>
        <Typography variant="h3" component="h1">
          Poke App
        </Typography>
        <div style={{ flexGrow: 1}}/>
        <div>
        <Button variant="contained" color="secondary" onClick={() => history.push("/")}> Todos Pokemons </Button>
        <Button variant="contained" color="secondary" onClick={() => history.push("/mypokemons")}> Meus Pokemons </Button>
        </div>
      </S.ToolbarStyled>
    </AppBar>
  );
}

export default Navbar;
