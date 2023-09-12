import { styled } from "styled-components";
import HeroTextBox from "./HeroTextBox";
import { device } from "../../utils/sizes";

const StyledHero = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  background: var(--background-hero), url("/hero.jpg");
  background-size: cover;
  background-position: center;

  @media ${device.laptop} {
    height: 100vh;
  }
`;

function Hero() {
  return (
    <StyledHero>
      <HeroTextBox />
    </StyledHero>
  );
}

export default Hero;
