import { styled } from "styled-components";
import ShareBox from "./ShareBox";
import { Button } from "../../ui/Button";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { device } from "../../utils/sizes";

const StyledBox = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);

  @media ${device.laptop} {
    left: 40%;
  }

  @media ${device.mobileS} {
    left: 50%;
  }

  & span {
    position: relative;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--color-black);
    z-index: 2;
    & img {
      pointer-events: none;
      position: absolute;
      top: -1.5rem;
      left: -3rem;
      filter: brightness(0) invert(1);
      width: 140%;
      height: auto;
      z-index: -1;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function HeroTextBox() {
  return (
    <StyledBox>
      <span>
        <img src="/painting.svg" alt="painting" />
        discover your paradise
      </span>
      <h1>make your vacation</h1>
      <h2>memorable & perfect</h2>
      <StyledLink to="/destinations">
        <Button variation="classic">
          Our Destinations <FaArrowRight />
        </Button>
      </StyledLink>
      <ShareBox />
    </StyledBox>
  );
}

export default HeroTextBox;
