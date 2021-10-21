
import styled from "styled-components";
import MoviesGrid from "../components/MoviesGrid";
import Search from "../components/Search";

const Container=styled.div`
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 32px 0;
`
const Home = () => {
  
  return (
    <Container>
        <Search/>    
      <MoviesGrid />
    </Container>
  );
};

export default Home;
