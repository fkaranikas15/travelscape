import {
  FaArrowRight,
  FaLightbulb,
  FaMapMarkedAlt,
  FaUserCheck,
} from "react-icons/fa";
import { styled } from "styled-components";
import { Button } from "../../ui/Button";
import { device } from "../../utils/sizes";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media ${device.tabletL} {
    grid-template-columns: 1fr;
    gap: 4rem;
    text-align: center;
  }

  & img {
    width: 100%;
    align-self: center;
    justify-self: center;

    @media ${device.tabletL} {
      display: none;
    }
  }
`;

const TextArea = styled.div`
  @media ${device.tabletL} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & p {
    font-size: 1.8rem;
    color: var(--color-dark-grey);
    margin-bottom: 4rem;
  }
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  margin-bottom: 4.8rem;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }

  & div {
    padding: 2rem;
  }

  & div:nth-child(2) {
    border-left: 2px solid var(--color-light-grey);
    border-right: 2px solid var(--color-light-grey);

    @media ${device.mobile} {
      border-left: none;
      border-right: none;
      border-top: 2px solid var(--color-light-grey);
      border-bottom: 2px solid var(--color-light-grey);
    }
  }

  & svg {
    width: 4.8rem;
    height: 4.8rem;
    fill: var(--color-primary);
    margin-bottom: 1rem;
  }

  & h5 {
    font-size: 2rem;
    text-transform: uppercase;
  }
`;

function AboutGrid() {
  return (
    <Grid>
      <TextArea>
        <h3>who we are</h3>
        <h4>Elevate Your Travel Experience</h4>
        <p>
          Elevate your travel experience with our tailored journeys designed to
          fulfill your wanderlust dreams.
        </p>
        <Features>
          <div>
            <FaUserCheck />
            <h5>Professional Travelers</h5>
          </div>
          <div>
            <FaLightbulb />
            <h5>Smart Journeys</h5>
          </div>
          <div>
            <FaMapMarkedAlt />
            <h5>Elegant Escapes</h5>
          </div>
        </Features>
        <Button variation="primary">
          Take A Tour <FaArrowRight />
        </Button>
      </TextArea>
      <img src="/about.png" alt="A traveler" />
    </Grid>
  );
}

export default AboutGrid;
