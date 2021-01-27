import * as S from "./styles";
import { Button, Box } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

const PokemonsList = (props) => {
    const {pokemons, buttonFunction, buttonName, page, setPage, itensPage} = props
    const count = buttonName === "CAPTURAR" ? (Math.ceil(pokemons[0]?.count / itensPage)) : Math.ceil(pokemons.length / itensPage)
    return (
        <S.PageWrapper>
            {pokemons?.map((data) => (
                <S.PaperStyled key={data.id}>
                    <img alt={data.name} src={data.image} />
                    <div className="info">
                        <h2># {data.id}</h2>
                        <h3>{data.name.toUpperCase()}</h3>
                        <p>
                            <strong>Type</strong>: {data.types[0].type.name.toUpperCase()}
                        </p>
                    </div>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => buttonFunction(data)}
                    >
                        {buttonName}
          </Button>
                </S.PaperStyled>
            ))}
            <Box display="flex" justifyContent="center" m={4}>
                <Pagination
                    count={count}
                    page={page / itensPage + 1}
                    onChange={(e, value) => setPage(itensPage * (value - 1))}
                />
            </Box>
        </S.PageWrapper>
    )
}
export default PokemonsList
