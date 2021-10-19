import { useEffect, useState } from "react";
import styled from "styled-components";
import getMovies from "../services/getMovies";
import { MovieProps } from "../types-interfaces/movieInterface";
import MovieCard from "./MovieCard";
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 84px;
  margin-top: 64px;
  background-color: #c7cdd3;
`;
const MoviesGrid = () => {
  const [movies, setMovies] = useState<Array<MovieProps>>([]);
  useEffect(() => {
    getMovies("discover/movie").then((data) => setMovies(data.results));
  }, []);
  return (
    <Container>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </Container>
  );
};

export default MoviesGrid;
