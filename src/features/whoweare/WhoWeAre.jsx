import { styled } from "styled-components";
import Cards from "./Cards";
import AboutGrid from "./AboutGrid";

const StyledWhoWeAre = styled.div`
  margin-top: -6rem;
  margin-bottom: 16rem;
`;

function WhoWeAre() {
  return (
    <StyledWhoWeAre>
      <Cards />
      <AboutGrid />
    </StyledWhoWeAre>
  );
}

export default WhoWeAre;
