import { styled } from "styled-components";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { device } from "../utils/sizes";

const StyledHeader = styled.div`
  & img {
    position: absolute;
    top: 2%;
    left: 2%;
    width: 10rem;
    z-index: 100;

    @media ${device.mobile} {
      left: 4%;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <img src="/logo.png" alt="Logo of company" />
      </Link>
      <Navigation />
    </StyledHeader>
  );
}

export default Header;
