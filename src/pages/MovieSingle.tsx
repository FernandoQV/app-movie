import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Loader from "../components/Loader";
import getMovies from "../services/getMovies";
import { InfoMovieProps } from "../types-interfaces/infoMovieInterface";

type MovieSingleParams = {
  id: string;
};
const Container = styled.div`
  display: flex;
  margin: 3rem auto;
  flex-wrap: wrap;
  padding: 32px;
  gap: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 1px 2px 0 hsla(0, 0%, 0%, 0.1);
  justify-content: center;
  align-items: center;
  :hover {
    box-shadow: 0 2px 2px 0 hsla(0, 0%, 0%, 0.15);
    background-color: #f6f8f8;
  }
`;
const ContainerInfo = styled.div`
  min-width: 300px;
  max-width: 500px;
`;
const MenuGenero = styled.ul`
  display: flex;
  gap: 0.5rem;
  padding: 0;
  margin: 0;
  justify-content: flex-start;
  li {
    list-style: none;
    border-radius: 0.5rem;
    background-color: #c1f6f6;
    padding: 8px 16px;
    text-align: center;
    font-weight: 600;
    color: #0e6886;
  }
`;
const MovieSingle = () => {
  const [movie, setMovie] = useState<InfoMovieProps>();
  const { id } = useParams<MovieSingleParams>();
  useEffect(() => {
    getMovies(`movie/${id}`)
      .then(setMovie);
  }, [id]);

  return !movie ? (
    <Loader/>
  ) : (
    <Container>
      <img
        width={500}
        height={500}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ borderRadius: "8px", height: "auto" }}
      />
      <ContainerInfo>
        <h2>
          <strong>Title: </strong>
          {movie.title}
        </h2>
        <p>
          <strong>Description: </strong>
          {movie.overview}
        </p>
        <MenuGenero>
          {movie.genres.map((genero) => (
            <li key={genero.id}>{genero.name}</li>
          ))}
        </MenuGenero>
      </ContainerInfo>
    </Container>
  );
};

export default MovieSingle;
