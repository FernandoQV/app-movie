import styled from "styled-components";
import LinkNav from "./LinkNav";

const links = [
  {
    id: 1,
    to: "/",
    link: "Home",
  },
  {
    id: 2,
    to: "/acerca",
    link: "Acerca",
  },
  {
    id: 3,
    to: "/contacto",
    link: "Contacto",
  },
];
const Container = styled.header`
  width: 100vw;
  padding: 0 32px;
  height: 64px;
  background-color: #101218;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.div`
  height: 48px;
  color: #fff;
  text-transform: uppercase;
  flex: 2;
  h1 {
    margin: 0;
    line-height: 48px;

  }
`;
const Nav = styled.ul`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0;
  margin: 0;
  li {
    flex: 1;
    list-style: none;
    min-width: 110px;
  }
`;

const Header = () => {
  return (
    <Container>
      <Logo>
        <h1>Movie TonY</h1>
      </Logo>
      <Nav>
        {links.map((link) => (
          <LinkNav key={link.id} link={link} />
        ))}
      </Nav>
    </Container>
  );
};

export default Header;
