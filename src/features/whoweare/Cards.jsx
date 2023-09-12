import { FaCrown, FaGlobeEurope, FaHiking } from "react-icons/fa";
import { styled } from "styled-components";
import { device } from "../../utils/sizes";

const StyledCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 2.4rem;
  margin-bottom: 8rem;

  @media ${device.mobileS} {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  z-index: 2;
  background-color: var(--color-white);
  box-shadow: var(--box-shadow-light);
  border-top-left-radius: 5rem;
  border-bottom-right-radius: 5rem;
  padding: 4.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & svg {
    width: 4.8rem;
    height: 4.8rem;
    margin-bottom: 1rem;
    fill: var(--color-primary);
  }

  & h5 {
    font-size: 2.4rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  & p {
    font-size: 1.8rem;
    line-height: 1.7;
  }
`;

function Cards() {
  return (
    <StyledCards>
      <Card>
        <FaGlobeEurope />
        <h5>Travel</h5>
        <p>
          Embrace the journey of a lifetime as we craft a transformative
          experience just for you. Our team of travel pioneers will guide you
          step by step.
        </p>
      </Card>
      <Card>
        <FaHiking />
        <h5>ADVENTURE</h5>
        <p>
          Explore the world your way with our wide-ranging selection of travel
          experiences. Choose from an array of exhilarating journeys.
        </p>
      </Card>
      <Card>
        <FaCrown />
        <h5>LUXURY</h5>
        <p>
          Experience the epitome of travel refinement with our curated selection
          of luxurious getaways.
        </p>
      </Card>
    </StyledCards>
  );
}

export default Cards;
