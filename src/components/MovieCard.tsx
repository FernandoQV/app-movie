

import { Link } from "react-router-dom";
import styled from "styled-components";
import { MovieProps } from "../types-interfaces/movieInterface";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 16px;
  max-width: 300px;
  background-color: #e5ebf0;
  cursor: pointer;
  :hover img{
      opacity: .8;
  }
`;
const ImageMovie = styled.img`
  max-width: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;
const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;
const MovieCard = ({poster_path,id,title,}:MovieProps): JSX.Element => {
  
  
  const imageURL = `https://image.tmdb.org/t/p/w300${poster_path}`;
  return (
    <Link to={`/movie/${id}`} style={{textDecoration:0}}>
      <Container>
        <ImageMovie
          width={300}
          height={400}
          src={imageURL}
          alt="Peli de Moda"
        />
        <Title>{title}</Title>
      </Container>
    </Link>
  );
};

export default MovieCard;
