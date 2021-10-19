import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
interface LinkProps {
  link: {
    id: number;
    to: string;
    link: string;
  };
}
interface StylesProps {
  active: string;
}
const ActiveLink = css`
  color: red;
  border: 1px solid red;
  font-weight: 600;
`;
const StyledLink = styled(Link)<StylesProps>`
  color: #fff;
  text-decoration: none;
  letter-spacing: 1.5px;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  padding: 16px;

  ${(p) => p.active==='1' && ActiveLink}
`;
const LinkNav = ({ link }: LinkProps) => {
  const location = useLocation();
  return (
    <li>
      <StyledLink
        active={location.pathname === link.to?'1':'0'}
        to={link.to}
      >
        {link.link}
      </StyledLink>
    </li>
  );
};

export default LinkNav;
