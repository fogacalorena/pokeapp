import styled from "styled-components"
import { Paper } from "@material-ui/core"

export const PageWrapper = styled.div`
  margin: 12vh 2em;
`

export const PaperStyled = styled(Paper)`
  display: flex;
  height: 20vh;
  margin: 2vh 5vw;
  padding: 5px 10px;
  align-items: center;
  justify-content: space-between;

  img {
    height: 100%;
    margin-right: 30px;
  }

  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  button {
    padding: 10px 25px;
  }
`
