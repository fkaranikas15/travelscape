import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { device } from "../utils/sizes";

const StyledNavigation = styled.div`
  & button {
    background-color: var(--color-white);
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    border: none;
    position: fixed;
    top: 3%;
    right: 2%;
    z-index: 200;
    box-shadow: var(--box-shadow-dark);
    text-align: center;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    @media ${device.mobile} {
      right: 4%;
    }

    & span {
      position: relative;
      &,
      &::before,
      &::after {
        width: 3rem;
        height: 2px;
        background-color: var(--color-black);
        display: inline-block;
      }

      & {
        background-color: ${(props) => props.isopen && "transparent"};
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        left: 0;
        transition: all 0.2s;
      }

      &::before {
        top: ${(props) => (props.isopen ? "0" : "-1rem")};
        transform: ${(props) => props.isopen && "rotate(135deg)"};
      }

      &::after {
        top: ${(props) => (props.isopen ? "0" : "1rem")};
        transform: ${(props) => props.isopen && "rotate(-135deg)"};
      }
    }
  }

  & div {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    position: fixed;
    top: 3.2%;
    right: 2.2%;
    background-image: var(--background-navigation);
    z-index: 100;
    transform: ${(props) => props.isopen && "scale(80)"};
    transition: all 0.8s cubic-bezier(0.86, 0, 0.07, 1);

    @media ${device.mobile} {
      right: 4.4%;
    }
  }

  & nav {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 150;
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    opacity: ${(props) => (props.isopen ? "1" : "0")};
    width: ${(props) => (props.isopen ? "100%" : "0")};

    & ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }
  }
`;

const StyledLink = styled(Link)`
  &:link,
  &:visited {
    display: inline-block;
    font-size: 3.2rem;
    font-weight: 300;
    color: var(--color-white);
    text-decoration: none;
    text-transform: uppercase;
    padding: 1rem 2rem;
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      white 50%
    );
    background-size: 250%;
    transition: all 0.4s;
  }

  &:hover,
  &:active {
    background-position: 100%;
    color: var(--color-black);
    transform: translateX(1rem);
  }
`;

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavigation() {
    setIsOpen(!isOpen);
  }
  return (
    <StyledNavigation isopen={isOpen}>
      <button onClick={handleNavigation}>
        <span>&nbsp;</span>
      </button>
      <div>&nbsp;</div>
      <nav>
        <ul>
          <li>
            <StyledLink to="/" onClick={handleNavigation}>
              Home
            </StyledLink>
          </li>

          <li>
            <StyledLink to="/about" onClick={handleNavigation}>
              About
            </StyledLink>
          </li>

          <li>
            <StyledLink to="/schedule" onClick={handleNavigation}>
              Schedule
            </StyledLink>
          </li>

          <li>
            <StyledLink to="/blog" onClick={handleNavigation}>
              Blog
            </StyledLink>
          </li>

          <li>
            <StyledLink to="/tours" onClick={handleNavigation}>
              Tours
            </StyledLink>
          </li>

          <li>
            <StyledLink to="/destinations" onClick={handleNavigation}>
              Destinations
            </StyledLink>
          </li>

          <li>
            <StyledLink to="/contact" onClick={handleNavigation}>
              Contact
            </StyledLink>
          </li>
        </ul>
      </nav>
    </StyledNavigation>
  );
}

export default Navigation;
