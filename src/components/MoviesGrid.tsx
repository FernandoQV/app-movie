import { useEffect, useState } from "react";
import styled from "styled-components";
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
    fetch("https://api.themoviedb.org/3/discover/movie", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((result) => result.json())
      .then((data) => setMovies(data.results));
  }, []);
  return (
    <Container>
      {movies.map(movie => (
        <MovieCard key={movie.id} {...movie}/>
      ))}
    </Container>
  );
};

export default MoviesGrid;
