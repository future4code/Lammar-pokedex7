import { useContext } from "react";
import React from "react";
import GlobalContext from "../../global/GlobalContext";

import {
  Container,
  Image,
  Name,
  Button,
  RemoveIcon,
  ImageContainer,
} from "./styles";

export default function CardPokedex({ pokemon, name, url }) {
  const { setters } = useContext(GlobalContext);
  const [, id] = url.match(/pokemon\/(\d+)\//i);

  return (
    <Container>
      <ImageContainer>
        <Imgem
          src={`(https://cdn.iset.io/assets/55268/arquivos/sistemas/kit-de-etiquetas/img/pokemons/icone-1.png`}
        />
      </ImageContainer>
      <Name>{name}</Name>
      <Button onClick={() => setters.removeFromPokedex(pokemon)}>
        <RemoveIcon />
        Remover
      </Button>
    </Container>
  );
}