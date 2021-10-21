import { useEffect, useState } from "react";
import styled from "styled-components";
import { useQuery } from "../hooks/useQueryHistory";
import getMovies from "../services/getMovies";
import { MovieProps } from "../types-interfaces/movieInterface";
import MovieCard from "./MovieCard";
const Container = styled.div`
width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 84px;
  margin-top: 64px;
  background-color: #3886d4;
  place-items: center;
`;
const MoviesGrid = () => {
  const [movies, setMovies] = useState<Array<MovieProps>>([]);
  const query = useQuery();
  const search = query.get("search");
  
  useEffect(() => {
   const URL_MOVIES:string=search? `/search/movie?query=${search}`:'discover/movie'
    getMovies(URL_MOVIES).then((data) => setMovies(data.results));
  }, [search]);
  return (
    <Container>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </Container>
  );
};

export default MoviesGrid;
